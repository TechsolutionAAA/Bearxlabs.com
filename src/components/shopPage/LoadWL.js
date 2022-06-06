import React, { useEffect, useState } from "react";
import axios from "axios";

const LoadWL = () => {
  const [WLData, setWLData] = useState([]);

  useEffect(() => {
    getWhitelistData();
  }, []);

  const getWhitelistData = async () => {
    await axios
      .get("https://sheet.best/api/sheets/e2580e2b-cc24-4aa0-86bf-39d52659b2d8")
      .then((res) => {
        console.log(res.data);
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
            <tr key={item.Account}>
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
