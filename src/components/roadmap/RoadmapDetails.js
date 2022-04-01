import React from 'react'
import { Container } from 'react-bootstrap'

function RoadmapDetails() {
  return (
    <Container>
        <div className='roadmap__cardwrapper'>
            <div className='roadmap__card'>
                <h3>Q2</h3>
                <ul>
                    <li>BearVX</li>
                    <li>Bearworld Release Beta</li>
                    <li>Bear Breed Games</li>
                    <li>12x12 Land Drop</li>
                </ul>
            </div>
            <div className='roadmap__card'>
                <h3>Q3/Q4</h3>
                <ul>
                    <li>Bearworld Full Release</li>
                    <li>Full PVP Battles - Game Development complete</li>
                    <li>Mutant Bears</li>
                    <li>Utility Expansion</li>
                </ul>
            </div>
            <div className='roadmap__card'>
                <h3>BEYOND</h3>
                <ul>
                    <li>BearX Council to run future developments</li>
                    <li>collaboration and mechanics of the ecosystem</li>
                </ul>
            </div>
        </div>
        
    </Container>
  )
}

export default RoadmapDetails