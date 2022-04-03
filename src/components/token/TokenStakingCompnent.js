import { Contract, ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import Modal from "react-awesome-modal";
import RootxMobile from "./RootxMobile";
import Srootx from "./Srootx";
import contract from "../../config/contract";
import SRootxStakingABI from "../../config/SROOTxStaking.json";
import SROOTxABI from "../../config/SROOTx_Rinkeby.json";
import ROOTxABI from "../../config/ROOTx_Rinkeby.json";
import RootxStakingABI from "../../config/ROOTxStaking.json";
import { EtherscanProvider } from "@ethersproject/providers";
import loading from "../../assets/images/loading.gif";

function TokenStakingCompnent() {
  const [MyWeb3, setMyWeb3] = useState([]);
  const [myAccount, setMyAccount] = useState([]);
  const [sROOtAmount, setsRootAmount] = useState(0);
  const [RootAmount, setRootAmount] = useState(0);
  const [ROOTxstakedIds, SetROOTxstakedIds] = useState([]);
  const [SROOTxstakedIds, SetSROOTxstakedIds] = useState([]);

  const [SROOtxStakingPending, setSROOtxStakingPending] = useState(false);
  const [ROOtxStakingPending, setROOtxStakingPending] = useState(false);

  const [ROOTxUnstakepending, setROOTxUnstakepending] = useState(false);
  const [SROOTxUnstakepending, setSROOTxUnstakepending] = useState(false);

  const [ROOTxClaimpending, setROOTxClaimpending] = useState(false);
  const [SROOTxClaimpending, setSROOTxClaimpending] = useState(false);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (window.web3 !== undefined && window.ethereum) {
      loadWeb3();
    }
  }, []);

  useEffect(() => {
    if (MyWeb3.length !== 0) {
      getROOTxStakingData();
      getSROOTxStakingData();
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

  const getROOTxStakingData = async () => {
    if (myAccount.length === 0) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const ROOTxStakingcontract = new Contract(
      contract.ROOTxStaking[4],
      RootxStakingABI,
      provider?.getSigner()
    );

    try {
      await ROOTxStakingcontract.getStakesByStaker(myAccount[0])
        .then((r) => {
          SetROOTxstakedIds((b) => r);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const getSROOTxStakingData = async () => {
    if (myAccount.length === 0) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const SROOTxStakingcontract = new Contract(
      contract.SROOTxStaking[4],
      SRootxStakingABI,
      provider?.getSigner()
    );

    try {
      await SROOTxStakingcontract.getStakesByStaker(myAccount[0])
        .then((r) => {
          SetSROOTxstakedIds((b) => r);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const createROOTxStake = async (amount) => {
    if (myAccount.length === 0) {
      return;
    } else if (amount === 0) {
      alert("Please input Amount");
      return;
    }
    setROOtxStakingPending(true);
    setShowModal(true);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const ROOTxContract = new Contract(
        contract.ROOTx[4],
        ROOTxABI,
        provider?.getSigner()
      );
      const ROOTxStakingcontract = new Contract(
        contract.ROOTxStaking[4],
        RootxStakingABI,
        provider?.getSigner()
      );
      const approveTx = await ROOTxContract.approve(
        contract.ROOTxStaking[4],
        ethers.utils.parseUnits(String(amount), 18),
        { from: myAccount[0] }
      );
      await approveTx.wait();
      const tx = await ROOTxStakingcontract.stakeToken(
        ethers.utils.parseUnits(String(amount), 18),
        {
          from: myAccount[0],
        }
      );
      await tx.wait();
      window.location.reload();
    } catch (err) {
      setROOtxStakingPending(false);
      setShowModal(false);
    }
  };

  const createSROOTxStake = async (amount) => {
    if (myAccount.length === 0) {
      return;
    } else if (amount === 0) {
      alert("Please input Amount");
      return;
    }
    setSROOtxStakingPending(true);
    setShowModal(true);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const SROOTxContract = new Contract(
        contract.SROOTx[4],
        SROOTxABI,
        provider?.getSigner()
      );
      const SROOTxStakingcontract = new Contract(
        contract.SROOTxStaking[4],
        SRootxStakingABI,
        provider?.getSigner()
      );
      const approveTx = await SROOTxContract.approve(
        contract.SROOTxStaking[4],
        ethers.utils.parseUnits(String(amount), 18),
        { from: myAccount[0] }
      );
      await approveTx.wait();
      const tx = await SROOTxStakingcontract.stakeToken(
        ethers.utils.parseUnits(String(amount), 18),
        {
          from: myAccount[0],
        }
      );
      await tx.wait();
      window.location.reload();
    } catch (err) {
      setSROOtxStakingPending(false);
      setShowModal(false);
    }
  };

  const ROOTxUnstake = async (_id) => {
    if (myAccount.length === 0) return;
    setROOTxUnstakepending(true);
    setShowModal(true);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const ROOTxStakingContract = new Contract(
        contract.ROOTxStaking[4],
        RootxStakingABI,
        provider?.getSigner()
      );

      const tx = await ROOTxStakingContract.unStake(_id, {
        from: myAccount[0],
      });
      await tx.wait();
      window.location.reload();
    } catch (err) {
      setROOTxUnstakepending(false);
      setShowModal(false);
    }
  };
  const SROOTxUnstake = async (_id) => {
    if (myAccount.length === 0) return;
    setSROOTxUnstakepending(true);
    setShowModal(true);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const SROOTxStakingContract = new Contract(
        contract.SROOTxStaking[4],
        SRootxStakingABI,
        provider?.getSigner()
      );

      const tx = await SROOTxStakingContract.unStake(_id, {
        from: myAccount[0],
      });
      await tx.wait();
      window.location.reload();
    } catch (err) {
      setSROOTxUnstakepending(false);
      setShowModal(false);
    }
  };
  const ROOTxClaim = async (_id) => {
    if (myAccount.length === 0) return;
    setShowModal(true);
    setROOTxClaimpending(true);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const ROOTxStakingContract = new Contract(
        contract.ROOTxStaking[4],
        RootxStakingABI,
        provider?.getSigner()
      );

      const tx = await ROOTxStakingContract.claimReward(_id, {
        from: myAccount[0],
      });
      await tx.wait();
      window.location.reload();
    } catch (err) {
      setShowModal(false);
      setROOTxClaimpending(false);
    }
  };

  const SROOTxClaim = async (_id) => {
    if (myAccount.length === 0) return;
    setShowModal(true);
    setSROOTxClaimpending(true);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const SROOTxStakingContract = new Contract(
        contract.SROOTxStaking[4],
        SRootxStakingABI,
        provider?.getSigner()
      );

      const tx = await SROOTxStakingContract.claimReward(_id, {
        from: myAccount[0],
      });
      await tx.wait();
      window.location.reload();
    } catch (err) {
      setShowModal(false);
      setSROOTxClaimpending(false);
    }
  };
  return (
    <div className="main__listing">
      <Container>
        <Row>
          <Col>
            <div
              className="about__details"
              style={{ marginTop: "-50px", marginBottom: "50px" }}
            >
              <p>STAKE YOUR ROOTx and SROOTx TOKEN TO GET REWARDS</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={6} md={6} lg={6}>
            <div className="d-flex justify-content-center">
              <div className="tokenButton">ROOTx</div>
            </div>
            <RootxMobile />
          </Col>
          <Col sm={6} md={6} lg={6}>
            <div className="d-flex justify-content-center">
              <div className="tokenButton srootx-sm">SROOTx</div>
            </div>
            <Srootx />
          </Col>
        </Row>
        <div className="listing d-none d-lg-block">
          <Row>
            <Col lg={6} md={6}>
              <div className="listing__card ms-5 w-md-100">
                <p>Stake your ROOTx token</p>
                <div className="control_panel">
                  <input
                    onChange={(e) => setRootAmount(e.target.value)}
                    type="number"
                    placeholder="Type amount..."
                    className="input_1"
                    min={1}
                  />
                  {ROOtxStakingPending ? (
                    <button type="button" className="input_2">
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
                      className="input_2"
                      onClick={() => createROOTxStake(RootAmount)}
                    >
                      STAKE
                    </button>
                  )}
                </div>
              </div>
            </Col>

            <Col lg={6} md={6}>
              <div className="listing__card ms-5 w-md-100">
                <p>Stake your SROOTx token</p>
                <div className="control_panel">
                  <input
                    onChange={(e) => setsRootAmount(e.target.value)}
                    type="number"
                    placeholder="Type amount..."
                    className="input_1"
                  />
                  {SROOtxStakingPending ? (
                    <button type="button" className="input_2">
                      {" "}
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
                      className="input_2"
                      onClick={() => createSROOTxStake(sROOtAmount)}
                    >
                      STAKE
                    </button>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="listing d-none d-lg-block">
          <Row>
            <Col lg={6} md={6}>
              <div className="container">
                {ROOTxstakedIds.length === 0 ? (
                  <></>
                ) : (
                  <table className="unstakeTable ms-5">
                    <thead>
                      <tr>
                        <td>Staking Date</td>
                        <td>Staked Amount</td>
                        <td>Claim</td>
                        <td>Unstake</td>
                      </tr>
                    </thead>
                    <tbody>
                      {ROOTxstakedIds.map((item) => (
                        <tr key={item.id}>
                          <td>
                            {new Date(
                              item.stakeTimeStamp.toString() * 1000
                            ).getHours()}
                          </td>
                          <td>
                            {(item.amount / 1000000000000000000).toString()}
                          </td>
                          <td>
                            {ROOTxClaimpending ? (
                              <button type="button" className="controlBtn">
                                {" "}
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
                                className="controlBtn"
                                onClick={() => ROOTxClaim(item.id.toString())}
                              >
                                CLAIAM
                              </button>
                            )}
                          </td>
                          <td>
                            {ROOTxUnstakepending ? (
                              <button type="button" className="controlBtn">
                                <Spinner
                                  as="span"
                                  variant="light"
                                  size="sm"
                                  role="status"
                                  aria-hidden="true"
                                  animation="border"
                                  style={{ width: "20px", height: "20px" }}
                                />{" "}
                              </button>
                            ) : (
                              <button
                                type="button"
                                className="controlBtn"
                                onClick={() => ROOTxUnstake(item.id.toString())}
                              >
                                UNSTAKE
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </Col>

            <Col lg={6} md={6}>
              <div className="container">
                {SROOTxstakedIds.length === 0 ? (
                  <></>
                ) : (
                  <table className="unstakeTable ms-5">
                    <thead>
                      <tr>
                        <td>Staking Date</td>
                        <td>Staked Amount</td>
                        <td>Claim</td>
                        <td>Unstake</td>
                      </tr>
                    </thead>
                    <tbody>
                      {SROOTxstakedIds.map((item) => (
                        <tr key={item.id}>
                          <td>
                            {new Date(
                              item.stakeTimeStamp.toString() * 1000
                            ).getHours()}
                          </td>
                          <td>
                            {(item.amount / 1000000000000000000).toString()}
                          </td>
                          <td>
                          {SROOTxClaimpending ? (
                              <button type="button" className="controlBtn">
                                {" "}
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
                                className="controlBtn"
                                onClick={() => SROOTxClaim(item.id.toString())}
                              >
                                CLAIAM
                              </button>
                            )}
                          </td>
                          <td>
                            {SROOTxUnstakepending ? (
                              <button type="button" className="controlBtn">
                                <Spinner
                                  as="span"
                                  variant="light"
                                  size="sm"
                                  role="status"
                                  aria-hidden="true"
                                  animation="border"
                                  style={{ width: "20px", height: "20px" }}
                                />{" "}
                              </button>
                            ) : (
                              <button
                                type="button"
                                className="controlBtn"
                                onClick={() =>
                                  SROOTxUnstake(item.id.toString())
                                }
                              >
                                UNSTAKE
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Modal visible={showModal} width="450px" height="300px" effect="fadeInUp">
        <div style={{ marginLeft: "100px" }}>
          <img src={loading} alt="loading" />
        </div>
        <div className="about__details">
          <p style={{ color: "#fd7e14" }}>Processing...</p>
        </div>
      </Modal>
    </div>
  );
}

export default TokenStakingCompnent;
