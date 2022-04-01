import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import profilePic from '../../assets/images/collections/items/profile/1.png';
import priceIcon from '../../assets/images/collections/items/icons/1.png';
import mini5006 from '../../assets/images/collections/items/5006.png';
import mini5007 from '../../assets/images/collections/items/5007.png';
import mini5008 from '../../assets/images/collections/items/5008.png';
import labs1030 from '../../assets/images/collections/items/1030.png';
import labs3412 from '../../assets/images/collections/items/3412.png';
import labs2001 from '../../assets/images/collections/items/2001.png';
function CollectionItem() {
  return (
    <Container>
        {/* minibear */}
        <Row className='mt-5'>
            <Col lg={4}>
                <div className='collectionItem'>
                    <Image src={mini5006} fluid/>
                    <div className='bottom d-flex justify-content-between align-items-center'>
                        <div className='profile d-flex align-items-center'>
                            <Image src={profilePic} fluid />
                            <p>MiniBearX <span>#5006</span></p>
                        </div>
                        <div className='price d-flex align-items-center'>
                            <Image src={priceIcon} />
                            <p>0.239 ETH</p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={4}>
                <div className='collectionItem'>
                    <Image src={mini5007} fluid/>
                    <div className='bottom d-flex justify-content-between align-items-center'>
                        <div className='profile d-flex align-items-center'>
                            <Image src={profilePic} fluid />
                            <p>MiniBearX <span>#5007</span></p>
                        </div>
                        <div className='price d-flex align-items-center'>
                            <Image src={priceIcon} />
                            <p>0.19 ETH</p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={4}>
                <div className='collectionItem'>
                    <Image src={mini5008} fluid/>
                    <div className='bottom d-flex justify-content-between align-items-center'>
                        <div className='profile d-flex align-items-center'>
                            <Image src={profilePic} fluid />
                            <p>MiniBearX <span>#5008</span></p>
                        </div>
                        <div className='price d-flex align-items-center'>
                            <Image src={priceIcon} />
                            <p>0.2145 ETH</p>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
        {/* bearXlabs */}
        <Row className='mt-5'>
            <Col lg={4}>
                <div className='collectionItem'>
                    <Image src={labs3412} fluid/>
                    <div className='bottom d-flex justify-content-between align-items-center'>
                        <div className='profile d-flex align-items-center'>
                            <Image src={profilePic} fluid />
                            <p>0xnftwallet <span>#3412</span></p>
                        </div>
                        <div className='price d-flex align-items-center'>
                            <Image src={priceIcon} />
                            <p>0.299 ETH</p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={4}>
                <div className='collectionItem'>
                    <Image src={labs1030} fluid/>
                    <div className='bottom d-flex justify-content-between align-items-center'>
                        <div className='profile d-flex align-items-center'>
                            <Image src={profilePic} fluid />
                            <p>0xnftwallet <span>#1030</span></p>
                        </div>
                        <div className='price d-flex align-items-center'>
                            <Image src={priceIcon} />
                            <p>0.299 ETH</p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={4}>
                <div className='collectionItem'>
                    <Image src={labs2001} fluid/>
                    <div className='bottom d-flex justify-content-between align-items-center'>
                        <div className='profile d-flex align-items-center'>
                            <Image src={profilePic} fluid />
                            <p>dude <span>#2001</span></p>
                        </div>
                        <div className='price d-flex align-items-center'>
                            <Image src={priceIcon} />
                            <p>0.295 ETH</p>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
        {/* minibear */}
        <Row className='mt-5'>
            <Col lg={4}>
                <div className='collectionItem'>
                    <Image src={mini5006} fluid/>
                    <div className='bottom d-flex justify-content-between align-items-center'>
                        <div className='profile d-flex align-items-center'>
                            <Image src={profilePic} fluid />
                            <p>MiniBearX <span>#5006</span></p>
                        </div>
                        <div className='price d-flex align-items-center'>
                            <Image src={priceIcon} />
                            <p>0.239 ETH</p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={4}>
                <div className='collectionItem'>
                    <Image src={mini5007} fluid/>
                    <div className='bottom d-flex justify-content-between align-items-center'>
                        <div className='profile d-flex align-items-center'>
                            <Image src={profilePic} fluid />
                            <p>MiniBearX <span>#5007</span></p>
                        </div>
                        <div className='price d-flex align-items-center'>
                            <Image src={priceIcon} />
                            <p>0.19 ETH</p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={4}>
                <div className='collectionItem'>
                    <Image src={mini5008} fluid/>
                    <div className='bottom d-flex justify-content-between align-items-center'>
                        <div className='profile d-flex align-items-center'>
                            <Image src={profilePic} fluid />
                            <p>MiniBearX <span>#5008</span></p>
                        </div>
                        <div className='price d-flex align-items-center'>
                            <Image src={priceIcon} />
                            <p>0.2145 ETH</p>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default CollectionItem