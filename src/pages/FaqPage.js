import React from 'react'
import { Container } from 'react-bootstrap'
import Faq from '../components/landingpage/Faq'
function FaqPage() {
  return (
    <>
      <div className='commonbanner'>
        <Container>
          <div className='aboutHero__heading'>
            <h1>FAQ</h1>
          </div>
        </Container>
      </div>
      <Faq title=""/>
    </>
  )
}

export default FaqPage