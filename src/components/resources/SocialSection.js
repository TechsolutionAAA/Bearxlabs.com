import React from 'react'
import { Container } from 'react-bootstrap'

import { SiDiscord , SiTwitter, SiInstagram, SiMedium, SiTorbrowser, SiProtools} from 'react-icons/si';
import {FaShip} from 'react-icons/fa';
import {GiCutDiamond} from 'react-icons/gi';
function SocialSection() {
  return (
    <Container>
        <div className='roadmap__contact'>
            <h2 className='sectionHeading text-center'>GET IN TOUCH</h2>
            <div className='socials'>
                <h3>SOCIALS + BLOGS</h3>
                <div className='socials__button--wrapper'>
                    <a className='socials__button' href="https://discord.com/invite/bear-x" target="_blank" rel="noreferrer">
                    <div className='icon'>
                        <SiDiscord />
                    </div>
                    <div className='text'>
                    Discord community
                    </div>
                    </a>
                    <a className='socials__button' href="https://twitter.com/bearX_NFT" target="_blank" rel="noreferrer">
                    <div className='icon'>
                    <SiTwitter />
                    </div>
                    <div className='text'>
                    Follow us on Twitter
                    </div>
                    </a>
                    <a className='socials__button' href="https://www.instagram.com/bearx_labs/" target="_blank" rel="noreferrer">
                    <div className='icon'>
                        <SiInstagram />
                    </div>
                    <div className='text'>
                    Follow us on Instagram
                    </div>
                    </a>
                    <a className='socials__button' href="https://www.instagram.com/bearx_labs/" target="_blank" rel="noreferrer">
                    <div className='icon'>
                        <SiMedium />
                    </div>
                    <div className='text'>
                    Read our Medium Pages
                    </div>
                    </a>
                </div>
            </div>
            <div className='socials mt-5 pt-5'>
                <h3>MARKETPLACES + TOOLS</h3>
                <div className='socials__button--wrapper'>
                    <a className='socials__button' href="https://opensea.io/BearXNFTs" target="_blank" rel="noreferrer">
                    <div className='icon'>
                        <FaShip />
                    </div>
                    <div className='text'>
                    Opensea
                    </div>
                    </a>
                    <a className='socials__button' href="https://looksrare.org/collections/0xE22e1e620dffb03065CD77dB0162249c0c91bf01" target="_blank" rel="noreferrer">
                    <div className='icon'>
                    <GiCutDiamond />
                    </div>
                    <div className='text'>
                    LooksRare
                    </div>
                    </a>
                    <a className='socials__button' href="https://x2y2.io/collection/bearxlabs/items" target="_blank" rel="noreferrer">
                    <div className='icon'>
                    <SiTorbrowser />
                    </div>
                    <div className='text'>
                    X2Y2
                    </div>
                    </a>
                    <a className='socials__button' href="https://rarity.tools/bearxlabs" target="_blank" rel="noreferrer">
                    <div className='icon'>
                    <SiProtools />
                    </div>
                    <div className='text'>
                    Rarity Tools
                    </div>
                    </a>
                    
                </div>
            </div>
        </div>
    </Container>
  )
}

export default SocialSection