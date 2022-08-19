import React from 'react';
import { Container, Image } from 'react-bootstrap';
import akeem from '../../assets/images/ladingpage/team/akeem.png';
import obelisxx from '../../assets/images/ladingpage/team/obelisxx.png';
import musto from '../../assets/images/ladingpage/team/musto.png';
import koki from '../../assets/images/ladingpage/team/koki.png';
import jaarth from '../../assets/images/ladingpage/team/jaarth.png';
import Koolz from '../../assets/images/ladingpage/team/4.png';
import Bainsy from '../../assets/images/ladingpage/team/6.png';
import Aymeezy from '../../assets/images/ladingpage/team/7.png';
import longed from '../../assets/images/ladingpage/team/longed.png';
import alex from '../../assets/images/ladingpage/team/alex.png';
import sava from '../../assets/images/ladingpage/team/sava.png';
import suedo from '../../assets/images/ladingpage/team/suedo.png';
import zoro from '../../assets/images/ladingpage/team/zoro.png';
import Kool_kid from '../../assets/images/ladingpage/team/Koolkid.jpeg';
import ZeRoxx from '../../assets/images/ladingpage/team/ZeRoxx.jpeg';

function Team() {
  return (
    <Container>
      <h2 className='sectionHeading text-center mt-5'>MEET OUR TEAM</h2>
      <div className='team d-flex flex-wrap justify-content-center'>
        <div className='team__card'>
          <Image src={akeem} />
          <h4 className='team__heading'>Akeem</h4>
          <h4 className='team__heading--sub'>Creator</h4>
        </div>
        <div className='team__card'>
          <Image src={obelisxx} />
          <h4 className='team__heading'>Obelisxx</h4>
          <h4 className='team__heading--sub'>Artist</h4>
        </div>
        <div className='team__card'>
          <Image src={musto} />
          <h4 className='team__heading'>Musto</h4>
          <h4 className='team__heading--sub'>Developer</h4>
        </div>
        <div className='team__card'>
          <Image src={koki} />
          <h4 className='team__heading'>Koki</h4>
          <h4 className='team__heading--sub'>Concept art</h4>
        </div>
        <div className='team__card'>
          <Image src={jaarth} />
          <h4 className='team__heading'>Jaarth</h4>
          <h4 className='team__heading--sub'>BearX Writer</h4>
        </div>
        <div className='team__card'>
          <Image src={ZeRoxx} style={{ borderRadius: "20px" }} />
          <h4 className='team__heading'>ZeRoxx</h4>
          <h4 className='team__heading--sub'>Head Mod</h4>
        </div>
        <div className='team__card'>
          <Image src={Bainsy} />
          <h4 className='team__heading'>Bainsy</h4>
          <h4 className='team__heading--sub'>Mod</h4>
        </div>
        <div className='team__card'>
          <Image src={Kool_kid} style={{ borderRadius: "20px" }} />
          <h4 className='team__heading'>0xkoolkid</h4>
          <h4 className='team__heading--sub'>Mod</h4>
        </div>
        <div className='team__card'>
          <Image src={zoro} />
          <h4 className='team__heading'>Zoro</h4>
          <h4 className='team__heading--sub'>Mod</h4>
        </div>
        <div className='team__card'>
          <Image src={longed} />
          <h4 className='team__heading'>Longed</h4>
          <h4 className='team__heading--sub'>Social</h4>
        </div>
        <div className='team__card'>
          <Image src={suedo} />
          <h4 className='team__heading'>Suedo</h4>
          <h4 className='team__heading--sub'>Design</h4>
        </div>
        <div className='team__card'>
          <Image src={alex} />
          <h4 className='team__heading'>Alex</h4>
          <h4 className='team__heading--sub'>Design</h4>
        </div>
        <div className='team__card'>
          <Image src={sava} />
          <h4 className='team__heading'>Sava</h4>
          <h4 className='team__heading--sub'>Developer</h4>
        </div>

        <h2 className='team__bottom--text'>+ An incredible extended team of others including extra marketers, moderators, co-devs, co-designers and more.</h2>
      </div>
    </Container>
  )
}

export default Team