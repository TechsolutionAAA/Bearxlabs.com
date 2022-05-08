import React, { useEffect, useState } from "react";
import { Contract, ethers } from "ethers";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import Modal from "react-awesome-modal";
import Swal from "sweetalert2";
import contract from "../../config/contract";
import ROOTxABI from "../../config/ROOTx_Rinkeby.json";
import loading from "../../assets/images/loading.gif";
import { Col, Container, Row, Image } from "react-bootstrap";

import souka from "../../assets/images/Items/souka.jpg";
import flick from "../../assets/images/Items/flick.jpg";
import nood from "../../assets/images/Items/nood.jpg";
// import wizard from "../../assets/images/Items/wizard.jpg";
// import Dodo from "../../assets/images/Items/Dodo.jpg";

const LoadCard = () => {
  const [MyWeb3, setMyWeb3] = useState([]);
  const [myAccount, setMyAccount] = useState([]);

  const [ROOTxBalance, setROOTxBalance] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showSettingModal, setShowSettingModal] = useState(false);

  // Setting Modal
  const [disId, setdisId] = useState("");
  const [Addr, setAddr] = useState("");
  const [ProName, setProName] = useState("");

  // souka Ticket Info
  const [soukaburnROOTx, setburnROOTx] = useState(2);
  const [soukaticketamount, setsoukaticketamount] = useState(0);
  const [soukaticketowned, setsoukaticketowned] = useState(false);
  const [soukapending, setsoukapending] = useState(false);

  // flick Ticket Info
  const [flickburnROOTx, setflickburnROOTx] = useState(2);
  const [flickticketamount, setflickticketamount] = useState(0);
  const [flickticketowned, setflickticketowned] = useState(false);
  const [flickpending, setflickpending] = useState(false);

  // NOOD Ticket Info
  const [noodburnROOTx, setnoodburnROOTx] = useState(2500);
  const [noodticketamount, setnoodticketamount] = useState(0);
  const [noodticketowned, setnoodticketowned] = useState(false);
  const [noodpending, setnooedpending] = useState(false);

  // wizardgladiators Ticket Info
  // const [wizardburnROOTx, setwizardburnROOTx] = useState(2500);
  // const [wizardticketamount, setwizardticketamount] = useState(0);
  // const [wizardticketowned, setwizardticketowned] = useState(false);
  // const [wizardpending, setwizardpending] = useState(false);

  // Dodo wizardgods Ticket Info
  // const [DodoburnROOTx, setDodoburnROOTx] = useState(6000);
  // const [Dodoticketamount, setDodoticketamount] = useState(0);
  // const [Dodoticketowned, setDodoticketowned] = useState(false);
  // const [Dodopending, setDodopending] = useState(false);

  useEffect(() => {
    if (window.web3 !== undefined && window.ethereum) {
      loadWeb3();
    }
  }, []);

  useEffect(() => {
    if (MyWeb3.length !== 0) {
      getROOTxBalance();
      getsheetdata();
    }
  }, [MyWeb3, myAccount[0]]);

  const getsheetdata = async () => {
    await axios
      .get("https://sheet.best/api/sheets/49b95d3b-26b9-41b6-a1d6-ade923fab08d")
      .then((res) => {
        var soukacount = 0;
        var flickcount = 0;
        var noodcount = 0;
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].Project === "souka") {
            soukacount++;
            if (res.data[i].Account === myAccount[0]) {
              setsoukaticketowned(true);
            }
          } else if(res.data[i].Project === "flick") {
            flickcount++;
            if(res.data[i].Account === myAccount[0]) {
              setflickticketowned(true);
            }
          } else if(res.data[i].Project === "nood") {
            noodcount++;
            if(res.data[i].Account === myAccount[0]) {
              setnoodticketowned(true);
            }
          }
        }
        setsoukaticketamount(soukacount);
        setflickticketamount(flickcount);
        setnoodticketamount(noodcount);
      })
      .catch((err) => console.log(err));
  };

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
      contract.ROOTx[4],
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

  const burnROOTx = async (amount, item) => {
    if (myAccount.length === 0) return;

    Swal.fire({
      icon: "question",
      title: "Burn ROOTx confirmation",
      text: `You are burning ${amount} ROOTx to get WL spot, continue?`,
      showCancelButton: true,
    })
      .then(async (res) => {
        if (res.isConfirmed) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const ROOTxContract = new Contract(
            contract.ROOTx[4],
            ROOTxABI,
            provider?.getSigner()
          );

          if (item === "souka") {
            setProName(item);
            setAddr(myAccount[0]);
            setsoukapending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setsoukapending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setsoukapending(false);
              setShowModal(false);
            }
          } else if (item === "flick") {
            setProName(item);
            setAddr(myAccount[0]);
            setflickpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setflickpending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setflickpending(false);
              setShowModal(false);
            }
          } else if (item === "nood") {
            setProName(item);
            setAddr(myAccount[0]);
            setnooedpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setflickpending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setnooedpending(false);
              setShowModal(false);
            }
          }
        }
      })
      .catch((err) => console.log(err));
  };

  const savesheet = async (val1, val2, val3) => {
    const expdata = {
      Project: val3,
      Account: val2,
      discordId: val1,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/49b95d3b-26b9-41b6-a1d6-ade923fab08d",
        expdata
      )
      .then((res) => {
        setShowSettingModal(false);
        setTimeout(() => {
          window.location.replace("/Whitelist");
        }, 1000);
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
                  <Image src={souka} alt="shop images" fluid />
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
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>{soukaburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {soukaticketamount} / 3 FILLED
                    </span>
                  </div>
                </div>
                <span className="title">SOUKA</span>
                <div className="description">
                  An oasis for weary travelers, greedy merchants and dutiful
                  warriors — even vengeful vagrants.
                </div>
                {soukaticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : soukapending ? (
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
                ) : soukaticketamount >= 3 ? (
                  <button>SOLD OUT</button>
                ) : ROOTxBalance >= soukaburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(soukaburnROOTx, "souka")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button>NOT ENOUGH ROOTX</button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={flick} alt="shop images" fluid />
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
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>{flickburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {flickticketamount} / 3 FILLED
                    </span>
                  </div>
                </div>
                <span className="title">FLICK</span>
                <div className="description">
                  The first NFT collection to be displayed with AR in the real
                  world, thanks to FlickPlay App.
                </div>
                {flickticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : flickpending ? (
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
                ) : flickticketamount >= 3 ? (
                  <button>SOLD OUT</button>
                ) : ROOTxBalance >= flickburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(flickburnROOTx, "flick")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button>NOT ENOUGH ROOTX</button>
                )}
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
      <Modal
        visible={showSettingModal}
        width="500px"
        height="450px"
        effect="fadeInUp"
      >
        <p
          style={{
            color: "#fd7e14",
            textAlign: "center",
            marginTop: "10%",
            fontFamily: "earlyGameboy",
          }}
        >
          Input Discord Id to Get WL Spot!
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "2%",
            }}
          >
            <div
              style={{
                flex: "0.3",
                fontFamily: "earlyGameboy",
                fontSize: "12px",
                alignSelf: "center",
              }}
            >
              Discord ID
            </div>
            <div style={{ flex: "0.7" }}>
              <input
                type="text"
                id="discord"
                value={disId}
                onChange={(e) => setdisId(e.target.value)}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "2%",
            }}
          >
            <div
              style={{
                flex: "0.3",
                fontFamily: "earlyGameboy",
                fontSize: "12px",
                alignSelf: "center",
              }}
            >
              Account
            </div>
            <div style={{ flex: "0.7" }}>
              <input type="text" id="wallet" value={Addr} disabled />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "2%",
            }}
          >
            <div
              style={{
                flex: "0.3",
                fontFamily: "earlyGameboy",
                fontSize: "12px",
                alignSelf: "center",
              }}
            >
              Project
            </div>
            <div style={{ flex: "0.7" }}>
              <input type="text" id="project" value={ProName} disabled />
            </div>
          </div>
        </div>
        <div style={{display: "flex", justifyContent:"center"}}>
          <button
            style={{
              fontSize: "12px",
              padding: "7px 13px",
              backgroundColor: "#fd7e14",
              color: "black",
              borderRadius: "50px",
              fontFamily: "earlyGameBoy",
              cursor: "pointer",
              border: "0px",
              marginTop: "3%",
            }}
            onClick={() => savesheet(disId, Addr, ProName)}
          >
            {" "}
            GET WHITELIST SPOT
          </button>
        </div>

        <div>
          <p
            style={{
              color: "#fd7e14",
              textAlign: "center",
              fontFamily: "earlyGameboy",
              marginTop: "5%",
              fontSize: "12px",
            }}
          >
            Input discord ID to purchase WL spot! <br></br>please ensure you
            copy and paste username from discord to avoid mistakes <br></br>Any
            incorrect discord usernames will not be chased, and no refunds will
            be given from mistakes. Double check your username before submitting
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default LoadCard;
