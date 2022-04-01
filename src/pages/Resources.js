import React from 'react';
import Banner from '../components/Banner';
import Community from '../components/resources/Community';
import Explore from '../components/resources/Explore';
import SocialSection from '../components/resources/SocialSection';

function Resources() {
  return (
    <>
    <Banner title="Resources"/>
    <Explore />
    <Community />
    <SocialSection />
  </>
  )
}

export default Resources