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
import avatar from "../../assets/images/Item.jpg";
import nood from "../../assets/images/Item.jpg";
import Fluffies from "../../assets/images/Item.jpg";
import Meta from "../../assets/images/Item.jpg";
import Elysium from "../../assets/images/Item.jpg";
import Espadra from "../../assets/images/Item.jpg";
import Immortal from "../../assets/images/Item.jpg";
import Samurai from "../../assets/images/Item.jpg";

const LoadCard = () => {
  const [MyWeb3, setMyWeb3] = useState([]);
  const [myAccount, setMyAccount] = useState([]);

  const [ROOTxBalance, setROOTxBalance] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // avatar Ticket Info
  const [avatarburnROOTx, setburnROOTx] = useState(25);
  const [avatarticketamount, setavatarticketamount] = useState(0);
  const [avatarticketowned, setavatarticketowned] = useState(false);
  const [avatarpending, setavatarpending] = useState(false);

  // NOOD Ticket Info
  const [noodburnROOTx, setnoodburnROOTx] = useState(25);
  const [noodticketamount, setnoodticketamount] = useState(0);
  const [noodticketowned, setnoodticketowned] = useState(false);
  const [noodpending, setnooedpending] = useState(false);

  // Fluffies Ticket Info
  const [fluffiesburnROOTx, setfluffiesburnROOTx] = useState(25);
  const [fluffiesticketamount, setfluffiesticketamount] = useState(0);
  const [fluffiesticketowned, setfluffiesticketowned] = useState(false);
  const [fluffiespending, setfluffiespending] = useState(false);

  // Metagladiators Ticket Info
  const [metaburnROOTx, setmetaburnROOTx] = useState(25);
  const [metaticketamount, setmetaticketamount] = useState(0);
  const [metaticketowned, setmetaticketowned] = useState(false);
  const [metapending, setmetapending] = useState(false);

  // Elysium Metagods Ticket Info
  const [elysiumburnROOTx, setelysiumburnROOTx] = useState(50);
  const [elysiumticketamount, setelysiumticketamount] = useState(0);
  const [elysiumticketowned, setelysiumticketowned] = useState(false);
  const [elysiumpending, setelysiumpending] = useState(false);

  // Espadra Ticket Info
  const [espadraburnROOTx, setespadraburnROOTx] = useState(25);
  const [espadraticketamount, setespadraticketamount] = useState(0);
  const [espadraticketowned, setespadraticketowned] = useState(false);
  const [espadrapending, setespadrapending] = useState(false);

  // Immortal Games 
  const [immortalburnROOTx, setimmortalburnROOTx] = useState(25);
  const [immortalticketamount, setimmortalticketamount] = useState(0);
  const [immortalticketowned, setimmortalticketowned] = useState(false);
  const [immortalpending, setimmortalpending] = useState(false);

  // Samurai Cats, le projet de Hiro Ando Ticket
  const [samuraiburnROOTx, setsamuraiburnROOTx] = useState(25);
  const [samuraiticketamount, setsamuraiticketamount] = useState(0);
  const [samuraiticketowned, setsamuraiticketowned] = useState(false);
  const [samuraipending, setsamuraipending] = useState(false);
  
  useEffect(() => {
    if (window.web3 !== undefined && window.ethereum) {
      loadWeb3();
    }
  }, []);

  useEffect(() => {
    if (MyWeb3.length !== 0) {
      getROOTxBalance();

      // AVART Ticket
      getavatarticketdata();
      getavatarowned();

      // NOOD Ticket
      getnoodticketdata();
      getnoodowned();

      // fluffie Ticket
      getfluffieticketdata();
      getfluffieowned();

      // Meta Ticket
      getmetaticketdata();
      getmetaticketowned();

      // Elysium Metagods Ticket
      getelysiumticketdata();
      getelysiumticketowned();

      // Espadra Ticket 
      getespadraticketdata();
      getespadraticketowned();

      // Immortal Game Ticket
      getimmortalticketdata();
      getimmortalticketowned();

      // Samurai Ticket
      getSamuraiTicketdata();
      getSamuraiTicketowned();
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
  
  // Avatar Ticket
  
  const getavatarticketdata = async () => {
    const expData = {
      item: "avatar",
    };
    axios
      .post("/v1/api/user/getticketdata", expData)
      .then((res) => {
        if (res.data >= 0) {
          setavatarticketamount(res.data);
        }
      })
      .catch((err) => console.log(err));
  };
  const getavatarowned = async () => {
    const expData = {
      item: "avatar",
      account: window.ethereum.selectedAddress,
    };
    axios
      .post("/v1/api/user/gettickeowned", expData)
      .then((res) => {
        if (res.data.result) {
          setavatarticketowned(true);
        }
      })
      .catch((err) => console.log(err));
  };

  // NOOD Ticket
  const getnoodticketdata = async () => {
    const expData = {
      item: "nood",
    };
    axios
      .post("/v1/api/user/getticketdata", expData)
      .then((res) => {
        if (res.data >= 0) {
          setnoodticketamount(res.data);
        }
      })
      .catch((err) => console.log(err));
  };
  const getnoodowned = async () => {
    const expData = {
      item: "nood",
      account: window.ethereum.selectedAddress,
    };
    axios
      .post("/v1/api/user/gettickeowned", expData)
      .then((res) => {
        if (res.data.result) {
          setnoodticketowned(true);
        }
      })
      .catch((err) => console.log(err));
  };

  // fluffie Ticket
  const getfluffieticketdata = async () => {
    const expData = {
      item: "fluffies",
    };
    axios
      .post("/v1/api/user/getticketdata", expData)
      .then((res) => {
        if (res.data >= 0) {
          setfluffiesticketamount(res.data);
        }
      })
      .catch((err) => console.log(err));
  };
  const getfluffieowned = async () => {
    const expData = {
      item: "fluffies",
      account: window.ethereum.selectedAddress,
    };
    axios
      .post("/v1/api/user/gettickeowned", expData)
      .then((res) => {
        if (res.data.result) {
          setfluffiesticketowned(true);
        }
      })
      .catch((err) => console.log(err));
  };

  // meta Ticket 
  const getmetaticketdata = async () => {
    const expData = {
      item: "meta",
    };
    axios
      .post("/v1/api/user/getticketdata", expData)
      .then((res) => {
        if (res.data >= 0) {
          setmetaticketamount(res.data);
        }
      })
      .catch((err) => console.log(err));
  };
  const getmetaticketowned = async () => {
    const expData = {
      item: "meta",
      account: window.ethereum.selectedAddress,
    };
    axios
      .post("/v1/api/user/gettickeowned", expData)
      .then((res) => {
        if (res.data.result) {
          setmetaticketowned(true);
        }
      })
      .catch((err) => console.log(err));
  };

  // Elysium Ticket
  const getelysiumticketdata = async () => {
    const expData = {
      item: "elysium",
    };
    axios
      .post("/v1/api/user/getticketdata", expData)
      .then((res) => {
        if (res.data >= 0) {
          setelysiumticketamount(res.data);
        }
      })
      .catch((err) => console.log(err));
  };
  const getelysiumticketowned = async () => {
    const expData = {
      item: "elysium",
      account: window.ethereum.selectedAddress,
    };
    axios
      .post("/v1/api/user/gettickeowned", expData)
      .then((res) => {
        if (res.data.result) {
          setelysiumticketowned(true);
        }
      })
      .catch((err) => console.log(err));
  };

  // Espadra Ticket
  const getespadraticketdata = async () => {
    const expData = {
      item: "espadra",
    };
    axios
      .post("/v1/api/user/getticketdata", expData)
      .then((res) => {
        if (res.data >= 0) {
          setespadraticketamount(res.data);
        }
      })
      .catch((err) => console.log(err));
  };
  const getespadraticketowned = async () => {
    const expData = {
      item: "espadra",
      account: window.ethereum.selectedAddress,
    };
    axios
      .post("/v1/api/user/gettickeowned", expData)
      .then((res) => {
        if (res.data.result) {
          setespadraticketowned(true);
        }
      })
      .catch((err) => console.log(err));
  };

  // Immortal Game Ticket
  const getimmortalticketdata = async () => {
    const expData = {
      item: "immortal",
    };
    axios
      .post("/v1/api/user/getticketdata", expData)
      .then((res) => {
        if (res.data >= 0) {
          setimmortalticketamount(res.data);
        }
      })
      .catch((err) => console.log(err));
  };
  const getimmortalticketowned = async () => {
    const expData = {
      item: "immortal",
      account: window.ethereum.selectedAddress,
    };
    axios
      .post("/v1/api/user/gettickeowned", expData)
      .then((res) => {
        if (res.data.result) {
          setimmortalticketowned(true);
        }
      })
      .catch((err) => console.log(err));
  };

  // Samurai Ticket
  const getSamuraiTicketdata = async () => {
    const expData = {
      item: "samurai",
    };
    axios
      .post("/v1/api/user/getticketdata", expData)
      .then((res) => {
        if (res.data >= 0) {
          setsamuraiticketamount(res.data);
        }
      })
      .catch((err) => console.log(err));
  };
  const getSamuraiTicketowned = async () => {
    const expData = {
      item: "samurai",
      account: window.ethereum.selectedAddress,
    };
    axios
      .post("/v1/api/user/gettickeowned", expData)
      .then((res) => {
        if (res.data.result) {
          setsamuraiticketowned(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const burnROOTx = async (amount, item) => {
    if (myAccount.length === 0) return;

    Swal.fire({
      icon: "question",
      title: "Confirm Burn ROOTx",
      text: `Burn ${amount} ROOTx token and get WL spot of avatar, continue ?`,
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

          if (item === "avatar") {
            setavatarpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              const expData = {
                item: "avatar",
                amount: Number(avatarticketamount) + 1,
              };
              await axios
                .post("/v1/api/user/setticketamount", expData)
                .then((res) => {
                  console.log("succecss");
                })
                .catch((err) => console.log(err));
              const expData1 = {
                item: "avatar",
                owner: window.ethereum.selectedAddress,
              };
              await axios
                .post("/v1/api/user/setticketowner", expData1)
                .then((res) => {
                  if (res.data.result) {
                    setavatarticketowned(true);
                    window.location.reload();
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setavatarpending(false);
              setShowModal(false);
            }
          } else if (item === "nood") {
            setnooedpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(ethers.utils.parseUnits(String(amount), 18), {from: myAccount[0]});
              await tx.wait();
              const expData = {
                item: "nood",
                amount: Number(noodticketamount) + 1,
              };
              await axios.post("/v1/api/user/setticketamount", expData).then((res) => {
                console.log("success");
              }).catch(err => console.log(err));
              const expData1 = {
                item: "nood",
                owner: window.ethereum.selectedAddress,
              };
              await axios.post("/v1/api/user/setticketowner", expData1).then((res) => {
                if(res.data.result) {
                  setnoodticketowned(true);
                  window.location.reload();
                }
              }).catch(err => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setnooedpending(false);
              setShowModal(false);
            }
          } else if (item === "fluffies") {
            setfluffiespending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(ethers.utils.parseUnits(String(amount), 18), {from: myAccount[0]});
              await tx.wait();
              const expData = {
                item: "fluffies",
                amount: Number(fluffiesticketamount) + 1,
              };
              await axios.post("/v1/api/user/setticketamount", expData).then((res) => {
                console.log("success");
              }).catch(err => console.log(err));
              const expData1 = {
                item: "fluffies",
                owner: window.ethereum.selectedAddress,
              };
              await axios.post("/v1/api/user/setticketowner", expData1).then((res) => {
                if(res.data.result) {
                  setfluffiesticketowned(true);
                  window.location.reload();
                }
              }).catch(err => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setfluffiespending(false);
              setShowModal(false);
            }
          } else if (item === "meta") {
            setmetapending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(ethers.utils.parseUnits(String(amount), 18), {from: myAccount[0]});
              await tx.wait();
              const expData = {
                item: "meta",
                amount: Number(metaticketamount) + 1,
              };
              await axios.post("/v1/api/user/setticketamount", expData).then((res) => {
                console.log("success");
              }).catch(err => console.log(err));
              const expData1 = {
                item: "meta",
                owner: window.ethereum.selectedAddress,
              };
              await axios.post("/v1/api/user/setticketowner", expData1).then((res) => {
                if(res.data.result) {
                  setmetaticketowned(true);
                  window.location.reload();
                }
              }).catch(err => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setmetapending(false);
              setShowModal(false);
            }
          } else if (item === "elysium") {
            setelysiumpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(ethers.utils.parseUnits(String(amount), 18), {from: myAccount[0]});
              await tx.wait();
              const expData = {
                item: "elysium",
                amount: Number(elysiumticketamount) + 1,
              };
              await axios.post("/v1/api/user/setticketamount", expData).then((res) => {
                console.log("success");
              }).catch(err => console.log(err));
              const expData1 = {
                item: "elysium",
                owner: window.ethereum.selectedAddress,
              };
              await axios.post("/v1/api/user/setticketowner", expData1).then((res) => {
                if(res.data.result) {
                  setelysiumticketowned(true);
                  window.location.reload();
                }
              }).catch(err => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setelysiumpending(false);
              setShowModal(false);
            }
          } else if (item === "espadra") {
            setespadrapending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(ethers.utils.parseUnits(String(amount), 18), {from: myAccount[0]});
              await tx.wait();
              const expData = {
                item: "espadra",
                amount: Number(espadraticketamount) + 1,
              };
              await axios.post("/v1/api/user/setticketamount", expData).then((res) => {
                console.log("success");
              }).catch(err => console.log(err));
              const expData1 = {
                item: "espadra",
                owner: window.ethereum.selectedAddress,
              };
              await axios.post("/v1/api/user/setticketowner", expData1).then((res) => {
                if(res.data.result) {
                  setespadraticketowned(true);
                  window.location.reload();
                }
              }).catch(err => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setespadrapending(false);
              setShowModal(false);
            }
          } else if (item === "immortal") {
            setimmortalpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(ethers.utils.parseUnits(String(amount), 18), {from: myAccount[0]});
              await tx.wait();
              const expData = {
                item: "immortal",
                amount: Number(immortalticketamount) + 1,
              };
              await axios.post("/v1/api/user/setticketamount", expData).then((res) => {
                console.log("success");
              }).catch(err => console.log(err));
              const expData1 = {
                item: "immortal",
                owner: window.ethereum.selectedAddress,
              };
              await axios.post("/v1/api/user/setticketowner", expData1).then((res) => {
                if(res.data.result) {
                  setimmortalticketowned(true);
                  window.location.reload();
                }
              }).catch(err => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setimmortalpending(false);
              setShowModal(false);
            }
          } else if (item === "samurai") {
            setsamuraipending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(ethers.utils.parseUnits(String(amount), 18), {from: myAccount[0]});
              await tx.wait();
              const expData = {
                item: "samurai",
                amount: Number(samuraiticketamount) + 1,
              };
              await axios.post("/v1/api/user/setticketamount", expData).then((res) => {
                console.log("success");
              }).catch(err => console.log(err));
              const expData1 = {
                item: "samurai",
                owner: window.ethereum.selectedAddress,
              };
              await axios.post("/v1/api/user/setticketowner", expData1).then((res) => {
                if(res.data.result) {
                  setsamuraiticketowned(true);
                  window.location.reload();
                }
              }).catch(err => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setsamuraipending(false);
              setShowModal(false);
            }
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
                  <Image src={avatar} alt="shop images" fluid />
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
                    <span>{avatarburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {avatarticketamount} / 10 FILLED
                    </span>
                  </div>
                </div>
                <div className="description">
                  Brainy #NFT avatars that give you membership access to 🍄
                  #Brainiacland a corner of the internet where speakers and
                  pioneers unite.
                </div>
                {avatarticketowned ? (
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
                {avatarticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : avatarpending ? (
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
                ) : ROOTxBalance >= avatarburnROOTx ? (
                  <button onClick={() => burnROOTx(avatarburnROOTx, "avatar")}>
                    Get Whitelist Spot
                  </button>
                ) : avatarticketamount >= 10 ? (
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
                      {noodticketamount} / 10 FILLED
                    </span>
                  </div>
                </div>
                <div className="description">
                  THIS IS NOOD NFT ITEM
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
                ) : noodticketamount >= 10 ? (
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
                  <Image src={Fluffies} alt="shop images" fluid />
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
                    <span>{fluffiesburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {fluffiesticketamount} / 10 FILLED
                    </span>
                  </div>
                </div>
                <div className="description">
                  THIS IS FLUFFIES NFT ITEM
                </div>
                {fluffiesticketowned ? (
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
                {fluffiesticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : fluffiespending ? (
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
                ) : ROOTxBalance >= fluffiesburnROOTx ? (
                  <button onClick={() => burnROOTx(fluffiesburnROOTx, "fluffies")}>
                    Get Whitelist Spot
                  </button>
                ) : fluffiesticketamount >= 10 ? (
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
                  <Image src={Meta} alt="shop images" fluid />
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
                    <span>{metaburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {metaticketamount} / 10 FILLED
                    </span>
                  </div>
                </div>
                <div className="description">
                  THIS IS METAGLADIATORS NFT ITEM
                </div>
                {metaticketowned ? (
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
                {metaticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : metapending ? (
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
                ) : ROOTxBalance >= metaburnROOTx ? (
                  <button onClick={() => burnROOTx(metaburnROOTx, "meta")}>
                    Get Whitelist Spot
                  </button>
                ) : metaticketamount >= 10 ? (
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
                  <Image src={Elysium} alt="shop images" fluid />
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
                    <span>{elysiumburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {elysiumticketamount} / 10 FILLED
                    </span>
                  </div>
                </div>
                <div className="description">
                  THIS IS ELYSIUM NFT ITEM
                </div>
                {elysiumticketowned ? (
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
                {elysiumticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : elysiumpending ? (
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
                ) : ROOTxBalance >= elysiumburnROOTx ? (
                  <button onClick={() => burnROOTx(elysiumburnROOTx, "elysium")}>
                    Get Whitelist Spot
                  </button>
                ) : elysiumticketamount >= 10 ? (
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
                  <Image src={Espadra} alt="shop images" fluid />
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
                    <span>{espadraburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {espadraticketamount} / 10 FILLED
                    </span>
                  </div>
                </div>
                <div className="description">
                  THIS IS ESPADRA NFT ITEM
                </div>
                {espadraticketowned ? (
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
                {espadraticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : espadrapending ? (
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
                ) : ROOTxBalance >= espadraburnROOTx ? (
                  <button onClick={() => burnROOTx(espadraburnROOTx, "espadra")}>
                    Get Whitelist Spot
                  </button>
                ) : espadraticketamount >= 10 ? (
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
                  <Image src={Immortal} alt="shop images" fluid />
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
                    <span>{immortalburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {immortalticketamount} / 10 FILLED
                    </span>
                  </div>
                </div>
                <div className="description">
                  THIS IS IMMORTAL GAME NFT ITEM
                </div>
                {immortalticketowned ? (
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
                {immortalticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : immortalpending ? (
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
                ) : ROOTxBalance >= immortalburnROOTx ? (
                  <button onClick={() => burnROOTx(immortalburnROOTx, "immortal")}>
                    Get Whitelist Spot
                  </button>
                ) : immortalticketamount >= 10 ? (
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
                  <Image src={Samurai} alt="shop images" fluid />
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
                    <span>{samuraiburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {samuraiticketamount} / 10 FILLED
                    </span>
                  </div>
                </div>
                <div className="description">
                  THIS IS Samurai GAME NFT ITEM
                </div>
                {samuraiticketowned ? (
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
                {samuraiticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : samuraipending ? (
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
                ) : ROOTxBalance >= samuraiburnROOTx ? (
                  <button onClick={() => burnROOTx(samuraiburnROOTx, "samurai")}>
                    Get Whitelist Spot
                  </button>
                ) : samuraiticketamount >= 10 ? (
                  <button>SOLD OUT</button>
                ) : (
                  <button>Not Enough ROOTx</button>
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
    </div>
  );
};

export default LoadCard;
