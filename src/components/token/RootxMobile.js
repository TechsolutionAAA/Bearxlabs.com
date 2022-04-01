import React from 'react'
import { Col, Row } from 'react-bootstrap'

function RootxMobile() {
  return (
    <div className="listing d-lg-none">
                <Row>
                    <Col lg={6} md={6} >
                        <div className="listing__card ms-auto me-5  w-md-100">
                            <div className="roundOnLeft"><span>Q.2</span></div>
                            <p>The initial token for the BearX ecosystem. Genesis BearX holders earns 10 tokens a day, everyday.</p>
                        </div>
                    </Col>
                    <Col lg={6} ></Col>
                </Row>
                
                <Row>
                    <Col lg={6} md={6} >
                        <div className="listing__card listing__left ms-auto me-5 w-md-100">
                        <div className="roundOnLeft"><span>Q.4</span></div>
                            <p>ROOTx is used to burn for Whitelist spots, for SROOTx, future collections and other asset purchases which fuel the BearX ecosystem</p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} ></Col>
                </Row>
                
                <Row>
                    <Col lg={6} md={6} >
                        <div className="listing__card listing__left ms-auto me-5 w-md-100">
                        <div className="roundOnLeft"><span>Q.6</span></div>
                            <p>Max supply is 135m, with a quarterly supply burn</p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} ></Col>
                </Row>
                
                <Row>
                    <Col lg={6} md={6} >
                        <div className="listing__card listing__left ms-auto me-5 w-md-100">
                        <div className="roundOnLeft"><span>Q.8</span></div>
                            <p>Burn ROOTx for SROOTx (must own respective in world assets to do so)</p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} ></Col>
                </Row>
              </div>
  )
}

export default RootxMobile