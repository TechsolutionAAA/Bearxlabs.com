import React, { useEffect, useState } from "react";
import { Contract, ethers, BigNumber } from "ethers";
import NumberFormat from "react-number-format";
import { Spinner } from "react-bootstrap";
import Swal from "sweetalert2";
import ROOTxABI from "../../config/rootABI.json";
import BearXStakingABI from "../../config/stakingABI.json";
import Modal from "react-awesome-modal";
import loading from "../../assets/images/loading.gif";
import contract from "../../config/contract";

const BurnROOTxToGetSROOTxComponent = () => {
  const [MyWeb3, setMyWeb3] = useState([]);
  const [myAccount, setMyAccount] = useState([]);
  const [maxROOTx, setMaxROOTx] = useState(1);
  const [ROOTx, setROOTx] = useState(1);
  const [maxbtnpending, setMaxbtnpending] = useState(false);
  const [burnbtnpending, setBurnbtnpending] = useState(false);
  const [approvebtnpending, setApprovebtnpending] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (window.web3 !== undefined && window.ethereum) {
      loadWeb3();
    }
  }, []);

  useEffect(() => {
    if (MyWeb3.length !== 0) {
      getbalanceOfrootx();
    }
  }, [MyWeb3, myAccount[0]]);

  const loadWeb3 = async () => {
    const web3 = await new ethers.providers.Web3Provider(window.ethereum);
    await web3
      .listAccounts()
      .then((acc) => {
        setMyWeb3(web3);
        setMyAccount(acc);
      })
      .catch((err) => console.log(err));
  };
  const setIMaxROOTx = (value) => {
    if (maxROOTx >= 1) {
      if (value === 0) {
        return;
      } else if (value > ROOTx) {
        return;
      } else {
        setMaxROOTx(value);
      }
    }
  };
  async function getbalanceOfrootx() {
    if (myAccount.length === 0) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const rootxcontract = new Contract(
      contract.ROOTx[1],
      ROOTxABI,
      provider?.getSigner()
    );

    await rootxcontract
      .balanceOf(myAccount[0])
      .then((r) => {
        var result = r / 1000000000000000000;
        setROOTx(result);
      })
      .catch((err) => {
        setROOTx(0);
        console.log(err);
      });
  }
  async function approverootx() {
    if (myAccount.length === 0) {
      return;
    } else if (ROOTx === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Insufficient Token!",
      });
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const rootxcontract = new Contract(
      contract.ROOTx[1],
      ROOTxABI,
      provider?.getSigner()
    );

    const myAllowanceTx = await rootxcontract.allowance(
      myAccount[0],
      contract.BearXStaking[1]
    );
    const myAllowance = myAllowanceTx.toString() / 1000000000000000000;
    if (myAllowance >= ROOTx) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You already approved your token!",
      });
    } else {
      Swal.fire({
        icon: "question",
        title: "Confirm ROOTx Approving",
        text: `You will approve ${ROOTx} ROOTx token, continue ?`,
        showCancelButton: true,
      }).then(async (res) => {
        if (res.isConfirmed) {
          setApprovebtnpending(true);
          setShowModal(true);
          try {
            const tx = await rootxcontract.approve(
              contract.BearXStaking[1],
              ethers.utils.parseUnits(String(ROOTx), 18),
              { from: myAccount[0] }
            );
            await tx.wait();
            window.location.reload();
          } catch (err) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went Wrong!",
            });
            setApprovebtnpending(false);
            setShowModal(false);
          }
        }
      });
    }
  }
  async function burnrootx() {
    if (myAccount.length === 0) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const stakingcontract = new Contract(
      contract.BearXStaking[1],
      BearXStakingABI,
      provider?.getSigner()
    );

    let valueofrootx = document.getElementById("value_rootx").value;
    var bg_decimal = BigNumber.from("1000000000000000000");
    var bg_valueofrootx = BigNumber.from(valueofrootx);

    var temp = bg_decimal.mul(bg_valueofrootx);

    if (ROOTx !== 0) {
      setBurnbtnpending(true);
      setShowModal(true);
      try {
        const tx = await stakingcontract.BurnRootx_mintSrootx(temp, {
          from: myAccount[0],
        });
        await tx.wait();
        window.location.reload();
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You have to approve enough ROOTx token to staking contract!",
        });
        setShowModal(false);
        setBurnbtnpending(false);
      }
    }
  }
  async function getmaxrootx() {
    if (myAccount.length === 0) return;

    setMaxbtnpending(true);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const rootxcontract = new Contract(
      contract.ROOTx[1],
      ROOTxABI,
      provider?.getSigner()
    );

    rootxcontract
      .balanceOf(myAccount[0])
      .then((r) => {
        var result = r / 1000000000000000000;
        setMaxROOTx(result);
        setMaxbtnpending(false);
      })
      .catch((err) => {
        setMaxROOTx(0);
        console.log(err);
        setMaxbtnpending(false);
      });
  }

  return (
    <>
      <div className="burn-get-maincontain">
        <div className="about__details">
          <p style={{ color: "yellow", fontSize: "25px" }}>
            Enter the amount of ROOTx you'd like to burn for SROOTx
          </p>
          <p style={{ color: "yellow", fontSize: "25px" }}>
            Your available ROOTx token is{" "}
            <NumberFormat
              value={ROOTx.toFixed(0)}
              displayType={"text"}
              thousandSeparator={true}
            />
          </p>
        </div>

        <div className="burn-get-subcontain">
          <div className="number">
            <button
              className="number-minus"
              type="button"
              onClick={() => setIMaxROOTx(maxROOTx - 1)}
            >
              -
            </button>
            <input
              type="number"
              placeholder="0"
              min={1}
              id="value_rootx"
              value={maxROOTx.toFixed(0)}
              onChange={(e) => setMaxROOTx(e.target.value)}
            />
            <button
              className="number-plus"
              type="button"
              onClick={() => setIMaxROOTx(maxROOTx + 1)}
            >
              +
            </button>
          </div>

          {maxbtnpending ? (
            <button className="max-rootx-button" type="button">
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
              className="max-rootx-button"
              type="button"
              onClick={getmaxrootx}
            >
              Max
            </button>
          )}
        </div>
        <div className="burn-btn-get-subcontain">
          {approvebtnpending ? (
            <button className="approve-rootx-button" type="button">
              <Spinner
                as="span"
                variant="light"
                size="sm"
                role="status"
                aria-hidden="true"
                animation="border"
              />
            </button>
          ) : burnbtnpending ? (
            <button
              className="approve-rootx-button"
              type="button"
              onClick={approverootx}
              disabled
            >
              Approve ALL
            </button>
          ) : (
            <button
              className="approve-rootx-button"
              type="button"
              onClick={approverootx}
            >
              Approve ALL
            </button>
          )}
          {burnbtnpending ? (
            <button className="burn-rootx-button" type="button">
              <Spinner
                as="span"
                variant="light"
                size="sm"
                role="status"
                aria-hidden="true"
                animation="border"
              />
            </button>
          ) : approvebtnpending ? (
            <button
              className="burn-rootx-button"
              type="button"
              onClick={burnrootx}
              disabled
            >
              Burn
            </button>
          ) : (
            <button
              className="burn-rootx-button"
              type="button"
              onClick={burnrootx}
            >
              Burn
            </button>
          )}
        </div>
      </div>
      <Modal visible={showModal} width="450px" height="300px" effect="fadeInUp">
        <div style={{ marginLeft: "100px" }}>
          <img src={loading} alt="loading" />
        </div>
        <div className="about__details">
          <p style={{ color: "#fd7e14" }}>Processing...</p>
        </div>
      </Modal>
    </>
  );
};

export default BurnROOTxToGetSROOTxComponent;
