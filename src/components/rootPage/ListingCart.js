import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ListingCart = () => {
  return (
    <div className=' main__listing'>
        <Container>
            <div className="listing">
                <Row>
                    <Col lg={6} md={6} ></Col>
                    <Col lg={6} md={6} >
                        <div className="listing__card ms-5 w-md-100">
                            <div className="roundOn"><span>Q.1</span></div>
                            <p>What is BEARWORLD? A voxel metaverse for BearX holders, with interoperable accessories and rewards that can be used in multiple worlds, namely the Sandbox. This is a world that has the ability for all owners of BearVX NFTs to live, interact and battle in the world, with competing benefits of utility for ROOT, SROOT, and the NFTs that you own.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} >
                        <div className="listing__card ms-auto me-5  w-md-100">
                            <div className="roundOnLeft"><span>Q.2</span></div>
                            <p>Wen launch? Construction of BEARWORLD will be completed approx Feb 2022.</p>
                        </div>
                    </Col>
                    <Col lg={6} ></Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} ></Col>
                    <Col lg={6} md={6} >
                        <div className="listing__card ms-5 w-md-100">
                            <div className="roundOn"><span>Q.3</span></div>
                            <p>What is incubation / incubators? These are 5,300 incubators that will cost 1000 ROOT + the need for 2 Gen BearX in the owners wallet. These incubators remain as the NFT that will appear on Opensea until the 3rd January — for which then, 5,300 MiniBearX NFTs will be revealed.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} >
                        <div className="listing__card listing__left ms-auto me-5 w-md-100">
                        <div className="roundOnLeft"><span>Q.4</span></div>
                            <p>Whats the benefit?
                            By owning a MiniBearX, you receive a free BearVX
                            Wen Launch? Within the next 3–5 days.</p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} ></Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} ></Col>
                    <Col lg={6} md={6} >
                        <div className="listing__card ms-5 w-md-100">
                            <div className="roundOn"><span>Q.5</span></div>
                            <p>What is SROOT?
                            SROOT is the shortened name for SUPER ROOT — the second token launched in the BearX ecosystem. Besides winning it or buying it on the market, you can gain SROOT from doing any of the following:</p>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='listing__btn'>
                <Link className='rootbtn'  to="">chart</Link>
                <Link className='rootbtn'  to="">contact</Link>
            </div>
        </Container>
    </div>
  )
}

export default ListingCart