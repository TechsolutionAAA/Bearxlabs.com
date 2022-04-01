// import React, { useEffect, useState } from "react";
// import { Container } from "react-bootstrap";
// import { ethers } from "ethers";
// import contract from "../../config/contract";
// import iba321 from "../../config/rootABI.json";
// import BearXABI from "../../config/BearXABI.json";
// import { Spinner } from "react-bootstrap";
// import { Contract } from "@ethersproject/contracts";

// const TokenInput = () => {
//   const [myAccount, setMyAccount] = useState("");
//   const [toClaim, setToClaim] = useState("");
//   const [pending, setPending] = useState(false);
//   const [MyWeb3, setMyWeb3] = useState([]);

//   useEffect(() => {
//     roots();
//   }, []);

//   async function roots() {
//     if (window.web3 !== undefined && window.ethereum) {
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

//   async function claim(IDs) {
//       alert(IDs);
//     setPending(true);
//     const colors = IDs;
//     //remove null and undefined elements from colors
//     if (colors.length === 0) {
//       setPending(false);
//       return;
//     }
//     const filteredIDs = colors.filter(function (e) {
//       return e !== null && e !== "";
//     });
//     if (
//       window.web3 !== undefined &&
//       window.ethereum &&
//       myAccount.length !== 0
//     ) {
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const RooTcontract = new Contract(
//         contract.ROOTx[1],
//         iba321,
//         provider?.getSigner()
//       );
//       const NFTContract = new Contract(
//         contract.BearX[1],
//         BearXABI,
//         provider?.getSigner()
//       );
//       console.log(NFTContract);
//       for (var i = 0; i < filteredIDs.length; i++) {
//         if ((await NFTContract.ownerOf(filteredIDs[i])) !== myAccount[0]) {
//             filteredIDs.splice(i, 1);
//         }
//       }
//         await RooTcontract
//             .bulkClaimRewards(filteredIDs, { from: myAccount[0] })
//             .then((result) => {
//             window.location.reload();
//             setPending(false);
//             })
//             .catch((err) => {
//             console.log(err);
//             setPending(false);
//             });
//     } else {
//       alert("Please Connet Wallet");
//     }
//   }

//   async function calReward(e) {
//     let as13 = e.target.value;
//     // console.log(as13[as13.length-1]);
//     if (as13[as13.length - 1] === "," || as13[as13.length - 1] === " ") {
//       let as139 = as13.slice(0, -1);
//       let as12 = as139.split(",").length * 1000 + " $HORSE";
//     } else {
//       let as12 = as13.split(",").length * 1000 + " $HORSE";
//     }

//     let numOfIds = as13.split(",").length;

//     const tempIDs = [];

//     as13.split(",").forEach((id) => {
//       if (id < 10000000000000) {
//         const id123 = id.trim();
//         tempIDs.push(id123);
//       }
//     });

//     setToClaim(tempIDs);
//   }

//   return (
//     <div>
//       <Container>
//         <div className="tokenInput">
//           <p>
//             Enter the TOKEN IDs for your Bears like this{" "}
//             <span className="token__number">1, 2, 44, 552 ,2421</span>
//             <span>Note:</span> Please enter it exactly like this. Your tokens
//             available to claim will be updated daily above
//           </p>
//           <div className="tokenInputGroup">
//             <div className="claim__button pb-0">
//               <form>
//                 <input
//                   type="text"
//                   value={toClaim}
//                   placeholder="Enter Id"
//                   className="search"
//                   onChange={(e) => calReward(e)}
//                 />
              

//               {/* <button> {Root} ROOT</button> */}
//               {pending ? (
//                 <div className="input__btn">
//                     <button>
//                     <Spinner
//                         as="span"
//                         variant="light"
//                         size="sm"
//                         role="status"
//                         aria-hidden="true"
//                         animation="border"
//                     />
//                     </button>
//                 </div>
//               ) : (
//                 <div className="input__btn">
//                   <button onClick={() => claim(toClaim)}>CLAIM</button>
//                 </div>
//               )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default TokenInput;
