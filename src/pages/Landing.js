import React from 'react';
import LandingHero from '../components/heros/LandingHero';
import LaunchDetails from '../components/landingpage/LaunchDetails';
import BearsCard from '../components/landingpage/BearsCard';
import RootDetails from '../components/landingpage/RootDetails';
import Faq from '../components/landingpage/Faq';
import Team from '../components/landingpage/Team';
import Partner from '../components/landingpage/Partner';
import SocialSection from '../components/resources/SocialSection';

function Landing() {
  return (
    <div>
        <LandingHero />
        <LaunchDetails />
        <BearsCard />
        <RootDetails />
        <Faq title="FAQ"/>
        <Team />
        <Partner/>
        <SocialSection />
    </div>
  )
}

export default Landing