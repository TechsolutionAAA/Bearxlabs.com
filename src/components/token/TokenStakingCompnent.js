import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import RootxMobile from "./RootxMobile";
import Srootx from "./Srootx";

function TokenStakingCompnent() {
  const [amounts, setAmounts] = useState([]);
  const [samounts, setSamounts] = useState([]);
  const [rootAmount, setRootAmount] = useState(0);
  const [sRootAmount, setsRootAmount] = useState(0);

  const staking = (val) => {
    if (val) {
      let sAmountArray = samounts;
      sAmountArray.push(sRootAmount);
      setSamounts(sAmountArray);
    } else {
      let amountArray = amounts;
      amountArray.push(rootAmount);
      setAmounts(amountArray);
    }
  }

  const amountData = amounts.map((amount) => {
    let index = 1;
    console.log(amount);
    return (
      <tr key={index}>
        <td>{index}</td>
        <td>{amount}</td>
        <td>
          <button type="button">
            CLAIM
          </button>
        </td>
        <td>
          <button type="button">
            UNSTAKE
          </button>
        </td>
      </tr>
    );
    index++;
  })

  return (
    <div className=" main__listing">
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
                    class="input_1"
                    min={1}
                  />
                  <button
                    type="button"
                    class="input_2"
                    onClick={() => staking(0)}
                  >
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
                    class="input_1"
                  />
                  <button type="button" class="input_2">
                    STAKE
                  </button>
                </div>
              </div>
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
                      <td>No</td>
                      <td>Amount</td>
                      <td>Claim</td>
                      <td>Unstake</td>
                    </tr>
                  </thead>
                  <tbody>
                    { amountData }
                  </tbody>
                </table>
              </div>
            </Col>

            <Col lg={6} md={6}>
              <div className="container"></div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default TokenStakingCompnent;
