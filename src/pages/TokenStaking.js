import React from "react";
import Banner from "../components/Banner";
import TokenStakingCompnent from "../components/token/TokenStakingCompnent";

function TokenStaking() {
  return (
    <>
      <Banner title="TokenStaking" />
{/* 
      <div className="about__details">
        <p style={{ color: "yellow", fontSize: "50px" }}>COMING SOON</p>
      </div> */}
      <TokenStakingCompnent />
    </>
  );
}

export default TokenStaking;
