import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import bannerImage from '../../assets/images/ladingpage/about.png';
function LaunchDetails() {
  return (
    <Container>
      <Row className='align-items-center py-5 mt-5'>
        <Col lg="6" className='d-flex justify-content-center'>
          <Image src={bannerImage} fluid />
        </Col>
        <Col lg="6">
          <h2 className='sectionHeading mt-5'>WHAT IS BEARX LABS ALL ABOUT?</h2>
          <p className='aboutDetails'>BearX is inspired by great pixel art, and driven of the belief that by owning one jpeg initially, you can have access to a whole world of experiences, rewards, freebies and more!</p>
        </Col>
      </Row>
    </Container>
  )
}

export default LaunchDetails