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
// import nood from "../../assets/images/Items/nood.jpg";
// import flick from "../../assets/images/Items/flick.jpg";
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

  // NOOD Ticket Info
  // const [noodburnROOTx, setnoodburnROOTx] = useState(2500);
  // const [noodticketamount, setnoodticketamount] = useState(0);
  // const [noodticketowned, setnoodticketowned] = useState(false);
  // const [noodpending, setnooedpending] = useState(false);

  // flick Ticket Info
  // const [flickburnROOTx, setflickburnROOTx] = useState(2500);
  // const [flickticketamount, setflickticketamount] = useState(0);
  // const [flickticketowned, setflickticketowned] = useState(false);
  // const [flickpending, setflickpending] = useState(false);

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

      // AVART Ticket
      // getsoukaticketdata();
      // getsoukaowned();

      // NOOD Ticket
      // getnoodticketdata();
      // getnoodowned();

      // fluffie Ticket
      // getfluffieticketdata();
      // getfluffieowned();

      // wizard Ticket
      // getwizardticketdata();
      // getwizardticketowned();

      // Dodo wizardgods Ticket
      // getDodoticketdata();
      // getDodoticketowned();
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

  // souka Ticket

  // const getsoukaticketdata = async () => {
  //   const expData = {
  //     item: "souka",
  //   };
  //   axios
  //     .post("/v1/api/user/getticketdata", expData)
  //     .then((res) => {
  //       if (res.data >= 0) {
  //         setsoukaticketamount(res.data);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };
  // const getsoukaowned = async () => {
  //   const expData = {
  //     item: "souka",
  //     account: window.ethereum.selectedAddress,
  //   };
  //   axios
  //     .post("/v1/api/user/gettickeowned", expData)
  //     .then((res) => {
  //       if (res.data.result) {
  //         setsoukaticketowned(true);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  // NOOD Ticket
  // const getnoodticketdata = async () => {
  //   const expData = {
  //     item: "nood",
  //   };
  //   axios
  //     .post("/v1/api/user/getticketdata", expData)
  //     .then((res) => {
  //       if (res.data >= 0) {
  //         setnoodticketamount(res.data);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };
  // const getnoodowned = async () => {
  //   const expData = {
  //     item: "nood",
  //     account: window.ethereum.selectedAddress,
  //   };
  //   axios
  //     .post("/v1/api/user/gettickeowned", expData)
  //     .then((res) => {
  //       if (res.data.result) {
  //         setnoodticketowned(true);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  // fluffie Ticket
  // const getfluffieticketdata = async () => {
  //   const expData = {
  //     item: "flick",
  //   };
  //   axios
  //     .post("/v1/api/user/getticketdata", expData)
  //     .then((res) => {
  //       if (res.data >= 0) {
  //         setflickticketamount(res.data);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };
  // const getfluffieowned = async () => {
  //   const expData = {
  //     item: "flick",
  //     account: window.ethereum.selectedAddress,
  //   };
  //   axios
  //     .post("/v1/api/user/gettickeowned", expData)
  //     .then((res) => {
  //       if (res.data.result) {
  //         setflickticketowned(true);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  // wizard Ticket
  // const getwizardticketdata = async () => {
  //   const expData = {
  //     item: "wizard",
  //   };
  //   axios
  //     .post("/v1/api/user/getticketdata", expData)
  //     .then((res) => {
  //       if (res.data >= 0) {
  //         setwizardticketamount(res.data);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };
  // const getwizardticketowned = async () => {
  //   const expData = {
  //     item: "wizard",
  //     account: window.ethereum.selectedAddress,
  //   };
  //   axios
  //     .post("/v1/api/user/gettickeowned", expData)
  //     .then((res) => {
  //       if (res.data.result) {
  //         setwizardticketowned(true);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  // Dodo Ticket
  // const getDodoticketdata = async () => {
  //   const expData = {
  //     item: "Dodo",
  //   };
  //   axios
  //     .post("/v1/api/user/getticketdata", expData)
  //     .then((res) => {
  //       if (res.data >= 0) {
  //         setDodoticketamount(res.data);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };
  // const getDodoticketowned = async () => {
  //   const expData = {
  //     item: "Dodo",
  //     account: window.ethereum.selectedAddress,
  //   };
  //   axios
  //     .post("/v1/api/user/gettickeowned", expData)
  //     .then((res) => {
  //       if (res.data.result) {
  //         setDodoticketowned(true);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  const burnROOTx = async (amount, item) => {
    if (myAccount.length === 0) return;

    Swal.fire({
      icon: "question",
      title: "Confirm Burn ROOTx",
      text: `Burn ${amount} ROOTx token and get WL spot, continue ?`,
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
                text: "Burn ROOTx token Success!",
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
          }
          // } else if (item === "nood") {
          //   setnooedpending(true);
          //   setShowModal(true);
          //   try {
          //     const tx = await ROOTxContract._burn(
          //       ethers.utils.parseUnits(String(amount), 18),
          //       { from: myAccount[0] }
          //     );
          //     await tx.wait();
          //     const expData = {
          //       item: "nood",
          //       amount: Number(noodticketamount) + 1,
          //     };
          //     await axios
          //       .post("/v1/api/user/setticketamount", expData)
          //       .then((res) => {
          //         console.log("success");
          //       })
          //       .catch((err) => console.log(err));
          //     const expData1 = {
          //       item: "nood",
          //       owner: window.ethereum.selectedAddress,
          //     };
          //     await axios
          //       .post("/v1/api/user/setticketowner", expData1)
          //       .then((res) => {
          //         if (res.data.result) {
          //           setnoodticketowned(true);
          //           window.location.reload();
          //         }
          //       })
          //       .catch((err) => console.log(err));
          //   } catch (error) {
          //     Swal.fire({
          //       icon: "error",
          //       title: "Oops...",
          //       text: "Something went Wrong!",
          //     });
          //     setnooedpending(false);
          //     setShowModal(false);
          //   }
          // } else if (item === "flick") {
          //   setflickpending(true);
          //   setShowModal(true);
          //   try {
          //     const tx = await ROOTxContract._burn(
          //       ethers.utils.parseUnits(String(amount), 18),
          //       { from: myAccount[0] }
          //     );
          //     await tx.wait();
          //     const expData = {
          //       item: "flick",
          //       amount: Number(flickticketamount) + 1,
          //     };
          //     await axios
          //       .post("/v1/api/user/setticketamount", expData)
          //       .then((res) => {
          //         console.log("success");
          //       })
          //       .catch((err) => console.log(err));
          //     const expData1 = {
          //       item: "flick",
          //       owner: window.ethereum.selectedAddress,
          //     };
          //     await axios
          //       .post("/v1/api/user/setticketowner", expData1)
          //       .then((res) => {
          //         if (res.data.result) {
          //           setflickticketowned(true);
          //           window.location.reload();
          //         }
          //       })
          //       .catch((err) => console.log(err));
          //   } catch (error) {
          //     Swal.fire({
          //       icon: "error",
          //       title: "Oops...",
          //       text: "Something went Wrong!",
          //     });
          //     setflickpending(false);
          //     setShowModal(false);
          //   }
          // } else if (item === "wizard") {
          //   setwizardpending(true);
          //   setShowModal(true);
          //   try {
          //     const tx = await ROOTxContract._burn(
          //       ethers.utils.parseUnits(String(amount), 18),
          //       { from: myAccount[0] }
          //     );
          //     await tx.wait();
          //     const expData = {
          //       item: "wizard",
          //       amount: Number(wizardticketamount) + 1,
          //     };
          //     await axios
          //       .post("/v1/api/user/setticketamount", expData)
          //       .then((res) => {
          //         console.log("success");
          //       })
          //       .catch((err) => console.log(err));
          //     const expData1 = {
          //       item: "wizard",
          //       owner: window.ethereum.selectedAddress,
          //     };
          //     await axios
          //       .post("/v1/api/user/setticketowner", expData1)
          //       .then((res) => {
          //         if (res.data.result) {
          //           setwizardticketowned(true);
          //           window.location.reload();
          //         }
          //       })
          //       .catch((err) => console.log(err));
          //   } catch (error) {
          //     Swal.fire({
          //       icon: "error",
          //       title: "Oops...",
          //       text: "Something went Wrong!",
          //     });
          //     setwizardpending(false);
          //     setShowModal(false);
          //   }
          // } else if (item === "Dodo") {
          //   setDodopending(true);
          //   setShowModal(true);
          //   try {
          //     const tx = await ROOTxContract._burn(
          //       ethers.utils.parseUnits(String(amount), 18),
          //       { from: myAccount[0] }
          //     );
          //     await tx.wait();
          //     const expData = {
          //       item: "Dodo",
          //       amount: Number(Dodoticketamount) + 1,
          //     };
          //     await axios
          //       .post("/v1/api/user/setticketamount", expData)
          //       .then((res) => {
          //         console.log("success");
          //       })
          //       .catch((err) => console.log(err));
          //     const expData1 = {
          //       item: "Dodo",
          //       owner: window.ethereum.selectedAddress,
          //     };
          //     await axios
          //       .post("/v1/api/user/setticketowner", expData1)
          //       .then((res) => {
          //         if (res.data.result) {
          //           setDodoticketowned(true);
          //           window.location.reload();
          //         }
          //       })
          //       .catch((err) => console.log(err));
          //   } catch (error) {
          //     Swal.fire({
          //       icon: "error",
          //       title: "Oops...",
          //       text: "Something went Wrong!",
          //     });
          //     setDodopending(false);
          //     setShowModal(false);
          //   }
          // }
        }
      })
      .catch((err) => console.log(err));
  };

  const savesheet = (val1, val2, val3) => {
    console.log(val1);
    console.log(val2);
    console.log(val3);
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
                      {soukaticketamount} / 3 filleds
                    </span>
                  </div>
                </div>
                <div className="description">
                  An oasis for weary travelers, greedy merchants and dutiful
                  warriors — even vengeful vagrants.
                </div>
                {soukaticketowned ? (
                  <button className="server">
                    <a
                      className="servertxt"
                      target="_blank"
                      href="https://discord.com/channels/893470863876300830/893476471157436436/902961581661503608"
                    >
                      open a ticket in the server
                    </a>
                  </button>
                ) : (
                  <></>
                )}
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
                ) : ROOTxBalance >= soukaburnROOTx ? (
                  <button onClick={() => burnROOTx(soukaburnROOTx, "souka")}>
                    Get Whitelist Spot
                  </button>
                ) : soukaticketamount >= 3 ? (
                  <button>SOLD OUT</button>
                ) : (
                  <button>Not Enough ROOTx</button>
                )}
              </div>
            </div>
          </Col>
          {/* <Col lg={4}>
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
                    <span>
                      {flickburnROOTx.toLocaleString("en-US")} ROOTx
                    </span>
                    <span style={{ marginTop: "10px" }}>
                      {flickticketamount} / 3 filleds
                    </span>
                  </div>
                </div>
                <div className="description">
                  The first NFT collection to be displayed with AR in the real
                  world, thanks to FlickPlay App.
                </div>
                {flickticketowned ? (
                  <button className="server">
                    <a
                      className="servertxt"
                      target="_blank"
                      href="https://discord.com/channels/893470863876300830/893476471157436436/902961581661503608"
                    >
                      open a ticket in the server
                    </a>
                  </button>
                ) : (
                  <></>
                )}
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
                ) : ROOTxBalance >= flickburnROOTx ? (
                  <button
                    onClick={() => burnROOTx(flickburnROOTx, "flick")}
                  >
                    Get Whitelist Spot
                  </button>
                ) : flickticketamount >= 3 ? (
                  <button>SOLD OUT</button>
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
                  <Image src={wizard} alt="shop images" fluid />
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
                    <span>{wizardburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {wizardticketamount} / 3 filleds
                    </span>
                  </div>
                </div>
                <div className="description">
                  3,333 mystical wizards building a P2P NFT trading platform &
                  sharing alpha | Doxxed team
                </div>
                {wizardticketowned ? (
                  <button className="server">
                    <a
                      className="servertxt"
                      target="_blank"
                      href="https://discord.com/channels/893470863876300830/893476471157436436/902961581661503608"
                    >
                      open a ticket in the server
                    </a>
                  </button>
                ) : (
                  <></>
                )}
                {wizardticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : wizardpending ? (
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
                ) : ROOTxBalance >= wizardburnROOTx ? (
                  <button onClick={() => burnROOTx(wizardburnROOTx, "wizard")}>
                    Get Whitelist Spot
                  </button>
                ) : wizardticketamount >= 3 ? (
                  <button>SOLD OUT</button>
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
                  <Image src={nood} alt="shop images" fluid />
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
                    <span>{noodburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {noodticketamount} / 3 filleds
                    </span>
                  </div>
                </div>
                <div className="description">
                  Nood Fungible Token is an NFT project that aims to promote
                  body positivity, equality, and freedom within the NFT
                  community. This project will consist of 4444 unique Noodies
                  separated into 4 different drops in line with different
                  advocacies. Each drop from all collections is sure to be
                  unique and have their own flair.
                </div>
                {noodticketowned ? (
                  <button className="server">
                    <a
                      className="servertxt"
                      target="_blank"
                      href="https://discord.com/channels/893470863876300830/893476471157436436/902961581661503608"
                    >
                      open a ticket in the server
                    </a>
                  </button>
                ) : (
                  <></>
                )}
                {noodticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : noodpending ? (
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
                ) : ROOTxBalance >= noodburnROOTx ? (
                  <button onClick={() => burnROOTx(noodburnROOTx, "nood")}>
                    Get Whitelist Spot
                  </button>
                ) : noodticketamount >= 3 ? (
                  <button>SOLD OUT</button>
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
                  <Image src={Dodo} alt="shop images" fluid />
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
                    <span>
                      {DodoburnROOTx.toLocaleString("en-US")} ROOTx
                    </span>
                    <span style={{ marginTop: "10px" }}>
                      {Dodoticketamount} / 3 filleds
                    </span>
                  </div>
                </div>
                <div className="description">
                  Infinite Dodos is a complete ecosystem starting with an
                  Unhackable wallet. UTILITY READY AT MINT team spent 7 months
                  building before announcing the collection consisting of world
                  class entrepreneurs all Doxxed.
                </div>
                {Dodoticketowned ? (
                  <button className="server">
                    <a
                      className="servertxt"
                      target="_blank"
                      href="https://discord.com/channels/893470863876300830/893476471157436436/902961581661503608"
                    >
                      open a ticket in the server
                    </a>
                  </button>
                ) : (
                  <></>
                )}
                {Dodoticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : Dodopending ? (
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
                ) : ROOTxBalance >= DodoburnROOTx ? (
                  <button
                    onClick={() => burnROOTx(DodoburnROOTx, "Dodo")}
                  >
                    Get Whitelist Spot
                  </button>
                ) : Dodoticketamount >= 3 ? (
                  <button>SOLD OUT</button>
                ) : (
                  <button>Not Enough ROOTx</button>
                )}
              </div>
            </div>
          </Col> */}
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
      <Modal visible={showSettingModal} width="450px" height="300px" effect="fadeInUp">
        <p
          style={{
            color: "#fd7e14",
            textAlign: "center",
            marginTop: "10%",
            fontFamily: "earlyGameboy",
          }}
        >
          Input Discord Id to purchase WL Spot!
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
              <input type="text" id="discord" value={disId} onChange={(e) => setdisId(e.target.value)}/>
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
              <input type="text" id="wallet" value={Addr} onChange={(e) => setAddr(e.target.value)} />
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
        <button
          style={{
            fontSize: "12px",
            padding: "7px 13px",
            backgroundColor: "#fdd803",
            color: "black",
            borderRadius: "50px",
            fontFamily: "earlyGameBoy",
            cursor: "pointer",
            border: "0px",
            marginLeft: "35%",
            marginTop: "3%"
          }}
          onClick={()=>savesheet(disId, Addr, ProName)}
        >
          PURCHASE
        </button>
      </Modal>
    </div>
  );
};

export default LoadCard;
