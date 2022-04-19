import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import bearvx from "../../assets/images/shop/bearvx.png";
import goldenaxe from "../../assets/images/shop/goldenaxe.png";
import ticket from "../../assets/images/shop/ticket.png";
import resticted from "../../assets/images/shop/resticted.png";
import coins from "../../assets/images/shop/coins.png";
import detector from "../../assets/images/shop/detector.png";
import landplot from "../../assets/images/shop/landplot.png";
import toolkit from "../../assets/images/shop/toolkit.png";
import shap from "../../assets/images/shop/shap.png";
import { FaStarOfLife } from "react-icons/fa";
const LoadCard = () => {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <div
            style={{
              textAlign: "center",
              fontSize: "45px",
              fontFamily: "editundo",
              color: "#ffae41",
              lineHeight: "100px",
            }}
          >
            Burn ROOTx for some very, very valuable items
          </div>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={bearvx} alt="shop images" fluid />
                </div>
              </div>
              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "38%",
                    marginBottom: "15px",
                  }}
                >
                  {/* <Image src={shap} alt="shap" /> */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span>30,000 ROOTx</span>
                      <span style={{ marginTop: "10px" }}>2 / 10 FILLED</span>
                    </div>
                </div>
                <div className="description">
                This is Bear VX NFT collections. It would be used for Bearx Game.This is Bear VX NFT collections.
                </div>
                <button>BearVX</button>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={goldenaxe} alt="shop images" fluid />
                </div>
              </div>
              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "38%",
                    marginBottom: "15px",
                  }}
                >
                  {/* <Image src={shap} alt="shap" /> */}
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>30,000 ROOTx</span>
                    <span style={{ marginTop: "10px" }}>12 / 20 FILLED</span>
                  </div>
                </div>
                <div className="description">
                This is Bear VX NFT collections. It would be used for Bearx Game.This is Bear VX NFT collections.
                </div>
                <button>Golden Axe</button>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={landplot} alt="shop images" fluid />
                </div>
              </div>
              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "38%",
                    marginBottom: "15px",
                  }}
                >
                  {/* <Image src={shap} alt="shap" /> */}
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>30,000 ROOTx</span>
                    <span style={{ marginTop: "10px" }}>8 / 10 FILLED</span>
                  </div>
                </div>
                <div className="description">
                This is Bear VX NFT collections. It would be used for Bearx Game.This is Bear VX NFT collections.
                </div>
                <button>Land Plot 12x12</button>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={coins} alt="shop images" fluid />
                </div>
              </div>
              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "38%",
                    marginBottom: "15px",
                  }}
                >
                  {/* <Image src={shap} alt="shap" /> */}
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>30,000 ROOTx</span>
                    <span style={{ marginTop: "10px" }}>5 / 10 FILLED</span>
                  </div>
                </div>
                <div className="description">
                This is Bear VX NFT collections. It would be used for Bearx Game.This is Bear VX NFT collections.
                </div>
                <button>Casino Development Proposal</button>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={resticted} alt="shop images" fluid />
                </div>
              </div>
              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "38%",
                    marginBottom: "15px",
                  }}
                >
                  {/* <Image src={shap} alt="shap" /> */}
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>30,000 ROOTx</span>
                    <span style={{ marginTop: "10px" }}>2 / 10 FILLED</span>
                  </div>
                </div>
                <div className="description">
                This is Bear VX NFT collections. It would be used for Bearx Game.This is Bear VX NFT collections.
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    padding: "7px 13px",
                    backgroundColor: "#fdd803",
                    color: "black",
                    borderRadius: "50px",
                    cursor: "pointer",
                    border: "0px",
                  }}
                >
                  <span style={{ fontFamily: "earlyGameBoy" }}>
                    Bear Bribe{" "}
                  </span>
                  <span style={{ fontSize: "18px", fontWeight: "800" }}>[</span>
                  <span style={{ fontFamily: "earlyGameBoy" }}>Warning - </span>
                  <span style={{ fontSize: "18px", fontWeight: "800" }}>*</span>
                  <span style={{ fontFamily: "earlyGameBoy" }}>RISK</span>
                  <span style={{ fontSize: "18px", fontWeight: "800" }}>
                    *]
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={ticket} alt="shop images" fluid />
                </div>
              </div>
              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "38%",
                    marginBottom: "15px",
                  }}
                >
                  {/* <Image src={shap} alt="shap" /> */}
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>30,000 ROOTx</span>
                    <span style={{ marginTop: "10px" }}>2 / 10 FILLED</span>
                  </div>
                </div>
                <div className="description">
                This is Bear VX NFT collections. It would be used for Bearx Game.This is Bear VX NFT collections.
                </div>
                <button>BearX Ticket</button>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={detector} alt="shop images" fluid />
                </div>
              </div>
              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "38%",
                    marginBottom: "15px",
                  }}
                >
                  {/* <Image src={shap} alt="shap" /> */}
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>30,000 ROOTx</span>
                    <span style={{ marginTop: "10px" }}>2 / 10 FILLED</span>
                  </div>
                </div>
                <div className="description">
                This is Bear VX NFT collections. It would be used for Bearx Game.This is Bear VX NFT collections.
                </div>
                <button>Sphere Detector</button>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={toolkit} alt="shop images" fluid />
                </div>
              </div>
              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "38%",
                    marginBottom: "15px",
                  }}
                >
                  {/* <Image src={shap} alt="shap" /> */}
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>30,000 ROOTx</span>
                    <span style={{ marginTop: "10px" }}>2 / 10 FILLED</span>
                  </div>
                </div>
                <div className="description">
                This is Bear VX NFT collections. It would be used for Bearx Game.This is Bear VX NFT collections.
                </div>
                <button>Political Campaign Toolkit</button>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={resticted} alt="shop images" fluid />
                </div>
              </div>
              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "38%",
                    marginBottom: "15px",
                  }}
                >
                  {/* <Image src={shap} alt="shap" /> */}
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>30,000 ROOTx</span>
                    <span style={{ marginTop: "10px" }}>2 / 10 FILLED</span>
                  </div>
                </div>
                <div className="description">
                This is Bear VX NFT collections. It would be used for Bearx Game.This is Bear VX NFT collections.
                </div>
                <button>REDACTED Authorised Personnel Only</button>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={resticted} alt="shop images" fluid />
                </div>
              </div>
              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "38%",
                    marginBottom: "15px",
                  }}
                >
                  {/* <Image src={shap} alt="shap" /> */}
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>30,000 ROOTx</span>
                    <span style={{ marginTop: "10px" }}>2 / 10 FILLED</span>
                  </div>
                </div>
                <div className="description">
                This is Bear VX NFT collections. It would be used for Bearx Game.This is Bear VX NFT collections.
                </div>
                <button>REDACTED Authorised Personnel Only</button>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={resticted} alt="shop images" fluid />
                </div>
              </div>
              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "38%",
                    marginBottom: "15px",
                  }}
                >
                  {/* <Image src={shap} alt="shap" /> */}
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>30,000 ROOTx</span>
                    <span style={{ marginTop: "10px" }}>2 / 10 FILLED</span>
                  </div>
                </div>
                <div className="description">
                This is Bear VX NFT collections. It would be used for Bearx Game.This is Bear VX NFT collections.
                </div>
                <button>REDACTED Authorised Personnel Only</button>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={resticted} alt="shop images" fluid />
                </div>
              </div>
              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "38%",
                    marginBottom: "15px",
                  }}
                >
                  {/* <Image src={shap} alt="shap" /> */}
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>30,000 ROOTx</span>
                    <span style={{ marginTop: "10px" }}>2 / 10 FILLED</span>
                  </div>
                </div>
                <div className="description">
                This is Bear VX NFT collections. It would be used for Bearx Game.This is Bear VX NFT collections.
                </div>
                <button>REDACTED Authorised Personnel Only</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoadCard;
