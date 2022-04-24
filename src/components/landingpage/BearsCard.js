import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import yellow from '../../assets/images/ladingpage/root-banner.png';
import blue from '../../assets/images/ladingpage/card/2.png';
import purple from '../../assets/images/ladingpage/card/3.png';
import { Link } from 'react-router-dom';

function BearsCard() {
  return (
    <Container className='my-5'>
      <h2 className='sectionHeading text-center'>New to BearX and not sure where to start?<br/> Check below</h2>
      
        <Row className='bearsCardWrapper'>
          <Col lg={4} className="mt-5 d-flex flex-column align-items-center">
              <div className='bearCard my-sm-3 my-md-3' style={{maxWidth: '350px'}}>
              <div>
                <Image src={yellow}/>
                <Row className='align-items-center mt-3'>
                  <Col sm="8" md="8" lg="8">
                    <h3 className='cardHeading'>GENESIS</h3>
                  </Col>
                  <Col className='d-flex flex-lg-row-reverse flex-sm-row' sm="4" md="4" lg="4">
                    <div className='cardPriceSection'>
                      <p className='cardPriceText'>Mint Price:</p>
                      <p className='cardPrice'>0.05 ETH</p>
                    </div>
                  </Col>
                </Row>
                <p className='cardDetails'>The glorious Genesis collection. 3,700 exist, with a tonne of value and utility packed inside, most notably in the 10 ROOTx tokens each bear yields per day, everyday.</p>
              </div>
              <button><Link to="/shop/">VIEW</Link></button>
            </div>
          </Col>
          <Col lg={4} className="mt-5 d-flex flex-column align-items-center">
            <div className='bearCard my-sm-3 my-md-3' style={{maxWidth: '350px'}}>
              <div>
                <Image src={blue}/>
                <Row className='align-items-center mt-3'>
                  <Col sm="8" md="8" lg="8">
                    <h3 className='cardHeading'>MINIBEARX</h3>
                  </Col>
                  <Col className='d-flex flex-lg-row-reverse flex-sm-row' sm="4" md="4" lg="4">
                    <div className='cardPriceSection'>
                      <p className='cardPriceText'>Mint Price</p>
                      <p className='cardPrice'>1000 ROOTx</p>
                    </div>
                  </Col>
                </Row>
                <p className='cardDetails my-sm-3 my-md-3'>The MiniBearX collection. Small but mighty. Only 1,315 survived, but they pack a punch. Low supply, packed with rewards and virtually free if you were an OG Bear.</p>
              </div>
              <button><Link to="/shop/">VIEW</Link></button>
            </div>
          </Col>
          <Col lg={4} className="mt-5 d-flex flex-column align-items-center">
            <div className='bearCard my-sm-3 my-md-3' style={{maxWidth: '350px'}}>
              <div>
                <Image src={purple}/>
                <Row className='align-items-center mt-3'>
                  <Col sm="8" md="8" lg="8">
                    <h3 className='cardHeading'>BEARVX</h3>
                  </Col>
                  <Col className='d-flex flex-lg-row-reverse flex-sm-row' sm="4" md="4" lg="4">
                    <div className='cardPriceSection'>
                      <p className='cardPriceText'>Mint Price</p>
                      <p className='cardPrice'>TBC</p>
                    </div>
                  </Col>
                </Row>
                <p className='cardDetails'>BearVX. Onlookers say this is one of the most detailed, advanced vox collections ever. With hundreds of unique traits, customisable clothing, VR/AR, accessories which can be purchased and won for your bear and redeemed IRL - this is as real as it gets. </p>
              </div>
              <button><Link to="/shop/">VIEW</Link></button>
            </div>
          </Col>
        </Row>
    </Container>
  )
}

export default BearsCard