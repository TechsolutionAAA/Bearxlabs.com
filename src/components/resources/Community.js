import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { piDiscord, piTwitter } from '../../assets/images/icons';

const Community = () => {
  return (
    <div>
        <Container>
            <div className="community">
                <h2>Community Engagement Projects</h2>
                <div className="community__main">
                    <Row>
                        <Col lg={4} className="d-flex">
                            <div className="community__item">
                                <h3>BOUNTY ZONE</h3>
                                <p>An opportunity for devs, builders and doers to help improve the BearX ecosystem to spot and fix current or future issues in the project. Rewarded by the community and project.</p>
                                <div className="social__link">
                                    <ul id='discordIcon'>
                                        <li>
                                            <a className='all__links d-flex' 
                                            href='https://discord.com/invite/bear-x' target="_blank"
                                            rel="noreferrer" style={{marginLeft:'-20px', padding:'10px'}}> 
                                            <Image src={piDiscord} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} className="d-flex">
                        <div className="community__item">
                            <h3>PROJECT FUTURE</h3>
                            <p>Have an idea? Have a project that you'd like to work with and integrate BearX and its tokens on? Get in touch!</p>
                            <div className="social__link">
                                <ul className='d-flex align-items-center'>
                                    <li>
                                        <a className='all__links__btn' href='https://bearxnft.medium.com/' target="_blank"
                                        rel="noreferrer">Learn more</a>
                                    </li>
                                    <li>
                                        <a className='all__links d-flex' 
                                                href='https://discord.com/invite/bear-x' target="_blank"
                                                rel="noreferrer" style={{ padding:'10px'}}> 
                                            <Image src={piDiscord} />
                                        </a>
                                    </li>
                                    <li>
                                    <a className='all__links d-flex' 
                                                href='https://twitter.com/bearX_NFT' target="_blank"
                                                rel="noreferrer" style={{ padding:'10px'}}> 
                                            <Image src={piTwitter} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </Col>
                        <Col lg={4} className="d-flex">
                        <div className="community__item">
                            <h3>BEARX DAO</h3>
                            <p>Decisions made by the formed BearX council to shape the future of Bears forever. This is the definition of decentralization.</p>
                            <div className="social__link">
                            <ul className='d-flex align-items-center'>
                                    <li>
                                        <a className='all__links__btn' href='https://bearxnft.medium.com/' target="_blank"
                                        rel="noreferrer">MORE</a>
                                    </li>
                                    <li>
                                        <a className='all__links d-flex' 
                                                href='https://discord.com/invite/bear-x' target="_blank"
                                                rel="noreferrer" style={{ padding:'10px'}}> 
                                            <Image src={piDiscord} />
                                        </a>
                                    </li>
                                    <li>
                                    <a className='all__links d-flex' 
                                                href='https://twitter.com/bearX_NFT' target="_blank"
                                                rel="noreferrer" style={{ padding:'10px'}}> 
                                            <Image src={piTwitter} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </div>
            </div>

        </Container>
    </div>
  )
}

export default Community