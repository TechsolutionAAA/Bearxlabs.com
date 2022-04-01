import React from 'react';
import { Container, Image } from 'react-bootstrap';
import heroBear from './../../assets/images/ladingpage/bg/hero-bear.png';

function LandingHero() {
  
  return (
    <div className='heroWrapper'>
      <Container>
        <div className='hero__heading'>
          <h1>
            <span className='child'>bear</span>
            <span className='parent'>X</span>
            <span className='child'>Has</span>
          </h1>
          <h2>LANDED</h2>
          <p>bearX Labs is a community first, community led ecosystem - complete with multiple collections, dual tokens and partners.</p>
        </div>
        <div className='heroBear d-flex justify-content-center mt-5'>
          <Image src={heroBear} fluid/>
        </div>
      </Container>
    </div>
  )
}

export default LandingHero