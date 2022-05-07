import React, { useEffect, useState } from "react";
import axios from "axios";
const FilterableTable = require("react-filterable-table");

const LoadWL = () => {
  const [WLData, setWLData] = useState([]);

  useEffect(() => {
    getWhitelistData();
  }, []);

  const getWhitelistData = async () => {
    await axios
      .get("https://sheet.best/api/sheets/8ffde6e8-5d89-4fee-bc84-a588d5e0ba28")
      .then((res) => {
        setWLData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const myFunction = () => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      console.log(td)
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
            <th>Account</th>
            <th>Project</th>
          </tr>
        </thead>
        <tbody>
          {WLData.map((item) => (
            <tr key={item.id}>
              <td>
                {item.Account}
              </td>
              <td>{item.Project}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoadWL;
