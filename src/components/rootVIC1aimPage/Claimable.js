// import React, { useEffect, useState } from "react";
// import { Spinner } from "react-bootstrap";
// import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import proxy_iba321 from "../../config/proxyABI.json";
// import iba321 from "../../config/rootABI.json";
// import BearXStakingABI from "../../config/stakingABI.json";
// import BearXABI from "../../config/BearXABI.json";
// import { ethers } from "ethers";
// import contract from "../../config/contract";
// import { Contract } from "@ethersproject/contracts";

// const Claimable = () => {
//   const [myAccount, setMyAccount] = useState("");
//   const [Root, setRoot] = useState(0);
//   const [MyWeb3, setMyWeb3] = useState([]);
//   const [Tokens, setTokens] = useState([]);

//   const [ALLpending, setALLPending] = useState(false);

//   useEffect(() => {
//     roots();
//   }, []);

//   useEffect(() => {
//     if (myAccount != "") {
//       contract123();
//     }
//   }, [myAccount]);

//   async function roots() {
//     if (window.web3 != undefined && window.ethereum) {
//       const web3 = await new ethers.providers.Web3Provider(window.ethereum);
//       setMyWeb3(web3);
//       await web3
//         .listAccounts()
//         .then((acc) => {
//           setMyAccount(acc);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   }

//   async function contract123() {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);

//     const contractProxy = new Contract(
//       "0x2fCD663EE780abc1a217361C86f3E0EE531e314e",
//       proxy_iba321,
//       provider?.getSigner()
//     );

//     const staking_contract = new Contract(
//       contract.BearXStaking[1],
//       BearXStakingABI,
//       provider?.getSigner()
//     );

//     const promises = [];
//     const getRewards = (id) => {
//       return new Promise(async (resolve, reject) => {
//         await contractProxy
//           .CDR(id)
//           .then((result) => {
//             var myRoots = parseInt(result);
//             resolve(myRoots);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       });
//     };
//     await staking_contract
//       .stakeOf(myAccount[0])
//       .then((res) => {
//         const tempIDs = [];
//         res.forEach((id) => {
//           if (id < 10000000000000) {
//             const id123 = id.trim();
//             tempIDs.push(id123);
//             promises.push(getRewards(id));
//           }
//         });
//         setTokens(tempIDs);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     await contractProxy
//       .NFTWallet(myAccount[0])
//       .then((result) => {
//         const tempIDs = [];
//         console.log(tempIDs);
//         result.forEach((id) => {
//           if (id < 10000000000000) {
//             const id123 = id.trim();
//             tempIDs.push(id123);
//             promises.push(getRewards(id));
//           }
//         });
//         setTokens(tempIDs);
//         return result;
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     Promise.all(promises).then((response) => {
//       var sum = response.reduce(function (a, b) {
//         return a + b;
//       }, 0);

//       setRoot((sum / 1000000000000000000).toFixed(0));
//     });
//   }

//   async function claimALL(IDs) {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);

//     setALLPending(true);
//     const colors = IDs;
//     //remove null and undefined elements from colors
//     if (colors.length == 0) {
//       setALLPending(false);
//       return;
//     }
//     const filteredIDs = colors.filter(function (e) {
//       return e != null && e != "";
//     });

//     if (window.web3 != undefined && window.ethereum && myAccount.length != 0) {
//       const ROOTcontract = new Contract(
//         contract.ROOTx[1],
//         iba321,
//         provider?.getSigner()
//       );
//       const NFTContract = new Contract(
//         contract.BearX[1],
//         BearXABI,
//         provider?.getSigner()
//       );

//       var flag = false;
//       var Ssortids;

//       for (var i = 0; i < filteredIDs.length; i++) {
//         if ((await NFTContract.ownerOf(filteredIDs[i])) === myAccount[0]) {
//           flag = true;
//           Ssortids = i;
//         } else {
//           flag = false;
//         }
//       }

//       if (flag) {
//         await ROOTcontract
//           .bulkClaimRewards(filteredIDs, { from: myAccount[0] })
//           .then((result) => {
//             alert("ROOTxs cliamed");
//             window.location.reload();
//             setALLPending(false);
//           })
//           .catch((err) => {
//             console.log(err);
//             setALLPending(false);
//           });
//       } else {
//         alert("Your Bearx is staked.");
//         setALLPending(false);
//       }
//     } else {
//       alert("Please Connet Wallet");
//     }
//   }

//   return (
//     <div>
//       <Container>
//         <div className="climable">
//           <h3>
//             IF YOU HAVE TOKENS CLAIMABLE FROM THIS WALLET, IT WILL BE SHOWN
//             BELOW
//           </h3>
//           <div className="climable__btn">
//             <Link to="" className="climable__link">
//               {Root}rootx
//             </Link>
//             {ALLpending ? (
//               <button>
//                 <Spinner
//                   as="span"
//                   variant="light"
//                   size="sm"
//                   role="status"
//                   aria-hidden="true"
//                   animation="border"
//                 />
//               </button>
//             ) : (
//               <button
//                 className="climable__link"
//                 onClick={() => claimALL(Tokens)}
//               >
//                 CLAIM ALL
//               </button>
//             )}
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Claimable;
