import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import genesis from "../assets/images/utility/1.png";
import miniBearX from "../assets/images/utility/2.png";
import bearvx from "../assets/images/utility/3.png";
import holdersp from "../assets/images/utility/1.gif";

const UtilityDetails = () => {
  return (
    <section className="utility">
      <Container>
        
        <Row>
          <Col lg="3" sm="12" md="6" className="item">
            <div className="utility__card__drop">
            <div className="utility__card__img">
              <img className="img-fluid" src={holdersp} alt="" />
            </div>
              <h5>1/1 holders + special editions</h5>
              <ul>
                <li>SROOT daily rewards</li>
                <li>Yields 10 ROOT a day</li>
                <li>Golden Axe ownership</li>
                <li>Premium support + closed discord group</li>
                <li>Large, custom build land in BEARWORLD</li>
                <li>Council Bear Membership - earn 7 tax in BEARWORLD from token based events</li>
                <li>BEARWORLD product rebates on all accessories</li>
              </ul>
            </div>
          </Col>
          <Col lg="3" sm="12" md="6" className="item">
            <div className="utility__card__drop">
            <div className="utility__card__img">
              <img className="img-fluid" src={genesis} alt="" />
            </div>
              <h5>Genesis</h5><br/>
              <ul>
                <li>Yields 10 ROOTx a day</li>
                <li>Hold 2, burn 1000 ROOT and get a Bearx incubator</li>
                <li>FREE 12x12 Land for holders of multiple Genesis Bears</li>
                <li>Hold 5, get yield rewards of SROOT</li>
                <li>voting rights</li>
                <li> {'{REDACTED}'} future airdrop</li>
              </ul>
            </div>
          </Col>
          <Col lg="3" sm="12" md="6" className="item">
            <div className="utility__card__drop">
            <div className="utility__card__img">
              <img className="img-fluid" src={miniBearX} alt="" />
            </div>
              <h5>mini</h5><br/>
              <ul>
                <li>Needed to complete the Bearx set {'{more on this soon}'}</li>
                <li> Accessory drops in BEARWORLD {'{kids go free!}'}</li>
                <li> MiniBearX holder badge {'{on snapshot}'}</li>
                <li>{'{REDACTED}'} drop </li>
                <li>Mini Town Hall</li>
                <li>LIMITED COLLECTION, LESS THAN 1,500 SURVIVING MINIS</li>
              </ul>
            </div>
          </Col>
          <Col lg="3" sm="12" md="6" className="item">
            
            <div className="utility__card__drop">
              <div className="utility__card__img">
                <img className="img-fluid" src={bearvx} alt="" />
              </div>
              <h5>VX</h5><br/>
              <ul>
                <li>BearVX full 3D <span style={{marginRight:'-6px'}}>.</span><span>vox</span> file</li>
                <li>Customisable Bear</li>
                <li>IRL product drops</li>
                <li>10+ Animations - the most animated vox collection yet</li>
                <li>AR/VR upgrades</li>
                <li>P2E ready across multiverses</li>
                <li>Win events, games and challenges = get rewarded</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UtilityDetails;
