import { Card, Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { avatar } from "../../assets/images";
import bearxabi from "../../config/BearXABI.json";
import stakingabi from "../../config/stakingABI.json";
import { ethers } from "ethers";
import contract from "../../config/contract";
import { BigNumber } from "@ethersproject/bignumber";
import { Contract } from "@ethersproject/contracts";

function BearXCard(props) {
  const {
    tokenId,
    staked,
    account,
    processed,
    clickable,
    clicked,
    disabled,
    loading,
    launchState,
    disLaunchState,
  } = props;
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [descript, setDescript] = useState("");
  const [MyWeb3, setMyWeb3] = useState([]);
  const [myAccount, setMyAccount] = useState([]);
  const [pending, setPending] = useState(false);

  const setLoading = (loading) => {
    sessionStorage.setItem("isLoading", loading);
  };
  const getLoading = () => {
    return sessionStorage.getItem("isLoading");
  };
  const isSpecial = (_id) => {
    if (_id >= 1000000000000 && _id <= 1000000000005) return true;
    return false;
  };

  useEffect(() => {
    if (window.web3 != undefined && window.ethereum) {
      loadWeb3();
    }
  }, []);

  useEffect(() => {
    if (MyWeb3.length !== 0) {
      bearxcardintitial();
    }
  }, [MyWeb3]);

  async function loadWeb3() {
    const web3 = await new ethers.providers.Web3Provider(window.ethereum);
    await web3
      .listAccounts()
      .then((acc) => {
        setMyWeb3(web3);
        setMyAccount(acc);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function bearxcardintitial() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const BearXcontract = await new Contract(
      contract.BearX[1],
      bearxabi,
      provider?.getSigner()
    );

    await BearXcontract.tokenURI(tokenId).then((r) => {
      axios.get(r.toString()).then((res) => {
        setName(res.data.name);
        setImage(res.data.image);
        setDescript(res.data.description);
      });
    });
  }

  const stake = useCallback(
    async (id, account) => {
      setPending(true);
      setLoading(true);
      launchState();
      console.log(account);

      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const stakingcontract = await new Contract(
          contract.BearXStaking[1],
          stakingabi,
          provider?.getSigner()
        );

        const ids = [];
        ids.push(id);
        console.log([ids]);
        const tx = await stakingcontract.createStake(ids, { from: account });
        await tx.wait();
        window.location.reload();
      } catch (err) {
        console.log(err);
        setPending(false);
        disLaunchState();
      }
    },
    [MyWeb3]
  );

  const unstake = useCallback(
    async (_ids, account) => {
      launchState();
      setLoading(true);
      setPending(true);
      const ids = [..._ids];
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const stakingcontract = await new Contract(
          contract.BearXStaking[1],
          stakingabi,
          provider?.getSigner()
        );

        const tx = await stakingcontract.unStake(ids, { from: account });
        await tx.wait();
        window.location.reload();

      } catch (err) {
        console.log(err);
        setPending(false);
        disLaunchState();
      }
    },
    [MyWeb3]
  );

  useEffect(() => {}, []);

  return (
    <Card
      className="bearx-card"
      style={{
        width: "30%",
        margin: "5px",
        display: "flex",
        backgroundColor: "#14181d",
        float: "left",
      }}
    >
      {staked ? (
        <div className="ribbon-wrapper">
          <div className="ribbon" style={{fontFamily:"earlyGameBoy", fontSize: "10px"}}>STAKED</div>
        </div>
      ) : isSpecial(tokenId) ? (
        <div className="ribbon-wrapper">
          <div className="ribbon">1/1</div>
        </div>
      ) : (
        <></>
      )}
      <Card.Img variant="top" className="w-100 img-fluid" src={image} onError={() => setImage(avatar)} />
      <Card.Body>
        <Card.Title className="card_font" style={{ color: "white", fontFamily:"earlyGameBoy", fontSize:"8px" }}>
          {name}
        </Card.Title>
        <div className="buttons">
          {staked ? (
            pending ? (
              <button
                type="button"
                className="button card_font"
                disabled={loading}
              >
                <Spinner
                  as="span"
                  variant="light"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  animation="border"
                  style = {{width:'12px', height:'12px'}}
                />
              </button>
            ) : (
              <button
                type="button"
                className="button card_font"
                onClick={() => {
                  unstake([tokenId], account);
                  //   clicked(true);
                }}
                disabled={loading}
                style={{fontFamily:"earlyGameBoy", fontSize:"8px"}}
              >
                Unstake
              </button>
            )
          ) : pending ? (
            <button
              type="button"
              className="button card_font card_fontsize_smaller"
              disabled={loading}
            >
              <Spinner
                as="span"
                variant="light"
                size="sm"
                role="status"
                aria-hidden="true"
                animation="border"
                style = {{width:'12px', height:'12px'}}
              />
            </button>
          ) : (
            <button
              type="button"
              className="button card_font card_fontsize_smaller"
              onClick={() => {
                stake(tokenId, account);
                // clicked(true);
              }}
              disabled={loading}
              style={{fontFamily:"earlyGameBoy"}}
            >
              Stake
            </button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default BearXCard;
