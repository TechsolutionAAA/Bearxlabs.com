import { Contract, ethers } from "ethers";
import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { Spinner } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import Modal from "react-awesome-modal";
import Swal from "sweetalert2";
import RootxMobile from "./RootxMobile";
import Srootx from "./Srootx";

import contract from "../../config/contract";

import ROOTxUniv2 from "../../config/ROOTxUniv2.json";
import SROOTxUniv2 from "../../config/SROOTxUniv2.json";
import lpROOTxUniv2 from "../../config/LPROOTxUniv2.json";

import loading from "../../assets/images/loading.gif";

function LPStakingComponent() {
  const [MyWeb3, setMyWeb3] = useState([]);
  const [myAccount, setMyAccount] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [ROOTxuniv2Amount, setROOTxuniv2Amount] = useState(0);
  const [ApproveROOTxuniv2, setApproveROOTxuniv2] = useState(false);
  const [ROOTxuniv2amt, setROOTxuniv2amt] = useState(0);
  const [StakingROOTxuniv2, setStakingROOTxuniv2] = useState(false);
  const [ROOTxUniv2pendingrewards, setROOTxUniv2pendingrewards] = useState(0);
  const [ROOTxClaimpending, setROOTxClaimpending] = useState(false);
  const [ROOTxUnstakepending, setROOTxUnstakepending] = useState(false);
  const [ROOTxUniv2stakedAmount, setROOTxUniv2stakedAmount] = useState(0);

  useEffect(() => {
    if (window.web3 !== undefined && window.ethereum) {
      loadWeb3();
    }
  }, []);

  useEffect(() => {
    if (MyWeb3.length !== 0) {
      getROOTxUniv2();
      getpendingrewards();
      getstakedROOTxUniv2();
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

  const getROOTxUniv2 = async () => {
    if (myAccount.length === 0) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const ROOTxUniv2Contract = new Contract(
      contract.ROOTxUniv2[1],
      ROOTxUniv2,
      provider?.getSigner()
    );

    try {
      await ROOTxUniv2Contract.balanceOf(myAccount[0])
        .then((r) => {
          const temp = r / 1000000000000000000;
          setROOTxuniv2Amount(temp);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getpendingrewards = async () => {
    if (myAccount.length === 0) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const ROOTxUniv2Stakingcontract = new Contract(
      contract.LPROOTxStaking[1],
      lpROOTxUniv2,
      provider?.getSigner()
    );

    try {
      await ROOTxUniv2Stakingcontract.calculatePendingRewards(myAccount[0])
        .then((r) => {
          const temp = r / 1000000000000000000;
          setROOTxUniv2pendingrewards(temp);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getstakedROOTxUniv2 = async () => {
    if (myAccount.length === 0) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const ROOTxUniv2Stakingcontract = new Contract(
      contract.LPROOTxStaking[1],
      lpROOTxUniv2,
      provider?.getSigner()
    );

    try {
      await ROOTxUniv2Stakingcontract.userInfo(myAccount[0])
        .then((r) => {
          console.log(r);
          setROOTxUniv2stakedAmount(r[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const ApproveROOTxUniv2 = async (val) => {
    if (myAccount.length === 0) {
      return;
    } else if (val === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Insufficient Token!",
      });
      return;
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const ROOTxUniv2Contract = new Contract(
      contract.ROOTxUniv2[1],
      ROOTxUniv2,
      provider?.getSigner()
    );
    const myAllowanceTx = await ROOTxUniv2Contract.allowance(
      myAccount[0],
      contract.LPROOTxStaking[1]
    );
    const myAllowance = myAllowanceTx.toString() / 1000000000000000000;
    if (myAllowance >= val) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You already approved your token!",
      });
    } else {
      Swal.fire({
        icon: "question",
        title: "Confirm ROOTx Approving",
        text: `You will approve ${val} ROOTx-ETH UniV2 LP token, continue?`,
        showCancelButton: true,
      }).then(async (res) => {
        if (res.isConfirmed) {
          setApproveROOTxuniv2(true);
          setShowModal(true);
          try {
            const approveTx = await ROOTxUniv2Contract.approve(
              contract.LPROOTxStaking[1],
              ethers.utils.parseUnits(String(val), 18),
              { from: myAccount[0] }
            );
            await approveTx.wait();
            window.location.reload();
          } catch (err) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went Wrong!",
            });
            setApproveROOTxuniv2(false);
            setShowModal(false);
          }
        }
      });
    }
  };

  const createROOTxUniv2Stake = async (val) => {
    if (myAccount.length === 0) {
      return;
    } else if (val === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please input Amount",
      });
      return;
    }
    setStakingROOTxuniv2(true);
    setShowModal(true);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const ROOTxUniv2Stakingcontract = new Contract(
        contract.LPROOTxStaking[1],
        lpROOTxUniv2,
        provider?.getSigner()
      );
      const tx = await ROOTxUniv2Stakingcontract.deposit(
        ethers.utils.parseUnits(String(val), 18),
        {
          from: myAccount[0],
        }
      );
      await tx.wait();
      window.location.reload();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have to approve enough token to stake",
      });
      setStakingROOTxuniv2(false);
      setShowModal(false);
    }
  };

  const ROOTxHarvest = async () => {
    if (myAccount.length === 0) {
      return;
    }

    setROOTxClaimpending(true);
    setShowModal(true);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const ROOTxUniv2Stakingcontract = new Contract(
        contract.LPROOTxStaking[1],
        lpROOTxUniv2,
        provider?.getSigner()
      );
      const tx = await ROOTxUniv2Stakingcontract.harvest({
        from: myAccount[0],
      });
      await tx.wait();
      window.location.reload();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have to approve enough token to stake",
      });
      setROOTxClaimpending(false);
      setShowModal(false);
    }
  };

  const ROOTxWithraw = async (val) => {
    if (myAccount.length === 0) {
      return;
    } else if (val === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please input Amount",
      });
      return;
    }
    setROOTxUnstakepending(true);
    setShowModal(true);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const ROOTxUniv2Stakingcontract = new Contract(
        contract.LPROOTxStaking[1],
        lpROOTxUniv2,
        provider?.getSigner()
      );
      const tx = await ROOTxUniv2Stakingcontract.withdraw(
        ethers.utils.parseUnits(String(val), 18),
        {
          from: myAccount[0],
        }
      );
      await tx.wait();
      window.location.reload();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have to approve enough token to stake",
      });
      setROOTxUnstakepending(false);
      setShowModal(false);
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
              <p>
                Bearxlabs is incentivizing liquidity for the ROOTx token by
                giving rewards for users that stake ROOTx-ETH UniV2 LP tokens.
              </p>
              <p>
                The initial liquidity program will continue for 500,000 blocks
                (approximately 77 days) with the rate of rewards set at 10 ROOTx
                per block for LP stakers. We will assess the performance and
                requirement of a further liquidity program after the 500,000
                blocks have passed.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={6} md={6} lg={6}>
            <div className="d-flex justify-content-center">
              <div className="tokenButton">
                <NumberFormat
                  value={ROOTxuniv2Amount.toFixed(0)}
                  displayType={"text"}
                  thousandSeparator={true}
                />
                &nbsp; Stakeable tokens
              </div>
              {ApproveROOTxuniv2 ? (
                <div className="approveButton">
                  <Spinner
                    as="span"
                    variant="light"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    animation="border"
                    style={{ width: "20px", height: "20px" }}
                  />
                </div>
              ) : (
                <div
                  className="approveButton"
                  onClick={() => ApproveROOTxUniv2(ROOTxuniv2Amount)}
                >
                  APPROVE ALL
                </div>
              )}
            </div>
            <RootxMobile />
          </Col>
          <Col sm={6} md={6} lg={6}>
            <div className="d-flex justify-content-center">
              <div className="tokenButton srootx-sm">SROOTx-ETH UNI-V2</div>
            </div>
            <Srootx />
          </Col>
        </Row>
        <div className="listing d-none d-lg-block">
          <Row>
            <Col lg={6} md={6}>
              <div className="listing__card ms-5 w-md-100">
                <p>Stake your ROOTx-ETH UNI-V2 LP token</p>
                <div className="control_panel">
                  <input
                    onChange={(e) => setROOTxuniv2amt(e.target.value)}
                    type="number"
                    placeholder="ex. 30"
                    className="input_1"
                    min={1}
                  />
                  {StakingROOTxuniv2 ? (
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
                      onClick={() => createROOTxUniv2Stake(ROOTxuniv2amt)}
                    >
                      STAKE
                    </button>
                  )}
                </div>
              </div>
            </Col>

            <Col lg={6} md={6}>
              <div className="about__details">
                <p style={{ color: "yellow", fontSize: "50px" }}>COMING SOON</p>
              </div>
              {/* <div className="listing__card ms-5 w-md-100">
                <p>Stake your SROOTx/WETH LP token</p>
                <div className="control_panel">
                  <input
                    onChange={(e) => setsRootAmount(e.target.value)}
                    type="number"
                    placeholder="ex: 30"
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
              </div> */}
            </Col>
          </Row>
        </div>
        <div className="listing d-none d-lg-block">
          <Row>
            <Col lg={6} md={6}>
              <div className="container">
                <table className="unstakeTable ms-5">
                  <thead>
                    <tr>
                      <td>Staked Amount</td>
                      <td>Rewards</td>
                      <td>Claim</td>
                      <td>Unstake</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <NumberFormat
                          value={ROOTxUniv2stakedAmount.toFixed(0)}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </td>
                      <td>
                        <NumberFormat
                          value={ROOTxUniv2pendingrewards.toFixed(0)}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
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
                            onClick={() => ROOTxHarvest()}
                          >
                            CLAIM
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
                            onClick={() => ROOTxWithraw(ROOTxUniv2stakedAmount)}
                          >
                            UNSTAKE
                          </button>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>

            <Col lg={6} md={6}>
              <div className="container">
                {/* {SROOTxstakedIds.length === 0 ? (
                  <></>
                ) : (
                  <table className="unstakeTable ms-5">
                    <thead>
                      <tr>
                        <td>REMAINING DAYS</td>
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
                              item.lastClaimTimeStamp * 1000 +
                                3600 * 24 * 30 * 1000 -
                                Date.now()
                            )
                              .getDate()
                              .toString()}{" "}
                            days
                          </td>
                          <td>{item.amount / 1000000000000000000}</td>
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
                                disabled={
                                  new Date(
                                    item.lastClaimTimeStamp * 1000 +
                                      3600 * 24 * 30 * 1000 -
                                      Date.now()
                                  )
                                    .getDate()
                                    .toString() > 0
                                }
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
                )} */}
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

export default LPStakingComponent;
