import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../components/Banner";
import { ethers } from "ethers";
const ROOTxLeaderboard = () => {
  const [Snapshot, setSnapshot] = useState([]);
  const [myscore, setmyscore] = useState(0);
  const [myrank, setmyrank] = useState(0);
  const [myAccount, setMyAccount] = useState([]);
  const [MyWeb3, setMyWeb3] = useState([]);

  useEffect(() => {
    if (window.web3 !== undefined && window.ethereum) {
      loadWeb3();
    }
  }, []);

  useEffect(() => {
    getWhitelistData();
    getMyinfo();
  });

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

  const getWhitelistData = async () => {
    await axios
      .get("https://sheet.best/api/sheets/0a8cf6e2-8534-44cd-b2bd-e8b8907438ca")
      .then((res) => {
        setSnapshot(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getMyinfo = () => {
    if (Snapshot.length !== 0) {
      for (var i = 0; i < Snapshot.length; i++) {
        if (
          Snapshot[i].HolderAddress.toLowerCase() == myAccount[0].toLowerCase()
        ) {
          setmyrank(Snapshot[i].Rank);
          setmyscore((Snapshot[i].Balance / 100).toFixed(2));
        }
      }
    }
  };

  const myFunction = () => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };

  return (
    <>
      <Banner title="ROOTx Leaderboard" />
      <div id="myinfo">
        <span>
          My Rank: <strong>{myrank}</strong>
        </span>
        &nbsp;&nbsp;&nbsp;
        <span>
          My Score: <strong>{myscore}</strong>
        </span>
      </div>
      <div className="tbl_container">
        <input
          type="text"
          id="myInput"
          onKeyUp={myFunction}
          placeholder="Search for Account.."
          title="Type in a Account"
        />
        <table id="myTable">
          <thead>
            <tr>
              <th>Rank</th>
              <th>HolderAddress</th>
              <th>Balance</th>
              <th>My Score</th>
            </tr>
          </thead>
          <tbody>
            {Snapshot.map((x) => (
              <tr key={x.Rank}>
                <td>{x.Rank}</td>
                <td>{x.HolderAddress}</td>
                <td>{x.Balance}</td>
                <td>{(x.Balance / 100).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ROOTxLeaderboard;
