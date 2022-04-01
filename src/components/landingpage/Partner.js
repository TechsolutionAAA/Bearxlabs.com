import React from 'react';
import { Container, Image } from 'react-bootstrap';
import image1 from '../../assets/images/ladingpage/partner/binance.png';
import image2 from '../../assets/images/ladingpage/partner/pixelverse.png';
import image3 from '../../assets/images/ladingpage/partner/olympus.png';
import image4 from '../../assets/images/ladingpage/partner/stellar.png';
import image5 from '../../assets/images/ladingpage/partner/uniqly.png';
import image6 from '../../assets/images/ladingpage/partner/blocks.png';
import image7 from '../../assets/images/ladingpage/partner/qxquest.png';
function Partner() {
  return (
    <Container>
        <h2 className='sectionHeading text-center mt-5'>SOME OF OUR PARTNERS</h2>
        <div className='partner mt-5'>
            <Image src={image1}/>
            <Image src={image2}/>
            <Image src={image3}/>
            <Image src={image4}/>
            <Image src={image5}/>
            <Image src={image6}/>
            <Image src={image7}/>
        </div>
    </Container>
  )
}

export default Partner