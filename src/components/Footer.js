import React from 'react';
import { Container, Image, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './../assets/images/logo.png';
import { piDiscord, piTwitter } from '../assets/images/icons';
import auditFile from './../assets/images/files/audit.pdf';
import {saveAs} from 'file-saver';

function Footer() {
  const saveFile = () => {
    saveAs(
      auditFile,
      "example.pdf"
    );
  };
  return (
    <Container>
      <Link to="/" className='d-flex justify-content-center mt-5'>
          <Image src={logo} fluid className='footerLogo'/>
      </Link>
      <div className='d-flex justify-content-center' id='footerSocialIcons'>
        <div className='iconBox'>
          <a href="https://twitter.com/bearX_NFT" target="_blank" rel="noreferrer">
          <Image src={piTwitter}/>
          </a>
        </div>
        <div className='iconBox'>
          <a href="https://discord.com/invite/bear-x" target="_blank" rel="noreferrer">
          <Image src={piDiscord}/>
          </a>
        </div>
      </div>
      <h4 className='footerHeading mt-3'>Contracts</h4>
      <div className='footerNavbar'>
        <Nav className="justify-content-center" >
          <Nav.Item>
            <Nav.Link href='https://etherscan.io/token/0xd718ad25285d65ef4d79262a6cd3aea6a8e01023' target="_blank" rel="noreferrer">
              ROOTx
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='https://etherscan.io/address/0xe22e1e620dffb03065cd77db0162249c0c91bf01' target="_blank" rel="noreferrer">
              BearXNFT
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='https://etherscan.io/token/0x99cfdf48d0ba4885a73786148a2f89d86c702170' target="_blank" rel="noreferrer">
            sROOTx
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
            className='text-center'
            href='https://etherscan.io/address/0x871770E3e03bFAEFa3597056e540A1A9c9aC7f6b' target="_blank" rel="noreferrer"
            >
              BearXNFT Staking
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/#" onClick={saveFile}>Audit</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className='footerCredit'>
        <p>All Rights Reserved 2022</p>
      </div>
    </Container>
  )
}

export default Footer