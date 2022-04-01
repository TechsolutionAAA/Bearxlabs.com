import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import yellow from '../../assets/images/about/card/1.png';
import red from '../../assets/images/about/card/2.png';
import purple from '../../assets/images/about/card/3.png';
import sectionImage1 from '../../assets/images/about/section-img1.png';
import {piDiscord, piTwitter} from '../../assets/images/icons';
import { useNavigate } from 'react-router-dom';

function AboutDetails() {
  let navigator = useNavigate();
  const buttonhandler = (e) => {

    navigator(e);
  }


  return (
    <Container>
      <Row>
        <Col>
        <div className='about__details'>
            <p>The core part of the BEARWORLD ecosystem and BearX Labs stake in the metaverse is the bearVXs. Below we have highlighted some of the cool, unique features of the bears, and why you should get super excited.</p>
        </div>
        </Col>
      </Row>
        <Row className='my-5 pt-5 align-items-center'>
          <Col className='' lg="6">
            <p className='sectionDetailsText'>BEARWORLD will be exciting not only to bears, but to all NFT holders who interact with this ecosystem. So how do you get ready for it? Below has some tips.</p>
          </Col>
          <Col lg="6">
            <Image src={sectionImage1} fluid/>
          </Col>
        </Row>
        <div className='about__details'>
          <h2 className='sectionHeading text-center'>GETTING READY FOR BEARWORLD</h2>
        </div>
      
        <Row className="bearsCardWrapper">
          <Col>
            <div className='bearCard my-sm-3 my-md-3' style={{
              maxWidth: '350px',
              backgroundColor:'rgba(103, 62, 139, 0.1)',
              border:'0px',justifyContent:'space-between'}}>
              <div>
                <Image src={yellow}/>
                <Row className='align-items-center mt-3'>
                  <Col sm="8" md="8" lg="8">
                    <h3 className='cardHeading'>Step 1</h3>
                  </Col>
                </Row>
                <p className='cardDetails'>Be part of our community, and read up on all of our socials, alongside the articles too. </p>
                <div className='specialText'>Want to know more about BEARWORLD before the rollout? </div>
              </div>
              
            {/* read more button */}
                <a href="https://bearxnft.medium.com/bearx-roadmap-2-0-%EF%B8%8F-19baf283e02f" target="_blank" rel="noreferrer" className="button">
                  <div className='buttonText'>READ</div>
                </a>
            </div>
            
          </Col>
          <Col>
            <div className='bearCard my-sm-3 my-md-3' style={{
              maxWidth: '350px',
              backgroundColor:'rgba(103, 62, 139, 0.1)',
              border:'0px',justifyContent:'space-between'}}>
              <div>
                <Image src={red}/>
                <Row className='align-items-center mt-3'>
                  <Col sm="8" md="8" lg="8">
                    <h3 className='cardHeading'>Step 2</h3>
                  </Col>
                </Row>
                <p className='cardDetails'>Collect all of the important assets needed it to ensure you are gmi in BEARWORLD. This includes tokens, accessories the full set of Bears and knowledge (because thats important ser)</p>
              </div>
              <div className='socialIconWraper mt-5 d-flex justify-content-center'>
                <div className='socialIcon'>
                  <a href="https://twitter.com/Koki_NFT" target="_blank" rel="noreferrer">
                    <Image src={piTwitter}/>
                  </a>
                </div>
                <div className='socialIcon ms-5'>
                  <a href="https://discord.com/invite/bear-x" target="_blank" rel="noreferrer">
                  <Image src={piDiscord}/>
                  </a>
                </div>
              </div>  
            
              <button>STORE COMING SOON</button>
              <button>TRADE COMING SOON</button>
            </div>
          </Col>

          <Col>
            <div className='bearCard my-sm-3 my-md-3' style={{
              maxWidth: '350px',
              backgroundColor:'rgba(103, 62, 139, 0.1)',
              border:'0px',justifyContent:'space-between'}}>
              <div>
                <Image src={purple}/>
                <Row className='align-items-center mt-3'>
                  <Col sm="8" md="8" lg="8">
                    <h3 className='cardHeading'>Step 3</h3>
                  </Col>
                </Row>
                <p className='cardDetails'>Stake your assets. Yield rewards. Simple as that!</p>
              </div>
              <div style={{width:'100%'}}>
                <div className='socialIconWraper mt-5 d-flex justify-content-center'>
                    <div className='socialIcon'>
                      <a href="https://twitter.com/Koki_NFT" target="_blank" rel="noreferrer">
                        <Image src={piTwitter}/>
                      </a>
                    </div>
                    <div className='socialIcon ms-5'>
                      <a href="https://discord.com/invite/bear-x" target="_blank" rel="noreferrer">
                        <Image src={piDiscord}/>
                      </a>
                    </div>
                </div>
                <button className='mt-3' onClick={()=>buttonhandler("/bear-steak/")}>Stake</button>
              </div>
              
            </div> 
          </Col>
        </Row>
    </Container>
  )
}

export default AboutDetails