import React, { useState, useEffect, useRef, useCallback } from "react";
import { ethers } from "ethers";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";
import { Spinner } from "react-bootstrap";
import BearXCard from "../Cards/BearXCard";
import Swal from "sweetalert2";
import { brgr1 } from "../../assets/images/index";
import { useNavigate } from "react-router-dom";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import stakingabi from "../../config/stakingABI.json";
import bearxabi from "../../config/BearXABI.json";
import contract from "../../config/contract";
import { Contract } from "@ethersproject/contracts";

const BearSteakTwo = () => {
  const [MyWeb3, setMyWeb3] = useState([]);
  const [myAccount, setMyAccount] = useState([]);
  const [bearxTokenIdsStaked, setBearxTokenIdsStaked] = useState([]);
  const [bearxBalance, setBearxBalance] = useState(0);
  const _bearxTokenIds = useRef([]);
  const [bearxTokenIds, setBearxTokenIds] = useState([]);
  const [bearXOfOwner, setBearXOfOwner] = useState([]);
  const [unstakepending, setunstakepending] = useState(false);
  const [stakepending, setStakePending] = useState(false);
  const [approved, setApproved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pending, setPending] = useState(false);
  const [totalStaked, setTotalStaked] = useState(0);
  const [youStaked, setYouStaked] = useState(0);
  const [claimableROOTx, setClaimableROOTx] = useState(0);
  const [claimableSROOTx, setClaimableSROOTx] = useState(0);
  const [claimableETH, setClaimableETH] = useState(0);
  const [claimROOT, setClaimROOT] = useState(false);
  const [claimSROOT, setClaimSROOT] = useState(false);
  const [claimWETH, setClaimWETH] = useState(false);
  const [isVested, SetVested] = useState(true);

  const launchState = () => {
    setLoading(true);
  };
  const disLaunchState = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (window.web3 !== undefined && window.ethereum) {
      loadWeb3();
    }
  }, []);

  useEffect(() => {
    if (MyWeb3.length !== 0) {
      stakeof();
      BearXInitial();
      getwalletOfOwner();
      gettotalstake();
      getyoustake();
      getClaimOf();
      getVested();
    }
  }, [MyWeb3, myAccount[0]]);

  async function getClaimOf() {
    if (myAccount.length === 0) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const stakingcontract = new Contract(
      contract.BearXStaking[1],
      stakingabi,
      provider?.getSigner()
    );

    await stakingcontract
      .claimOf(myAccount[0])
      .then((r) => {
        console.log(r[1].toString());
        setClaimableROOTx(parseInt(r[0].toString()) / 10 ** 18);
        setClaimableSROOTx(parseInt(r[1].toString()) / 10 ** 18);
      })
      .catch((err) => {
        setClaimableROOTx(0);
        setClaimableSROOTx(0);
        setClaimableETH(0);
      });
  }

  async function getVested() {
    if (myAccount.length === 0) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const stakingcontract = new Contract(
      contract.BearXStaking[1],
      stakingabi,
      provider?.getSigner()
    );

    await stakingcontract
      .isVested(myAccount[0])
      .then((r) => {
        SetVested(r);
      })
      .catch((err) => {
        SetVested(true);
      });
  }

  async function gettotalstake() {
    if (myAccount.length === 0) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const stakingcontract = new Contract(
      contract.BearXStaking[1],
      stakingabi,
      provider?.getSigner()
    );

    await stakingcontract
      .totalStakes()
      .then((r) => {
        setTotalStaked(parseInt(r.toString()));
      })
      .catch((err) => {
        setTotalStaked(0);
        console.log(err);
      });
  }

  async function getyoustake() {
    if (myAccount.length === 0) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const stakingcontract = new Contract(
      contract.BearXStaking[1],
      stakingabi,
      provider?.getSigner()
    );

    await stakingcontract
      .stakeOf(myAccount[0])
      .then((r) => {
        setYouStaked(r.length);
      })
      .catch((err) => {
        setYouStaked(0);
        console.log(err);
      });
  }

  const confirmModal = () => {
    Swal.fire({
      icon: "question",
      title: "Confirm Approve",
      text: "Do you want to approve all bears to staking contract?",
      showCancelButton: true,
    }).then((res) => {
      if (res.isConfirmed) {
        setApprovalforall();
      }
    });
  };

  const setApprovalforall = useCallback(async () => {
    if (myAccount.length === 0) return;
    console.log(myAccount[0], approved);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const BearXcontract = new Contract(
        contract.BearX[1],
        bearxabi,
        provider?.getSigner()
      );
      BearXcontract.setApprovalForAll(contract.BearXStaking[1], true)
        .send({ from: myAccount[0] })
        .then((e) => {
          console.log(e.status);
          if (e.status) {
            console.log("setapprovalforall Successfully!", approved);
          } else {
            console.log("XXXX======>", "ERROR!");
          }
        });
    } catch (err) {
      console.log(err);
    }
  });

  async function loadWeb3() {
    const web3 = await new ethers.providers.Web3Provider(window.ethereum);
    await web3
      .listAccounts()
      .then((acc) => {
        setMyWeb3(web3);
        setMyAccount(acc);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function stakeof() {
    if (myAccount.length === 0) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const stakingcontract = new Contract(
      contract.BearXStaking[1],
      stakingabi,
      provider?.getSigner()
    );

    await stakingcontract
      .stakeOf(myAccount[0])
      .then((r) => {
        setBearxTokenIdsStaked((b) => r);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function BearXInitial() {
    if (myAccount.length === 0) return;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const BearXcontract = new Contract(
      contract.BearX[1],
      bearxabi,
      provider?.getSigner()
    );

    await BearXcontract.balanceOf(myAccount[0])
      .then((r) => {
        setBearxBalance(parseInt(r.toString()));
        _bearxTokenIds.current = [];
        setBearxTokenIds((b) => []);
        const tempB = parseInt(r.toString());
        const tempBs = [];
        for (let i = 0; i < parseInt(r.toString()); i++) {
          BearXcontract.tokenOfOwnerByIndex(myAccount[0], i)
            .then((rid) => {
              tempBs.push(parseInt(rid.toString()));
              _bearxTokenIds.current.push([
                parseInt(rid.toString()),
                ..._bearxTokenIds.current,
              ]);
              if (tempBs.length === tempB) {
                setBearxTokenIds(tempBs);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function getwalletOfOwner() {
    if (myAccount.length === 0) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const BearXcontract = new Contract(
      contract.BearX[1],
      bearxabi,
      provider?.getSigner()
    );
    try {
      await BearXcontract.walletOfOwner(myAccount[0])
        .then((r) => {
          setBearXOfOwner((b) => r);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }

  async function getbearxofwallet() {
    if (myAccount.length === 0) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const BearXcontract = new Contract(
      contract.BearX[1],
      bearxabi,
      provider?.getSigner()
    );

    let nftcounts = 0;
    let isapproved = false;
    try {
      await BearXcontract.balanceOf(myAccount[0])
        .then((r) => {
          nftcounts = r;
        })
        .catch((err) => {
          console.log("Parse Error", err);
        });
    } catch (err) {
      console.log("Big Error", myAccount[0], err);
    }

    try {
      await BearXcontract.isApprovedForAll(
        myAccount[0],
        contract.BearXStaking[1]
      )
        .then((r) => {
          setApproved(r);
        })
        .catch((err) => {
          console.log("Parse Error", err);
        });
    } catch (err) {
      console.log("Big Error", myAccount[0], err);
    }
    if (!approved && nftcounts !== 0) confirmModal();
  }

  const stake = useCallback(
    async (id, account) => {
      setStakePending(true);
      setLoading(true);
      launchState();

      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const stakingcontract = new Contract(
          contract.BearXStaking[1],
          stakingabi,
          provider?.getSigner()
        );

        const ids = [...id];

        const tx = await stakingcontract.createStake(ids, { from: account });
        await tx.wait();
        window.location.reload();
      } catch (err) {
        setStakePending(false);
        disLaunchState();
      }
    },
    [MyWeb3]
  );

  const unstake = useCallback(
    async (_ids, account) => {
      console.log("ALL IDS==>>", _ids);
      setunstakepending(true);
      const ids = [..._ids];
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const stakingcontract = new Contract(
          contract.BearXStaking[1],
          stakingabi,
          provider?.getSigner()
        );
        const tx = await stakingcontract.unStake(ids, { from: account });
        await tx.wait();
        window.location.reload();
      } catch (err) {
        console.log(err);
        setunstakepending(false);
      }
    },
    [MyWeb3]
  );

  const claimOfROOTxToken = useCallback(async () => {
    if (myAccount[0]) {
      setClaimROOT(true);

      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const stakingcontract = new Contract(
          contract.BearXStaking[1],
          stakingabi,
          provider?.getSigner()
        );
        const tx = await stakingcontract.claimOfROOTxToken({
          from: myAccount[0],
        });
        await tx.wait();
        window.location.reload();
      } catch (err) {
        console.log("error",err);
        setClaimROOT(false);
      }
    }
  }, [MyWeb3, myAccount[0]]);

  const claimOfSROOTxToken = useCallback(async () => {
    if (myAccount[0]) {
      setClaimSROOT(true);

      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const stakingcontract = new Contract(
          contract.BearXStaking[1],
          stakingabi,
          provider?.getSigner()
        );
        const tx = await stakingcontract.claimOfSROOTxToken({
          from : myAccount[0]
        });
        await tx.wait();
        window.location.reload();
      } catch (err) {
        console.log("err", err);
        setClaimSROOT(false);
      }
    }
  }, [MyWeb3, myAccount[0]]);

  // const claimOfWETH = useCallback(async () => {
  //   if (myAccount[0]) {
  //     setClaimWETH(true);

  //     try {
  //       const provider = new ethers.providers.Web3Provider(window.ethereum);
  //       const stakingcontract = new Contract(
  //         contract.BearXStaking[1],
  //         stakingabi,
  //         provider?.getSigner()
  //       );
  //       const tx = await stakingcontract.claimOfWETH({ from: myAccount[0] });
  //       await tx.wait();
  //       window.location.reload();
  //     } catch (err) {
  //       setClaimWETH(false);
  //     }
  //   }
  // }, [MyWeb3, myAccount[0]]);

  let navigator = useNavigate();

  async function redirectHandler(e) {
    await navigator(e);
  }
  return (
    <section>
      <Container>
        <div className="bearSteackTwo">
          <Row>
            <Col lg="6" style={{ borderRight: "1px solid #a6a6a666" }}>
              <div className="bearSteackTwo__tt__txt">
                <h6>YOUR UNSTAKED BEARX</h6>
                <p>
                  Click to select a Genesis BearX. Stake your BearX to yield
                  ROOTx, SROOTx and rewards in BEARWORLD
                </p>
              </div>
            </Col>

            <Col lg="6" style={{ borderLeft: "1px solid #a6a6a666" }}>
              <div className="bearSteackTwo__tt__txt">
                <h6>YOUR STAKED BEARX</h6>
                <p>Use multiple BearX to generate more $ROOTx.</p>
              </div>
            </Col>
            <Col lg="6" style={{ borderRight: "1px solid #a6a6a666" }}>
              <div lg="6">
                <div className="w-100 img-fluid">
                  {myAccount[0] ? (
                    <div className="buttons">
                      {bearXOfOwner.length === 0 ? (
                        <></>
                      ) : stakepending ? (
                        <>
                          <button
                            type="button"
                            className="button card_font card_fontsize_smaller allbutton"
                            onClick={getbearxofwallet}
                            style={{ fontSize: "20px" }}
                          >
                            Approve ALL
                          </button>
                          <button
                            type="button"
                            className="button card_font card_fontsize_smaller allbutton"
                            disabled
                          >
                            <Spinner
                              as="span"
                              variant="light"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                              animation="border"
                              style={{ width: "20px", height: "20px" }}
                            />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            type="button"
                            className="button card_font card_fontsize_smaller allbutton"
                            onClick={getbearxofwallet}
                            style={{
                              fontSize: "20px",
                              fontFamily: "earlyGameBoy",
                            }}
                          >
                            Approve ALL
                          </button>
                          <button
                            type="button"
                            className="button card_font card_fontsize_smaller allbutton"
                            style={{
                              fontSize: "20px",
                              fontFamily: "earlyGameBoy",
                            }}
                            onClick={() => {
                              stake(bearXOfOwner, myAccount[0]);
                            }}
                          >
                            Stake ALL
                          </button>
                        </>
                      )}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="hasAfter">
                  {myAccount[0] ? (
                    bearxTokenIds.length !== 0 ? (
                      bearxTokenIds.map((_id) => (
                        <BearXCard
                          url={brgr1}
                          title="BearX1"
                          rarity="Common"
                          price="1.5ETH"
                          description="BearX description"
                          account={myAccount[0]}
                          processed={() => {
                            setPending(!pending);
                            console.log("processed");
                          }}
                          clickable={pending}
                          clicked={(state) => setPending(state)}
                          tokenId={_id}
                          key={_id}
                          launchState={launchState}
                          disLaunchState={disLaunchState}
                          loading={loading}
                        />
                      ))
                    ) : (
                      <div
                        className="normal-text full-width"
                        style={{ fontFamily: "earlyGameBoy", color: "white" }}
                      >
                        You do not have items.
                      </div>
                    )
                  ) : (
                    <div
                      className="align-center"
                      style={{ fontFamily: "earlyGameBoy", color: "white" }}
                    >
                      Please connect your wallet.
                    </div>
                  )}
                </div>
              </div>
            </Col>
            <Col lg="6" style={{ borderLeft: "1px solid #a6a6a666" }}>
              <div className="w-100 img-fluid">
                <div>
                  {myAccount[0] ? (
                    <div className="buttons">
                      {bearxTokenIdsStaked.length === 0 ? (
                        <></>
                      ) : unstakepending ? (
                        <button
                          type="button"
                          className="button card_font card_fontsize_smaller allbutton"
                          disabled
                        >
                          <Spinner
                            as="span"
                            variant="light"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            animation="border"
                            style={{ width: "20px", height: "20px" }}
                          />
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="button card_font card_fontsize_smaller allbutton"
                          style={{
                            fontSize: "20px",
                            fontFamily: "earlyGameBoy",
                          }}
                          onClick={() => {
                            unstake(bearxTokenIdsStaked, myAccount[0]);
                          }}
                        >
                          Unstake ALL
                        </button>
                      )}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="hasAfter">
                  {myAccount[0] ? (
                    bearxTokenIdsStaked.length !== 0 ? (
                      bearxTokenIdsStaked.map(
                        (_id) => (
                          <BearXCard
                            url={brgr1}
                            title="BearX1"
                            rarity="Common"
                            price="1.5ETH"
                            description="BearX asg asg as ga sgagasdgasgasgasgasg"
                            staked
                            account={myAccount[0]}
                            processed={() => {
                              setPending(!pending);
                              setBearxBalance(0);
                            }}
                            clicked={() => setPending(true)}
                            // unstake={() => console.log('unstake')}
                            tokenId={_id}
                            key={_id}
                            launchState={launchState}
                            loading={loading}
                          />
                        )
                        // console.log(_id)
                        // return _id
                      )
                    ) : (
                      <div
                        className="normal-text full-width"
                        style={{ fontFamily: "earlyGameBoy", color: "white" }}
                      >
                        You do not have items.
                      </div>
                    )
                  ) : (
                    <div
                      className="align-center"
                      style={{ fontFamily: "earlyGameBoy", color: "white" }}
                    >
                      Please connect your wallet.
                    </div>
                  )}
                </div>
              </div>
            </Col>
          </Row>

          <div className="bearSteak__vested">
            <div className="d-flex justify-content-center">
              <div className="bearSteak__staked text-center">
                <h5>Total Staked</h5>
                <h6>{totalStaked}</h6>
              </div>
              <div className="bearSteak__staked text-center">
                <h5>You Staked</h5>
                <h6>{youStaked}</h6>
              </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center mt-2">
              <div className="bearSteak__staked text-center mt-5">
                <h5>Claimable rootx</h5>
                <h6>{claimableROOTx.toFixed(3)}</h6>
                {!claimROOT ? (
                  <button type="button" onClick={() => claimOfROOTxToken()}>
                    claim
                  </button>
                ) : (
                  <button className="claim-rootx-button" type="button">
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                    />
                  </button>
                )}
              </div>
              <div className="bearSteak__staked text-center mt-5">
                <h5>Claimable Srootx</h5>
                <h6>{claimableSROOTx.toFixed(3)}</h6>
                {false ? (
                  <button>vested</button>
                ) : !claimSROOT ? (
                  <button onClick={() => claimOfSROOTxToken()}>claim</button>
                ) : (
                  <button
                    type="button"
                    className="button card_font card_fontsize_smaller allbutton"
                    disabled
                  >
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                    />
                  </button>
                )}
              </div>
              {/* <div className="bearSteak__staked text-center mt-5">
                <h5>AMOUNT OF WETH</h5>
                <h6>
                  {claimableETH.toLocaleString("en-US", {
                    maximumFractionDigits: 7,
                  })}
                </h6>
                {isVested ? (
                  <button>vested</button>
                ) : !claimWETH ? (
                  // <button onClick={() => claimOfWETH()}>claim</button>
                  <button>claim</button>
                ) : (
                  <button
                    type="button"
                    className="button card_font card_fontsize_smaller allbutton"
                    disabled
                  >
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                    />
                  </button>
                )}
              </div> */}
            </div>
          </div>
          <div className="bearSteak__info">
            <div className="bearsteak__icon__text__wrapper">
              <div className="bearsteak__icon__text__item">
                <FontAwesomeIcon icon={faCheckCircle} color="#FFAE41" />
                <span>Earn WETH + SROOT by staking</span>
              </div>
              <div className="bearsteak__icon__text__item">
                <FontAwesomeIcon icon={faCheckCircle} color="#FFAE41" />
                <span>
                  Stake 5+ Genesis Bear and yield 50%. SROOTX + 50% SROOTX
                  rewarded in WETH.
                </span>
              </div>
              <div className="bearsteak__icon__text__item">
                <FontAwesomeIcon icon={faCheckCircle} color="#FFAE41" />
                <span>
                  Earn SROOT by providing liquidity to the SROOTX - ETH pair via
                  Uniswap V2 to earn additional rewards on top of Uniswap's
                  regular liquidity provider rewards.(Coming Soon)
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BearSteakTwo;
