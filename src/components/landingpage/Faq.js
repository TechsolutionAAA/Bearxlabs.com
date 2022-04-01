import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Faq(props) {
  return (
    <Container>
      <h2 className='sectionHeading text-center mt-5'>{props.title}</h2>
      <Row>
        <Col>
          <div className='faq'>
            <div className='faq__items'>
              <h4 className='faq__heading'>What is the brand / project mission and vision?</h4>
              <p className='faq__text'>To be a multi chain, multi project ecosystem which changes the narrative across the P2E experience through a community driven approach. Based on the above, BearX Labs later in the roadmap, will become partly controlled and ran by those who govern the world.</p>
            </div>
            <div className='faq__items'>
              <h4 className='faq__heading'>I have an idea / I want to partner with Bearx - how do i go about doing that?</h4>
              <p className='faq__text'>Great! Please contact the team on discord and we can go from there. We are always open to hearing ideas.</p>
            </div>
            
            <div className='faq__items'>
              <h4 className='faq__heading'>When is the BearVX launch?</h4>
              <p className='faq__text'>Please check your discord for announcements on when the launch will be.</p>
            </div>
            <div className='faq__items'>
              <h4 className='faq__heading'>What will be the BearVX mint process?</h4>
              <p className='faq__text'>Please check discord and our twitter account for more information on this.</p>
            </div>
            <div className='faq__items'>
              <h4 className='faq__heading'>I think I might be whitelisted, how will I know?</h4>
              <p className='faq__text'>Great. The first thing you should do is head to our discord. Then, please check if you have been given a Whitelist role. If this is a no and you think it should be, please open a support ticket</p>
            </div>
            <div className='faq__items'>
              <h4 className='faq__heading'>I have a question that I cannot find the answer to on the website, what do I do?</h4>
              <p className='faq__text'>No problem. We have a 24/7/365 live support ticket process on our discord here. Alongside this, we ask you to check our medium posts and other socials including twitter and instagram.</p>
            </div>
            <div className='faq__items'>
              <h4 className='faq__heading'>I want to know more about the future of BearX - where can I do this?</h4>
              <p className='faq__text'>Although we are frequently updating our roadmap and plans based on proposals and community decisions, the best place to find most of the detailed information on future plans would be on our medium page, here.</p>
            </div>
            
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Faq