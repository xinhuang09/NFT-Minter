import "./styles/MainMint.scss";
import CheckBalance from "./checkBalance";
import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import NFTMinter from "./NFTMinter.json";
import questionMark from './assets/img/question.png';
import nftvideoexample1 from "./assets/videoNFT/videoNFT.gif";
import nftexample1 from "./assets/nftcollection/images/1.png";
// import nftexample1 from "./assets/nftcollection/images/1.png";
import NftImages from "./nftImage.js";

const NFTMinterAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
// const maths = {
//     fixedView1 : "" ,
//     fixedView2 : "" ,
//     fixedView3 : "" ,
// }
// const nftImages = Object.keys(maths).map(item => require("./assets/nftcollection/images/" + item +".png"));

export default function MainMint({ accounts, setAccounts }) {

    const [mintAmount, setMintAmount] = useState(1);
    const [totalMinted, setTotalMinted] = useState(0);
    const isConnected = Boolean(accounts[0]);
    // var questionMark = require('/assets/img/question.jpg');
    let alreadyMinted = false;

    async function handleMint() {
        if (window.ethereum) {

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            // typeof window[“aleereum”] !== “undefined”;
            // const provider = new ethers.providers.Web3Provider(window["aleereum"]);
            // typeof window[aleereum] !== “undefined”;
            // const provider = window["aleereum"];
            // const provider = window.aleereum;
            const signer = provider.getSigner();
            const contract = new ethers.Contract(NFTMinterAddress, NFTMinter.abi, signer);
            // const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.02 * mintAmount).toString())
                });
                console.log(`Response: ${response}`);
            } catch(err) {
                console.error(`Error: ${err}`);
            }

        }
    }
    // async function alreadyMintedNft() {
    //   const mintedNFT = useState(0);
    // }
    function srcGenerator(){

    }

    function imageChange(){
      document.getElementById("NFTimage").src = nftexample1;
    }

    function videoChange(){
      document.getElementById("NFTimage").src = nftvideoexample1;
    }


    return (
        <section className="mainMint">
            <h1>What is NFT?</h1>
            <p>
                A non-fungible token (NFT) is a financial security consisting of digital data stored in a blockchain, a form of distributed ledger.
            </p>
            {
                isConnected ? (
                    <div>
                        <div className="card" style={{ width: '30rem' }}>
                        <img class="center" id="NFTimage" style={{ width: '12rem' }} src={alreadyMinted==true ? nftexample1 : questionMark}></img>
                        </div>
                        <button onClick={handleMint, imageChange}>Mint Image NFT!</button><button onClick={handleMint, videoChange}>Mint Video NFT!</button>
                    </div>
                ) : (
                    <p>Please use CCN to mint</p>
                )
            }
            <div>
              <CheckBalance />
            </div>
        </section>
    );
}
