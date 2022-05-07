import React from "react";
import Banner from "../components/Banner";
import LoadWL from "../components/shopPage/LoadWL";

function Whitelist() {
  return (
    <>
      <Banner title="Check Whitelist" />
      {/* <div className="about__details">
        <p style={{ color: "yellow", fontSize: "50px" }}>COMING SOON</p>
      </div> */}
      <LoadWL />
    </>
  );
}

export default Whitelist;
