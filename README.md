# NFT-Minter

## Team Member
#### Xin Huang xh2510@columbia.edu
#### Ziqi Zhang zz2881@columbia.edu
#### Weicong Zhang wz2582@columbia.edu
#### Zhengyu He zh2480@columbia.edu
#### Kairui Yin ky2483@columbia.edu

## Project Overview
In this project, we've created a full-stack DAPP for users to mint static and dynamic NFTs.

We program a full-stack blockchain DAPP mainly focusing on NFT minting, we use solidity to program the smart contract as the core of the backend and JS for the web development of the frontend, also we discuss a new encryption approach for Gifs and Video, which is inspired by the concept of Merkle Tree. By combining those techniques, we bring an DAPP with a core functionality of NFT minting and several novelties.

## Functionality
The main function of our back end is to set contracts about the detail of NFT transactions. Here is the table of our main functions in contracts:


\begin{table}[H]
\begin{center}
    \caption{Descriptions of Functions in the back-end page.}
    \vspace{0.3cm}
    \begin{tabular}{|c|c|}
\hline
Function              & Description                                                                                                                                 \\ \hline
IsPublicMintEnabled() & Check whether the account can mint or not.                                                                                                  \\ \hline
BaseTokenUri()        & Set the URI where the NFT images will be stored.                                                                                            \\ \hline
tokenURI()            & \begin{tabular}[c]{@{}c@{}}This is existed in ERC721, as the base of \\ BaseTokenURL function.\end{tabular}                                 \\ \hline
withdraw()            & \begin{tabular}[c]{@{}c@{}}It is necessary to define that only owner \\ can do this operation.\end{tabular}                                 \\ \hline
mint()                & \begin{tabular}[c]{@{}c@{}}The most important function in our contracts, it\\ defines the concreate detail of NFT transaction.\end{tabular} \\ \hline
deposit\_to\_web()    & \begin{tabular}[c]{@{}c@{}}It is also applicable to deposit money \\ to the webpage.\end{tabular}                                           \\ \hline
\end{tabular}

\end{center}
\end{table}


## Instructions
This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
