import React from "react";
import Banner from "../components/Banner";
import LoadCard from "../components/shopPage/LoadCard";

function Shop() {
  return (
    <>
      <Banner title="MARKET STALL" />
      {/* <div className="about__details">
        <p style={{ color: "yellow", fontSize: "50px" }}>COMING SOON</p>
      </div> */}
      <LoadCard />
    </>
  );
}

export default Shop;
