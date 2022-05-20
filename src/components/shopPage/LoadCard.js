import React, { useEffect, useState } from "react";
import { Contract, ethers } from "ethers";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import Modal from "react-awesome-modal";
import Swal from "sweetalert2";
import contract from "../../config/contract";
import ROOTxABI from "../../config/rootABI.json";
import loading from "../../assets/images/loading.gif";
import { Col, Container, Row, Image } from "react-bootstrap";

import souka from "../../assets/images/Items/souka.jpg";
import { piDiscord, piTwitter } from "../../assets/images/icons";
import flick from "../../assets/images/Items/flick.jpg";
import nood from "../../assets/images/Items/nood.jpg";
import wizard from "../../assets/images/Items/wizard.jpg";
import Dodo from "../../assets/images/Items/Dodo.jpg";
import moonwalker from "../../assets/images/Items/moonwalker.jpg";
import chunk from "../../assets/images/Items/chunk.jpg";
import alfie from "../../assets/images/Items/alfieworld.jpg";
import chosen from "../../assets/images/Items/chosenones.jpg";
import maze from "../../assets/images/Items/Maze.jpg";
import paladin from "../../assets/images/Items/Paladin.jpg";
import ready from "../../assets/images/Items/Ready.jpg";
import Sleepy from "../../assets/images/Items/Sleepy.jpg";
import Mythical from "../../assets/images/Items/Mythical.jpg";
import nono from "../../assets/images/Items/nono.png";

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
  const [soukaburnROOTx, setburnROOTx] = useState(2500);
  const [soukaticketamount, setsoukaticketamount] = useState(0);
  const [soukaticketowned, setsoukaticketowned] = useState(false);
  const [soukapending, setsoukapending] = useState(false);

  // flick Ticket Info
  const [flickburnROOTx, setflickburnROOTx] = useState(2500);
  const [flickticketamount, setflickticketamount] = useState(0);
  const [flickticketowned, setflickticketowned] = useState(false);
  const [flickpending, setflickpending] = useState(false);

  // NOOD Ticket Info
  const [noodburnROOTx, setnoodburnROOTx] = useState(2500);
  const [noodticketamount, setnoodticketamount] = useState(0);
  const [noodticketowned, setnoodticketowned] = useState(false);
  const [noodpending, setnooedpending] = useState(false);

  // wizardgladiators Ticket Info
  const [wizardburnROOTx, setwizardburnROOTx] = useState(2500);
  const [wizardticketamount, setwizardticketamount] = useState(0);
  const [wizardticketowned, setwizardticketowned] = useState(false);
  const [wizardpending, setwizardpending] = useState(false);

  // Dodo wizardgods Ticket Info
  const [DodoburnROOTx, setDodoburnROOTx] = useState(6000);
  const [Dodoticketamount, setDodoticketamount] = useState(0);
  const [Dodoticketowned, setDodoticketowned] = useState(false);
  const [Dodopending, setDodopending] = useState(false);

  // moonwalker wizardgods Ticket Info
  const [moonburnROOTx, setmoonburnROOTx] = useState(2500);
  const [moonticketamount, setmoonticketamount] = useState(0);
  const [moonticketowned, setmoonticketowned] = useState(false);
  const [moonpending, setmoonpending] = useState(false);

  // chunk wizardgods Ticket Info
  const [chunkburnROOTx, setchunkburnROOTx] = useState(2500);
  const [chunkticketamount, setchunkticketamount] = useState(0);
  const [chunkticketowned, setchunkticketowned] = useState(false);
  const [chunkpending, setchunkpending] = useState(false);

  // Alfie wizardgods Ticket Info
  const [alfieburnROOTx, setalfieburnROOTx] = useState(2500);
  const [alfieticketamount, setalfieticketamount] = useState(0);
  const [alfieticketowned, setalfieticketowned] = useState(false);
  const [alfiepending, setalfiepending] = useState(false);

  // Chosen wizardgods Ticket Info
  const [chosenburnROOTx, setchosenburnROOTx] = useState(2500);
  const [chosenticketamount, setchosenticketamount] = useState(0);
  const [chosenticketowned, setchosenticketowned] = useState(false);
  const [chosenpending, setchosenpending] = useState(false);

  // Maze wizardgods Ticket Info
  const [mazeburnROOTx, setmazeburnROOTx] = useState(2500);
  const [mazeticketamount, setmazeticketamount] = useState(0);
  const [mazeticketowned, setmazeticketowned] = useState(false);
  const [mazepending, setmazepending] = useState(false);

  // Mythical wizardgods Ticket Info
  const [MythicalburnROOTx, setMythicalburnROOTx] = useState(2000);
  const [Mythicalticketamount, setMythicalticketamount] = useState(0);
  const [Mythicalticketowned, setMythicalticketowned] = useState(false);
  const [Mythicalpending, setMythicalpending] = useState(false);

  // ready wizardgods Ticket Info
  const [readyburnROOTx, setreadyburnROOTx] = useState(2000);
  const [readyticketamount, setreadyticketamount] = useState(0);
  const [readyticketowned, setreadyticketowned] = useState(false);
  const [readypending, setreadypending] = useState(false);

  // paladin wizardgods Ticket Info
  const [paladinburnROOTx, setpaladinburnROOTx] = useState(2000);
  const [paladinticketamount, setpaladinticketamount] = useState(0);
  const [paladinticketowned, setpaladinticketowned] = useState(false);
  const [paladinpending, setpaladinpending] = useState(false);

  // Sleepy wizardgods Ticket Info
  const [SleepyburnROOTx, setSleepyburnROOTx] = useState(2000);
  const [Sleepyticketamount, setSleepyticketamount] = useState(0);
  const [Sleepyticketowned, setSleepyticketowned] = useState(false);
  const [Sleepypending, setSleepypending] = useState(false);

  // nono Ticket Info
  const [nonoburnROOTx, setnonoburnROOTx] = useState(2000);
  const [nonoticketamount, setnonoticketamount] = useState(0);
  const [nonoticketowned, setnonoticketowned] = useState(false);
  const [nonopending, setnonopending] = useState(false);

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
      .get("https://sheet.best/api/sheets/e2580e2b-cc24-4aa0-86bf-39d52659b2d8")
      .then((res) => {
        var soukacount = 0;
        var flickcount = 0;
        var noodcount = 0;
        var wizardcount = 0;
        var Dodocount = 0;
        var Mooncount = 0;
        var chunkcount = 0;
        var alfiecount = 0;
        var chosencount = 0;
        var mazecount = 0;
        var Mythicalcount = 0;
        var readycount = 0;
        var paladincount = 0;
        var Sleepycount = 0;
        var nonocount = 0;
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].Project === "souka") {
            soukacount++;
            if (res.data[i].Account === myAccount[0]) {
              setsoukaticketowned(true);
            }
          } else if (res.data[i].Project === "flick") {
            flickcount++;
            if (res.data[i].Account === myAccount[0]) {
              setflickticketowned(true);
            }
          } else if (res.data[i].Project === "nood") {
            noodcount++;
            if (res.data[i].Account === myAccount[0]) {
              setnoodticketowned(true);
            }
          } else if (res.data[i].Project === "wizard") {
            wizardcount++;
            if (res.data[i].Account === myAccount[0]) {
              setwizardticketowned(true);
            }
          } else if (res.data[i].Project === "Dodo") {
            Dodocount++;
            if (res.data[i].Account === myAccount[0]) {
              setDodoticketowned(true);
            }
          } else if (res.data[i].Project === "Moon") {
            Mooncount++;
            if (res.data[i].Account === myAccount[0]) {
              setmoonticketowned(true);
            }
          } else if (res.data[i].Project === "Chunk") {
            chunkcount++;
            if (res.data[i].Account === myAccount[0]) {
              setchunkticketowned(true);
            }
          } else if (res.data[i].Project === "Alfie") {
            alfiecount++;
            if (res.data[i].Account === myAccount[0]) {
              setalfieticketowned(true);
            }
          } else if (res.data[i].Project === "Chosen") {
            chosencount++;
            if (res.data[i].Account === myAccount[0]) {
              setchosenticketowned(true);
            }
          } else if (res.data[i].Project === "Maze") {
            mazecount++;
            if (res.data[i].Account === myAccount[0]) {
              setmazeticketowned(true);
            }
          } else if (res.data[i].Project === "Mythical") {
            Mythicalcount++;
            if (res.data[i].Account === myAccount[0]) {
              setMythicalticketowned(true);
            }
          } else if (res.data[i].Project === "ready") {
            readycount++;
            if (res.data[i].Account === myAccount[0]) {
              setreadyticketowned(true);
            }
          } else if (res.data[i].Project === "paladin") {
            paladincount++;
            if (res.data[i].Account === myAccount[0]) {
              setpaladinticketowned(true);
            }
          } else if (res.data[i].Project === "Sleepy") {
            Sleepycount++;
            if (res.data[i].Account === myAccount[0]) {
              setSleepyticketowned(true);
            }
          } else if (res.data[i].Project === "nono") {
            nonocount++;
            if (res.data[i].Account === myAccount[0]) {
              setnonoticketowned(true);
            }
          }
        }
        setsoukaticketamount(soukacount);
        setflickticketamount(flickcount);
        setnoodticketamount(noodcount);
        setwizardticketamount(wizardcount);
        setDodoticketamount(Dodocount);
        setmoonticketamount(Mooncount);
        setchunkticketamount(chunkcount);
        setalfieticketamount(alfiecount);
        setchosenticketamount(chosencount);
        setmazeticketamount(mazecount);
        setMythicalticketamount(Mythicalcount);
        setreadyticketamount(readycount);
        setpaladinticketamount(paladincount);
        setSleepyticketamount(Sleepycount);
        setnonoticketamount(nonocount);
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
            contract.ROOTx[1],
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
          } else if (item === "wizard") {
            setProName(item);
            setAddr(myAccount[0]);
            setwizardpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setwizardpending(false);
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
              setwizardpending(false);
              setShowModal(false);
            }
          } else if (item === "Dodo") {
            setProName(item);
            setAddr(myAccount[0]);
            setDodopending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setDodopending(false);
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
              setDodopending(false);
              setShowModal(false);
            }
          } else if (item === "Moon") {
            setProName(item);
            setAddr(myAccount[0]);
            setmoonpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setmoonpending(false);
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
              setmoonpending(false);
              setShowModal(false);
            }
          } else if (item === "Chunk") {
            setProName(item);
            setAddr(myAccount[0]);
            setchunkpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setchunkpending(false);
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
              setchunkpending(false);
              setShowModal(false);
            }
          } else if (item === "Alfie") {
            setProName(item);
            setAddr(myAccount[0]);
            setalfiepending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setalfiepending(false);
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
              setalfiepending(false);
              setShowModal(false);
            }
          } else if (item === "Chosen") {
            setProName(item);
            setAddr(myAccount[0]);
            setchosenpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setchosenpending(false);
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
              setchosenpending(false);
              setShowModal(false);
            }
          } else if (item === "Maze") {
            setProName(item);
            setAddr(myAccount[0]);
            setmazepending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setmazepending(false);
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
              setmazepending(false);
              setShowModal(false);
            }
          } else if (item === "Mythical") {
            setProName(item);
            setAddr(myAccount[0]);
            setMythicalpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setMythicalpending(false);
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
              setMythicalpending(false);
              setShowModal(false);
            }
          } else if (item === "ready") {
            setProName(item);
            setAddr(myAccount[0]);
            setreadypending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setreadypending(false);
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
              setreadypending(false);
              setShowModal(false);
            }
          } else if (item === "paladin") {
            setProName(item);
            setAddr(myAccount[0]);
            setpaladinpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setpaladinpending(false);
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
              setpaladinpending(false);
              setShowModal(false);
            }
          } else if (item === "Sleepy") {
            setProName(item);
            setAddr(myAccount[0]);
            setSleepypending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setSleepypending(false);
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
              setSleepypending(false);
              setShowModal(false);
            }
          } else if (item === "nono") {
            setProName(item);
            setAddr(myAccount[0]);
            setnonopending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setnonopending(false);
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
              setnonopending(false);
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
        "https://sheet.best/api/sheets/e2580e2b-cc24-4aa0-86bf-39d52659b2d8",
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
                    <button style={{ marginBottom: "10px" }}>SOUKA</button>
                    <span>{soukaburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {soukaticketamount} / 3 FILLED
                    </span>
                  </div>
                </div>
                <div className="description">
                  What is Souka? <br />
                  The Souk is the largest covered historic market in the NFT
                  world, based on IRL bazaar in the medieval times.
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/soukaland"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/souka"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
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
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= soukaburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(soukaburnROOTx, "souka")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
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
                    <button style={{ marginBottom: "10px" }}>flick play</button>
                    <span>{flickburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {flickticketamount} / 3 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  What is FlickyGang?<br></br> Flickygang NFT is a collection of
                  5,555 Unique 3D characters living in the Ethereum blockchain.
                  Investors from : The Sandbox, Warner Brothers, EventBrite,
                  Muse capital Each Flicky has a life of its own, and their
                  fashion taste highlights their personality and lifestyle. The
                  first-ever AR-powered NFT collection on the fully built &
                  functional app FlickPlay. FlickPlay is a social app where
                  people build the social status of their Digital Collectibles.
                  FlickPlay's map allows for users to unlock digital
                  collectibles in the real world and FlickPlay camera allows
                  users to flex their collectibles in the real world using AR,
                  bridging people's digital and physical realities together Team
                  is fully doxxed and just announced a partnership with Sandbox.
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/flickplay"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="http://discord.gg/flickplay"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
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
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= flickburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(flickburnROOTx, "flick")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
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
                    <button style={{ marginBottom: "10px" }}>NoodFTX</button>
                    <span>{noodburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {noodticketamount} / 3 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  Nood Fungible Token is an NFT project that aims to promote
                  body positivity, equality, and freedom within the NFT
                  community..This project will consist of 4444 unique Noodies
                  separated into 4 different drops in line with different
                  advocacies. Each drop from all collections is sure to be
                  unique and have their own flair. The ultimate goal of Nood
                  Fungible Tokens is to fully realize the potential of NFTs and
                  crypto in shaping our world to be a more safe and inclusive
                  space for all.
                </div>

                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/NoodFTOfficial"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                </div>
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
                ) : noodticketamount >= 3 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= noodburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(noodburnROOTx, "nood")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
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
                    marginLeft: "25%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>
                      Mystical wizards guild
                    </button>
                    <span>{wizardburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {wizardticketamount} / 3 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  Mystical Wizard Guild is the NFT behind the MysticSwap
                  platform, a peer-to-peer NFT trading platform for secure
                  trades and swaps. Example: you wanna sell your BearX to a
                  fren, privately. This is how you do it. Holders of the
                  Mystical Wizard NFT benefit from platform revenue, pay no fees
                  on the platform and gain access to an exclusive alpha group!
                  Twitter template below, to make your life easier too
                </div>{" "}
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/MystWizardGuild"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/vxmnE2v624"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
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
                ) : wizardticketamount >= 3 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= wizardburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(wizardburnROOTx, "wizard")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
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
                    <button style={{ marginBottom: "10px" }}>The Dodos</button>
                    <span>{DodoburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {Dodoticketamount} / 3 FILLED
                    </span>
                  </div>
                </div>
                <div className="description">
                  Infinite Dodos is a complete ecosystem starting with an
                  Unhackable wallet. UTILITY READY AT MINT team spent 7 months
                  building before announcing the collection consisting of world
                  class entrepreneurs all Doxxed. Being apart of our Infinite
                  Dodos will enable you to be apart of all future and current
                  utility
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/InfiniteDodos"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/PhjW7PUdvm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
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
                ) : Dodoticketamount >= 3 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= DodoburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(DodoburnROOTx, "Dodo")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={chunk} alt="shop images" fluid />
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
                    <button style={{ marginBottom: "10px" }}>Chunk</button>
                    <span>{chunkburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {chunkticketamount} / 10 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  Chunk is a world that's been divided into 128x128 block
                  Chunks, and uses Stardust Labs' Terralith for custom world
                  generation. By owning a Chunk NFT, you own a corresponding
                  piece of this world that only you and your friends will be
                  able to develop. Your chunk will be playable on a Minecraft
                  server where you can survive, build, and thrive as a
                  community. Being limited to only the resources in your chunk,
                  you’ll need to trade with your fellow owners to achieve your
                  goals.
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/nft_chunk"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/QdP4fRjeHp"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {chunkticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : chunkpending ? (
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
                ) : chunkticketamount >= 10 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= chunkburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(chunkburnROOTx, "Chunk")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={alfie} alt="shop images" fluid />
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
                    <button style={{ marginBottom: "10px" }}>
                      Alfie World
                    </button>
                    <span>{alfieburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {alfieticketamount} / 3 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  The joyful and colorful Alfie World and its 8888 frens.
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/THEALFIEWORLD"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                </div>

                {alfieticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : alfiepending ? (
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
                ) : alfieticketamount >= 3 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= alfieburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(alfieburnROOTx, "Alfie")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={chosen} alt="shop images" fluid />
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
                    <button style={{ marginBottom: "10px" }}>Chosenone</button>
                    <span>{chosenburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {chosenticketamount} / 2 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  5,555 Legendary Heroes with Graphics that will blow you away
                  for their upcoming 4v4 MOBA game. The collection will consist
                  of five characters and 1,111 in total. Presale May 31, 2022.
                  Fully doxxed team with a publicly traded company Good Gamer
                  developing the Game. Rest of the team from Electronic Arts,
                  Disney, Mechwarrior, Good Gamer, Infinity Esports and Mobilum.
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/chosenonesnft"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                </div>
                {chosenticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : chosenpending ? (
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
                ) : chosenticketamount >= 2 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= chosenburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(chosenburnROOTx, "Chosen")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={maze} alt="shop images" fluid />
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
                    <button style={{ marginBottom: "10px" }}>MazeVerse</button>
                    <span>{mazeburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {mazeticketamount} / 3 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  Pass to YesYes DAO | OnChain P2E | Discord: Private | From
                  Game: 赛尔号 | All Rights Reserved & Licensed By 淘米 Taomee
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/Mazeversenft"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/vkWdd2wUeP"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {mazeticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : mazepending ? (
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
                ) : mazeticketamount >= 3 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= mazeburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(mazeburnROOTx, "Maze")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={Mythical} alt="shop images" fluid />
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
                    <button style={{ marginBottom: "10px" }}>Mythicals</button>
                    <span>
                      {MythicalburnROOTx.toLocaleString("en-US")} ROOTx
                    </span>
                    <span style={{ marginTop: "10px" }}>
                      {Mythicalticketamount} / 25 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  First Liquid Yield NFT. We airdrop $ETH to you every month.
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/MythicalsDrops"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/mythicals"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {Mythicalticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : Mythicalpending ? (
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
                ) : Mythicalticketamount >= 25 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= MythicalburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(MythicalburnROOTx, "Mythical")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={ready} alt="shop images" fluid />
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
                    marginLeft: "32%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>
                      Player One world{" "}
                    </button>
                    <span>{readyburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {readyticketamount} / 3 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  #PlayerOne is a #Metaverse project with integrating tools,
                  social scenes, #Omnichain NFT marketplace and #P2E system.
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/PlayerOneWorld"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/playeroneworld"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {readyticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : readypending ? (
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
                ) : readyticketamount >= 3 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= readyburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(readyburnROOTx, "ready")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={paladin} alt="shop images" fluid />
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
                    marginLeft: "24%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>
                      PALADIN PENGUIN CLUB
                    </button>
                    <span>
                      {paladinburnROOTx.toLocaleString("en-US")} ROOTx
                    </span>
                    <span style={{ marginTop: "10px" }}>
                      {paladinticketamount} / 10 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  Play-to-earn game! Exclusive access to our land via The
                  Sandbox!
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/paladin_penguin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/5KzvcMzCQG"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {paladinticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : paladinpending ? (
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
                ) : paladinticketamount >= 10 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= paladinburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(paladinburnROOTx, "paladin")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={Sleepy} alt="shop images" fluid />
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
                    marginLeft: "24%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>
                      SLEEPY SNIPER SOCIETY
                    </button>
                    <span>{SleepyburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {Sleepyticketamount} / 5 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  A suite of premium NFT trading tools - paired with a
                  competitive trading eco-system.
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/SleepySniperSoc"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/sleepysnipersociety"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {Sleepyticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : Sleepypending ? (
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
                ) : Sleepyticketamount >= 5 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= SleepyburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(SleepyburnROOTx, "Sleepy")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={nono} alt="shop images" fluid />
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
                    <button style={{ marginBottom: "10px" }}>NoNo</button>
                    <span>{SleepyburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {nonoticketamount} / 5 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  NoNo is an assistant robot from a game called SEER. The
                  project aims to keep its holders profitable in Web3 with
                  YesYes DAO, a place to learn about the techniques of
                  institutional trading in the NFT secondary market.Members will
                  be selected from the original minters to join one of the four
                  investment seasons of the DAO, where they will trade in real
                  time with the help of established traders!
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/NoNosNFT"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                </div>
                {nonoticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : nonopending ? (
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
                ) : nonoticketamount >= 5 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= nonoburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(nonoburnROOTx, "nono")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
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
        <div style={{ display: "flex", justifyContent: "center" }}>
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
