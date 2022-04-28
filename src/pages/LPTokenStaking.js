import React from 'react'
import Banner from '../components/Banner'
import LPStakingComponent from '../components/token/LPStakingComponent'

function LPTokenStaking() {
  return (
    <>
        <Banner title="LP Staking" />
        {/* <div className="about__details">
        <p style={{ color: "yellow", fontSize: "50px" }}>COMING SOON</p>
      </div> */}
        <LPStakingComponent />
    </>
  )
}

export default LPTokenStaking