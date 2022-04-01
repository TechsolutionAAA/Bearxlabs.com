import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const GameChanging = () => {
  return (
    <div>
        <Container>
            <div className="game">
                <div className="game__heading">
                    <h2>GAME CHANGING TOKENOMICS</h2>
                    <h4>READ MORE ABOUT ROOTX <Link to ="" className='change__color'>HERE</Link> </h4>
                </div>
                <Row>
                    <Col lg={3} md={6}>
                        <div className="game__card">
                            <h3>TOKEN SYMBOL</h3>
                            <h3 className='game__card--change'>$ROOTx</h3>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="game__card">
                            <h3>MAX SUPPLY</h3>
                            <h3 className='game__card--change'>135,050,000</h3>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="game__card">
                            <h3>TOKEN BURN</h3>
                            <h3 className='game__card--change'>3% AUTOMATIC</h3>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="game__card">
                            <h3>UTILITY NFTs METAVERSE</h3>
                            <h3 className='game__card--change'>CHALLENGES EVENTS</h3>
                        </div>
                    </Col>
                </Row>
            </div>
            
        </Container>
    </div>
  )
}

export default GameChanging