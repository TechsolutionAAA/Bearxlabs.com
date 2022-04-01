import React from 'react'
import { Container } from 'react-bootstrap'

function Banner(props) {
  return (
    <div className='commonbanner'>
    <Container>
      <div className='aboutHero__heading'>
        <h1>{props.title}</h1>
      </div>
    </Container>
  </div>
  )
}

export default Banner