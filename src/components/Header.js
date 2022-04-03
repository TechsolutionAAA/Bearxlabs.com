import React, { useState, useEffect } from "react";
import { Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./../assets/images/logo.png";
import { ethers } from "ethers";
import {
  piIstagram,
  piLooksrare,
  piMedium,
  piOpensea,
  piTwitter,
} from "../assets/images/icons";

function Header() {
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect wallet");

  useEffect(() => {
    loadWeb3();
  }, []);

  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new ethers.providers.Web3Provider(window.ethereum);
      const chainId = await window.ethereum.request({ method: "eth_chainId" });
      // console.log(chainId);
      if (chainId != "0x4") {
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x4" }],
          });
        } catch (switchError) {
          // This error code indicates that the chain has not been added to MetaMask.
          if (switchError.code == 4902) {
            try {
              await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: "0x4",
                    rpcUrl:
                      // "https://mainnet.infura.io/v3/9f65f2e7dc324b6fba99c874cecfbadd",
                    "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
                  },
                ],
              });
            } catch (addError) {
              // handle "add" error
            }
          }
          // handle other "switch" errors
        }
        window.ethereum.on("chainChanged", handleChainChanged);
        function handleChainChanged(_chainId) {
          // We recommend reloading the page, unless you must do otherwise
          window.location.reload();
        }
      }

      await window.ethereum
        .enable()
        .then((result) => {
          var str = result[0];
          if (typeof result != "undefined" && result.length > 0) {
            var start5 = str.substring(0, 5);
            var middle5 = ".....";
            var last5 = str.substring(37, 42);
            var joined = start5 + middle5 + last5;
            // console.log("myAccount => " + myAccount)
            setConnButtonText(joined);
            //   setDisShow("block")
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (window.web3) {
      window.web3 = new ethers.providers.Web3Provider(window.ethereum);
      new ethers.providers.Web3Provider(window.ethereum).providers.HttpProvider(
        // "https://mainnet.infura.io/v3/9f65f2e7dc324b6fba99c874cecfbadd"
        "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
      );
      // alert(2)
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
    // getbearxofwallet();
  }

  if (typeof window.ethereum != "undefined") {
    window.ethereum.on("accountsChanged", (accounts) => {
      loadWeb3();
    });
  }

  const accountChangeHandler = (newAccount) => {
    setDefaultAccount(newAccount);
  };
  return (
    <Navbar expand="lg">
      <Navbar.Brand className="d-lg-none">
        <Link to="/">
          <Image src={logo} width="180px" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto align-items-center">
          <Nav.Link>
            <Link to="/collections/">Collections</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/bear-steak/">bearSteak</Link>
          </Nav.Link>
          <NavDropdown title="TOKENS" id="basic-nav-dropdown">
            <NavDropdown.Item>
            <Link to="/token/">TOKENOMICS</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
            <Link to="/tokenstaking">TOKEN STAKING</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
            <Link to="/LPtokenstaking">LP TOKEN STKAING</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Bearworld" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link to="/rootx-v1-claim/">Claim V1 ROOTx</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/about/">About BEARWORLD</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/shop/">Market Stall</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/marketplace/">MARKETPLACE</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/coming-soon/">Updates</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/coming-soon/">Current Challenges</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/beta/">Beta</Link>
            </NavDropdown.Item>
          </NavDropdown>

          <Link to="/" className="d-none d-lg-block">
            <Image src={logo} width="180px" />
          </Link>

          <NavDropdown title="Notes" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link to="/roadmap/">Roadmap</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/lores/">GENESIS LORE</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/faq/">FAQ</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/resources/">Resources</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/coming-soon/">Opportunities</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/coming-soon/">Downloads</Link>
            </NavDropdown.Item>
          </NavDropdown>

          <div className="d-flex socialNavbar">
            <Nav.Link
              href="https://opensea.io/collection/bearxlabs"
              target="_blank"
              className="navbarSocialMedia"
            >
              <Image src={piOpensea} />
            </Nav.Link>
            <Nav.Link
              href="https://twitter.com/bearX_NFT"
              target="_blank"
              className="navbarSocialMedia"
            >
              <Image src={piTwitter} />
            </Nav.Link>
            <Nav.Link
              href="https://bearxnft.medium.com/"
              target="_blank"
              className="navbarSocialMedia"
            >
              <Image src={piMedium} />
            </Nav.Link>
            <Nav.Link
              href="https://www.instagram.com/bearx_labs/"
              target="_blank"
              className="navbarSocialMedia"
            >
              <Image src={piIstagram} />
            </Nav.Link>
            <Nav.Link
              href="https://looksrare.org/collections/0xE22e1e620dffb03065CD77dB0162249c0c91bf01"
              target="_blank"
              className="navbarSocialMedia"
            >
              <Image src={piLooksrare} />
            </Nav.Link>
          </div>

          <NavDropdown.Item
            style={{
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <button className="connect__wallet--button" onClick={loadWeb3}>
              {connButtonText}
            </button>
          </NavDropdown.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
