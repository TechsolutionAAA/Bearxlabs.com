import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Image } from "react-bootstrap";
import section1 from "../../assets/images/bearsteak/section-1.png";
import Banner from "../Banner";

const BearSteakOne = () => {
  return (
    <section className="bearSteack">
      <Banner title="BearSteak"/>
      <Container>
        <Row className="align-items-center">
          <Col lg="6" md="6" sm="12">
          <div className='bearsteak__icon__text__wrapper'>
            <div className="bearsteak__icon__text__item">
              <FontAwesomeIcon icon={faCheckCircle} color="#FFAE41"/>
              <span>Connect and stake your Genesis Bears to continue to generate 10 $ROOT per Bear, per day.</span>
            </div>
            <div className="bearsteak__icon__text__item">
              <FontAwesomeIcon icon={faCheckCircle} color="#FFAE41"/>
              <span>Connect and stake 5+ Genesis Bears to also generate 50 $SROOT per Bear, per day.</span>
            </div>
            <div className="bearsteak__icon__text__item">
              <FontAwesomeIcon icon={faCheckCircle} color="#FFAE41"/>
              <span>Stake $SROOT and earn $SROOT and $WETH rewards.</span>
            </div>
            
          </div>
          </Col>
          <Col lg="6" md="6" sm="12" className="mt-2 text-center">
            <Image src={section1} alt="purple" fluid style={{maxWidth:'350px'}}/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BearSteakOne;
