import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RootxMobile from './RootxMobile'
import Srootx from './Srootx'

function TokenList() {
  return (
    <div className=' main__listing'>
        <Container>
            <Row>
                <Col>
                <div className='about__details' style={{marginTop:'-50px', marginBottom:'50px'}}>
                    <p>BearX labs is a dual token ecosystem, with both tokens having different utility with different mechanisms, yet both being important in its own way. Below we have highlighted some of the core parts to the token.</p>
                </div>
                </Col>
            </Row>
            <Row>
                <Col sm={6} md={6} lg={6} >
                <div className="d-flex justify-content-center">
                    <div className='tokenButton'>ROOTx</div>
                </div>
                <RootxMobile />
                </Col>
                <Col sm={6} md={6} lg={6} >
                <div className="d-flex justify-content-center">
                    <div className='tokenButton srootx-sm'>SROOTx</div>
                </div>
                <Srootx />
                </Col>
            </Row>
            <div className="listing d-none d-lg-block">
                <Row>
                    <Col lg={6} md={6} >
                        <div className="listing__card ms-5 w-md-100">
                            <div className="roundOnLeft"><span></span></div>
                            <p>The token for the BearX games and metaverse (BEARWORLD). Be a 1/1 holder or a holder of 5 Genesis Bears and yield relative SROOTx a day</p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} ></Col>
                </Row>
                <Row>
                    <Col lg={6} ></Col>
                    <Col lg={6} md={6} >
                        <div className="listing__card ms-auto me-5  w-md-100">
                            <div className="roundOn"><span></span></div>
                            <p>The initial token for the BearX ecosystem. Genesis BearX holders earns 10 tokens a day, everyday.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} >
                        <div className="listing__card ms-5 w-md-100">
                            <div className="roundOnLeft"><span></span></div>
                            <p>Being a game token, SROOTx is rewarded by winning challenges, games and yield through assets that yield SROOTx</p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} ></Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} ></Col>
                    <Col lg={6} md={6} >
                        <div className="listing__card listing__left ms-auto me-5 w-md-100">
                        <div className="roundOn"><span></span></div>
                            <p>ROOTx is used to burn for Whitelist spots, for SROOTx, future collections and other asset purchases which fuel the BearX ecosystem</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} >
                        <div className="listing__card ms-5 w-md-100">
                            <div className="roundOnLeft"><span></span></div>
                            <p>Burnable and jeopardy events benefit those who have more SROOTx</p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} ></Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} ></Col>
                    <Col lg={6} md={6} >
                        <div className="listing__card listing__left ms-auto me-5 w-md-100">
                        <div className="roundOn"><span></span></div>
                            <p>Max supply is 135m, with a quarterly supply burn</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} >
                        <div className="listing__card ms-5 w-md-100">
                            <div className="roundOnLeft"><span></span></div>
                            <p>Redistribution of 6% to all holders proportionately = everytime anyone buys or sells SROOTx - you earn!</p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} ></Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} ></Col>
                    <Col lg={6} md={6} >
                        <div className="listing__card listing__left ms-auto me-5 w-md-100">
                        <div className="roundOn"><span></span></div>
                            <p>Burn ROOTx for SROOTx (must own respective in world assets to do so)</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} >
                        <div className="listing__card ms-5 w-md-100">
                            <div className="roundOnLeft"><span></span></div>
                            <p>Work your way up to being in the BearX council - where you can govern the world, earn taxes and shape the way SROOTx is used in the future</p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} ></Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} >
                    <div className='listing__btn'>
                        <Link className='rootbtn'  to="">chart</Link>
                        <a className='rootbtn'  href="https://etherscan.io/address/0x99cfdf48d0ba4885a73786148a2f89d86c702170" target="_blank" rel="noreferrer">contact</a>
                    </div>
                    </Col>
                    <Col lg={6} md={6} >
                    <div className='listing__btn'>
                        <Link className='rootbtn'  to="">chart</Link>
                        <a className='rootbtn'  href="https://etherscan.io/address/0xd718ad25285d65ef4d79262a6cd3aea6a8e01023" target="_blank" rel="noreferrer">contact</a>
                    </div>
                    </Col> 
                </Row>
            </div>
            
        </Container>
    </div>
  )
}

export default TokenList