import { Contract, ethers } from "ethers";
import React, { useEffect, useState, useCallback } from "react";
import { Spinner } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import RootxMobile from "./RootxMobile";
import Srootx from "./Srootx";
import contract from "../../config/contract";
import RootxStakingABI from "../../config/ROOTxStaking.json";
import SRootxStakingABI from "../../config/SROOTxStaking.json";
import SROOTxABI from "../../config/SROOTx_Rinkeby.json";
import { BigNumber } from "ethers";

function TokenStakingCompnent() {
  const [MyWeb3, setMyWeb3] = useState([]);
  const [myAccount, setMyAccount] = useState([]);
  const [sROOtAmount, setsRootAmount] = useState(0);
  const [RootAmount, setRootAmount] = useState(0);
  const [stakedIds, SetStakedIds] = useState([]);

  const [SROOtxStakingPending, setSROOtxStakingPending] = useState(false);

  useEffect(() => {
    if (window.web3 !== undefined && window.ethereum) {
      loadWeb3();
    }
  }, []);

  useEffect(() => {
    if (MyWeb3.length !== 0) {
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

  const getSROOTxStakingData = async () => {
    if (myAccount.length === 0) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const Stakingcontract = new Contract(
      contract.SROOTxStaking[4],
      SRootxStakingABI,
      provider?.getSigner()
    );

    try {
      await Stakingcontract.getStakesByStaker(myAccount[0])
        .then((r) => {
          SetStakedIds((b) => r);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const createSROOTxStake = async (amount) => {
    if (myAccount.length === 0) {
      return;
    } else if (amount === 0) {
      alert("Please input Amount");
      return;
    }
    console.log(amount);
    setSROOtxStakingPending(true);
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
                  <button type="button" className="input_2">
                    STAKE
                  </button>
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
            <Col lg={6} md={6}></Col>

            <Col lg={6} md={6}>
              <div className="container">
                {stakedIds.length === 0 ? (
                  <></>
                ) : (
                  <table className="unstakeTable ms-5">
                    <thead>
                      <tr>
                        <td>Staked Amount</td>
                        <td>Claim Amount</td>
                        <td>Claim</td>
                        <td>Unstake</td>
                      </tr>
                    </thead>
                    <tbody>
                      {stakedIds.map((item) => (
                        <tr key={item.id}>
                          <td>
                            {(item.amount / 1000000000000000000).toString()}
                          </td>
                          <td>{}</td>
                          <td>
                            <button type="button">CLAIAM</button>
                          </td>
                          <td>
                            <button type="button">UNSTAKE</button>
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
    </div>
  );
}

export default TokenStakingCompnent;
