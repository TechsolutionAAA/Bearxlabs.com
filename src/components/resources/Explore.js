import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { piTwitter, piIstagram, piMedium } from '../../assets/images/icons';

const Explore = () => {
  return (
    <Container>
            <div className="explore">
                <h2>EXPLORE PROJECTS AND INFORMATION ACROSS THE BEARX ECOSYSTEM</h2>
                <Row className='align-items-stretch'>
                    <Col className='d-flex'>
                        <div className="explore__card">
                            <div>
                                <h3>BEARX VIEW</h3>
                                <p>A chance to track data, spot opportunities and benefit from alpha first by our tier 1 tools and data.  if you held your bags for longer? Or </p>
                                
                            </div>
                            <div>
                                <Link className='card__link__btn' to="/coming-soon/">COMING SOON</Link>
                                <Link className='card__link__btn' to="/#">VIEW BEARX ECOSYSTEM</Link>
                                <div className="social__link">
                                    <ul>
                                        <li>
                                            <a className='all__links' 
                                            href='https://twitter.com/bearX_NFT' target="_blank"
                                            rel="noreferrer">                        <Image src={piTwitter} />
                                            </a>
                                        </li>
                                        <li>
                                            <a className='all__links' 
                                            href='https://www.instagram.com/bearx_labs/' target="_blank"
                                            rel="noreferrer"> 
                                            <Image src={piIstagram} />
                                            </a>
                                        </li>
                                        <li>
                                            <a className='all__links' 
                                            href='https://bearxnft.medium.com/' target="_blank"
                                            rel="noreferrer"> 
                                            <Image src={piMedium} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="explore__card ">
                            <div>
                                <h3>SHOW YOUR HANDS</h3>
                                <p>Want to know how much value you would have if you held your bags for longer? Or if you grabbed more during 'that' chance you had? Soon you'll be able to find out!</p>
                            </div>
                            <div>
                                <Link className='card__link__btn' to="/#">COMING SOON</Link>
                                <a 
                                className='card__link__btn' 
                                href='https://opensea.io/collection/bearxlabs?search[sortAscending]=true&search[sortBy]=PRICE&search[stringTraits][0][name]=Generation&search[stringTraits][0][values][0]=Genesis'
                                target="_blank" 
                                rel="noreferrer"
                                >SEARCH THE GENESIS COLLECTION</a>
                                <div className="social__link">
                                    <ul>
                                        <li>
                                            <a className='all__links' 
                                            href='https://twitter.com/bearX_NFT' target="_blank"
                                            rel="noreferrer"> 
                                                <Image src={piTwitter}/>
                                            </a>
                                        </li>
                                        <li>
                                            <a className='all__links' 
                                            href='https://www.instagram.com/bearx_labs/' target="_blank"
                                            rel="noreferrer"> 
                                            <Image src={piIstagram}/>
                                            </a>
                                        </li>
                                        <li>
                                            <a className='all__links' 
                                            href='https://bearxnft.medium.com/' target="_blank"
                                            rel="noreferrer"> 
                                                <Image src={piMedium}/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
  )
}

export default Explore