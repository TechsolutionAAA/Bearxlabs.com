import React, { useEffect, useState } from "react";
import { Contract, ethers } from "ethers";
import { Spinner } from "react-bootstrap";
import Modal from "react-awesome-modal";
import Swal from "sweetalert2";
import contract from "../../config/contract";
import ROOTxABI from "../../config/rootABI.json";
import loading from "../../assets/images/loading.gif";
import { Col, Container, Row, Image } from "react-bootstrap";
import bearvx from "../../assets/images/shop/bearvx.png";
import goldenaxe from "../../assets/images/shop/goldenaxe.png";
import ticket from "../../assets/images/shop/ticket.png";
import resticted from "../../assets/images/shop/resticted.png";
import coins from "../../assets/images/shop/coins.png";
import detector from "../../assets/images/shop/detector.png";
import landplot from "../../assets/images/shop/landplot.png";
import toolkit from "../../assets/images/shop/toolkit.png";
const LoadCard = () => {
  const [MyWeb3, setMyWeb3] = useState([]);
  const [myAccount, setMyAccount] = useState([]);

  const [ROOTxBalance, setROOTxBalance] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Bearx Ticket Info
  const [BearxburnROOTx, setburnROOTx] = useState(1000);
  const [Bearxticketamount, setticketamount] = useState(20);
  const [Bearxpending, setBearxpending] = useState(false);
  const [ticketowned, setticketowned] = useState(false);

  useEffect(() => {
    if (window.web3 !== undefined && window.ethereum) {
      loadWeb3();
    }
  }, []);

  useEffect(() => {
    if (MyWeb3.length !== 0) {
      getROOTxBalance();
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

  const getROOTxBalance = async () => {
    if (myAccount.length === 0) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const ROOTxContract = new Contract(
      contract.ROOTx[1],
      ROOTxABI,
      provider?.getSigner()
    );

    try {
      await ROOTxContract.balanceOf(myAccount[0])
        .then((r) => {
          const temp = r / 1000000000000000000;
          setROOTxBalance(temp);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const burnROOTxforbearx = async () => {
    if (myAccount.length === 0) return;

    Swal.fire({
      icon: "question",
      title: "Confirm Burn ROOTx",
      text: `Burn ${BearxburnROOTx} ROOTx token and get WL spot of Bearx, continue ?`,
      showCancelButton: true,
    })
      .then(async (res) => {
        if (res.isConfirmed) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const ROOTxContract = new Contract(
            contract.ROOTx[1],
            ROOTxABI,
            provider?.getSigner()
          );

          setBearxpending(true);
          setShowModal(true);
          try {
            const tx = await ROOTxContract._burn(
              ethers.utils.parseUnits(String(BearxburnROOTx), 18),
              { from: myAccount[0] }
            );
            await tx.wait();
            setticketowned(true);
            window.location.reload();
          } catch (error) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went Wrong!",
            });
            setBearxpending(false);
            setShowModal(false);
          }
        }
      })
      .catch((err) => console.log(err));
  };

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
                    <span>{BearxburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      2 / {Bearxticketamount} FILLED
                    </span>
                  </div>
                </div>
                <div className="description">
                  This is Bear VX NFT collections. It would be used for Bearx
                  Game.This is Bear VX NFT collections.
                  {ticketowned ? (
                    <a  rel="nofollow" target="_blank" href="https://discord.com/invite/bear-x">
                      open a ticket in the server
                    </a>
                  ) : (
                    <></>
                  )}
                </div>
                {ticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : Bearxpending ? (
                  <button>
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
                ) : ROOTxBalance >= BearxburnROOTx ? (
                  <button onClick={burnROOTxforbearx}>BearVX</button>
                ) : (
                  <button>Not Enough ROOTx</button>
                )}
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
                  This is Bear VX NFT collections. It would be used for Bearx
                  Game.This is Bear VX NFT collections.
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
                  This is Bear VX NFT collections. It would be used for Bearx
                  Game.This is Bear VX NFT collections.
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
                  This is Bear VX NFT collections. It would be used for Bearx
                  Game.This is Bear VX NFT collections.
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
                  This is Bear VX NFT collections. It would be used for Bearx
                  Game.This is Bear VX NFT collections.
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
                  This is Bear VX NFT collections. It would be used for Bearx
                  Game.This is Bear VX NFT collections.
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
                  This is Bear VX NFT collections. It would be used for Bearx
                  Game.This is Bear VX NFT collections.
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
                  This is Bear VX NFT collections. It would be used for Bearx
                  Game.This is Bear VX NFT collections.
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
                  This is Bear VX NFT collections. It would be used for Bearx
                  Game.This is Bear VX NFT collections.
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
                  This is Bear VX NFT collections. It would be used for Bearx
                  Game.This is Bear VX NFT collections.
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
                  This is Bear VX NFT collections. It would be used for Bearx
                  Game.This is Bear VX NFT collections.
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
                  This is Bear VX NFT collections. It would be used for Bearx
                  Game.This is Bear VX NFT collections.
                </div>
                <button>REDACTED Authorised Personnel Only</button>
              </div>
            </div>
          </Col>
        </Row>
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
};

export default LoadCard;
