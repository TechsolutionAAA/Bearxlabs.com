import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {faDiscord} from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import rootBanner from '../../assets/images/ladingpage/root-banner.png';
import rootBanner2 from '../../assets/images/ladingpage/root-banner-2.png';
function RootDetails() {
  return (
    <Container >
      <Row className='pt-5 pb-5 align-items-center'>
        <Col className="d-flex justify-content-lg-end justify-content-center" sm="12" lg="6">
          <Image src={rootBanner} fluid/>
        </Col>
        <Col sm="12" lg="6" className='rootdetails'>
          <h2 className='sectionHeading'>WHY SHOULD I BE EXCITED ABOUT BEARX?</h2>
          <div className='rootTextWrapper'>
            <div><FontAwesomeIcon icon={faCheckCircle} color="#FFAE41"/>
            <span>BearX is just getting started. Insane utility through our unique BEARWORLD experience, daily token rewards, weekly giveaways and original art, all created alongside, and for, the community.</span>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='pt-5 pb-5 align-items-center'>
        <Col sm="12" lg="6" className='rootdetails'>
        <h2 className='sectionHeading'>How to get started?</h2>
          <div className='rootTextWrapper'>
            <div>
            <FontAwesomeIcon icon={faCheckCircle} color="#FFAE41"/>
            <span>BearVX is almost upon us, check out the medium posts, collection page, socials and AMAs for what makes BEARVX so darn special. Are you ready?</span><br/>
            </div>
            <a href="https://discord.com/invite/bear-x" target="_blank" rel="noreferrer" className='iconButton'>
              <FontAwesomeIcon icon={faDiscord} color="#00000" size='2x'/>
              <span>Join Our Discord</span>
            </a>
          </div>
        </Col>
        <Col sm="12" lg="6" className='d-flex justify-content-lg-end justify-content-center'>
          <Image src={rootBanner2} fluid className='mt-5'/>
        </Col>
      </Row>
    </Container>
  )
}

export default RootDetails