import React, { useEffect, useState } from "react";
// import Claimable from "../components/rootVIC1aimPage/Claimable";
import GameChanging from "../components/rootVIC1aimPage/GameChanging";
import RootVIHero from "../components/rootVIC1aimPage/RootV1Hero";
import RootxToken from "../components/rootVIC1aimPage/RootxToken";
// import TokenInput from "../components/rootVIC1aimPage/TokenInput";
import { Spinner } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Contract } from "@ethersproject/contracts";
import { ethers } from "ethers";
import proxy_iba321 from "../config/proxyABI.json";
import iba321 from "../config/rootABI.json";
import BearXStakingABI from "../config/stakingABI.json";
import BearXABI from "../config/BearXABI.json";
import contract from "../config/contract";

function RootV1Claim() {
  const [myAccount, setMyAccount] = useState("");
  const [Root, setRoot] = useState(0);
  const [MyWeb3, setMyWeb3] = useState([]);
  const [Tokens, setTokens] = useState([]);
  const [pending, setPending] = useState(false);
  const [ALLpending, setALLPending] = useState(false);
  const [toClaim, setToClaim] = useState("");

  useEffect(() => {
    roots();
  }, []);

  useEffect(() => {
    if (myAccount !== "") {
      contract123();
    }
  }, [myAccount]);

  async function roots() {
    if (window.web3 !== undefined && window.ethereum) {
      const web3 = await new ethers.providers.Web3Provider(window.ethereum);
      setMyWeb3(web3);
      await web3
        .listAccounts()
        .then((acc) => {
          setMyAccount(acc);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  async function contract123() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const contractProxy = new Contract(
      "0x2fCD663EE780abc1a217361C86f3E0EE531e314e",
      proxy_iba321,
      provider?.getSigner()
    );

    const staking_contract = new Contract(
      contract.BearXStaking[1],
      BearXStakingABI,
      provider?.getSigner()
    );

    const promises = [];
    const getRewards = (id) => {
      return new Promise(async (resolve, reject) => {
        await contractProxy
          .CDR(id)
          .then((result) => {
            var myRoots = parseInt(result);
            resolve(myRoots);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    };

    await staking_contract
      .stakeOf(myAccount[0])
      .then((res) => {
        console.log(res);
        const tempIDs = [];
        res.forEach((id) => {
          if (id.toNumber() < 10000000000000) {
            const id123 = id.toNumber();
            tempIDs.push(id123);
            promises.push(getRewards(id));
            console.log("result===>>",tempIDs);
          }
        });
        setTokens(tempIDs);
      })
      .catch((err) => {
        console.log(err);
      });

    await contractProxy
      .NFTWallet(myAccount[0])
      .then((result) => {
        const tempIDs = [];
        result.forEach((id) => {
          if (id.toNumber() < 10000000000000) {
            const id123 = id.toNumber();
            tempIDs.push(id123);
            promises.push(getRewards(id));
            console.log("result1===>>",tempIDs);
          }
        });
        setTokens(tempIDs);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });

    Promise.all(promises).then((response) => {
      var sum = response.reduce(function (a, b) {
        return a + b;
      }, 0);

      setRoot((sum / 1000000000000000000).toFixed(0));
    });
  }

  async function claimALL(IDs) {
    if(IDs === undefined || IDs === '' || IDs === null) {
      alert("You can not claim | Now Daily Rewards are stoped!!");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    setALLPending(true);
    const colors = IDs;
    //remove null and undefined elements from colors
    if (colors.length === 0) {
      setALLPending(false);
      return;
    }
    const filteredIDs = colors.filter(function (e) {
      return e !== null && e !== "";
    });

    if (window.web3 !== undefined && window.ethereum && myAccount.length !== 0) {
      const ROOTcontract = new Contract(
        contract.ROOTx[1],
        iba321,
        provider?.getSigner()
      );
      const NFTContract = new Contract(
        contract.BearX[1],
        BearXABI,
        provider?.getSigner()
      );

      var flag = false;
      var Ssortids;

      for (var i = 0; i < filteredIDs.length; i++) {
        if ((await NFTContract.ownerOf(filteredIDs[i])) === myAccount[0]) {
          flag = true;
          Ssortids = i;
        } else {
          flag = false;
        }
      }

      if (flag) {
        await ROOTcontract.bulkClaimRewards(filteredIDs, { from: myAccount[0] })
          .then((result) => {
            alert("ROOTxs cliamed");
            // window.location.reload();
            setALLPending(false);
          })
          .catch((err) => {
            console.log(err);
            setALLPending(false);
          });
      } else {
        alert("Your Bearx is staked.");
        setALLPending(false);
      }
    } else {
      alert("Please Connet Wallet");
    }
  }

  async function claim(IDs) {
    setPending(true);
    if(IDs === undefined || IDs === '' || IDs === null) {
      alert("You can not claim | Now Daily Rewards are stoped!!");
      setPending(false);
      return;
    }
    const colors = IDs;
    //remove null and undefined elements from colors
    if (colors.length === 0) {
      setPending(false);
      return;
    }

    const filteredIDs = [];
    for( var i = 0; i < colors.length ; i ++) {
      if(colors[i] !== null) {
        filteredIDs.push(colors[i]);
      }
    }
    if (
      window.web3 !== undefined &&
      window.ethereum &&
      myAccount.length !== 0
    ) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const RooTcontract = new Contract(
        contract.ROOTx[1],
        iba321,
        provider?.getSigner()
      );
      const NFTContract = new Contract(
        contract.BearX[1],
        BearXABI,
        provider?.getSigner()
      );
      let resIDs = [];
      for (var i = 0; i < filteredIDs.length; i++) {
        if ((await NFTContract.ownerOf(filteredIDs[i])) === myAccount[0]) {
          resIDs.push(filteredIDs[i]);
        }
      }
      await RooTcontract.bulkClaimRewards(resIDs, { from: myAccount[0] })
        .then((result) => {
          alert(result);
          window.location.reload();
          setPending(false);
        })
        .catch((err) => {
          alert("You can't claim any ROOTx | Daily Rewards are stopped");
          console.log(err);
          setPending(false);
        });
    } else {
      alert("Something went Wrong!");
    }
  }

  async function calReward(e) {
    let as13 = e.target.value;
    // console.log(as13[as13.length-1]);
    if (as13[as13.length - 1] === "," || as13[as13.length - 1] === " ") {
      let as139 = as13.slice(0, -1);
      let as12 = as139.split(",").length * 1000 + " $HORSE";
    } else {
      let as12 = as13.split(",").length * 1000 + " $HORSE";
    }

    let numOfIds = as13.split(",").length;

    const tempIDs = [];

    as13.split(",").forEach((id) => {
      if (id < 10000000000000) {
        const id123 = id.trim();
        tempIDs.push(id123);
      }
    });

    setToClaim(tempIDs);
  }

  return (
    <>
      <RootVIHero />
      <RootxToken />
      <GameChanging />
      <div>
        <Container>
          <div className="climable">
            <h3>
              IF YOU HAVE TOKENS CLAIMABLE FROM THIS WALLET, IT WILL BE SHOWN
              BELOW
            </h3>
            <div className="climable__btn">
              <Link to="" className="climable__link">
                {Root} rootx
              </Link>
              {ALLpending ? (
                <button className="climable__link">
                  <Spinner
                    as="span"
                    variant="light"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    animation="border"
                  />
                </button>
              ) : (
                <button
                  className="climable__link"
                  onClick={() => claimALL(Tokens)}
                >
                  CLAIM ALL
                </button>
              )}
            </div>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <div className="tokenInput">
            <p>
              Enter the TOKEN IDs for your Bears like this{" "}
              <span className="token__number">1, 2, 44, 552 ,2421</span>
              <span>Note:</span> Please enter it exactly like this. Your tokens
              available to claim will be updated daily above
            </p>
            <div className="tokenInputGroup">
              <div className="claim__button pb-0">
                <div className="input_field">
                  <input
                    type="text"
                    value={toClaim}
                    placeholder="Enter Id"
                    className="search"
                    onChange={(e) => calReward(e)}
                  />

                  {/* <button> {Root} ROOT</button> */}
                  {pending ? (
                    <div className="input__btn">
                      <button>
                        <Spinner
                          as="span"
                          variant="light"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                          animation="border"
                        />
                      </button>
                    </div>
                  ) : (
                    <div className="input__btn">
                      <button onClick={() => claim(toClaim)}>CLAIM</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default RootV1Claim;
