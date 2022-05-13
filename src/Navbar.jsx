import "./styles/Navbar.scss";

// import Facebook from "./assets/social-media-icons/facebook.png";
// import Twitter from "./assets/social-media-icons/twitter.png";
// import Email from "./assets/social-media-icons/email.png";

export default function Navbar({ accounts, setAccounts }) {

    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            setAccounts(accounts);
        } else {
            window.alert("Please install metamask to use this website");
        }
    }

    return (
        <header className="header">
            <section className="iconContainer">
                <p>NFT Minter</p>
            </section>
            <section class="navigation">
                <div class="nav-item">
                <a class="nav-link" href="../public/index.html">Mint</a>
                </div>
                <div class="nav-item">
                <a class="nav-link" href="#">My Account</a>
                </div>
                <div class="nav-item">
                <a class="nav-link" href="https://github.com/xinhuang09/NFT-Minter/blob/main/README.md">Team</a>
                </div>
                <div class="nav-item">
                <a class="nav-link" href="https://www.computecoin.network/">CCN</a>
                </div>

            {
                    isConnected ? ( <p>Connected to Ale Wallet</p> ) : ( <button onClick={connectAccount}>Connect</button> )
            }
            </section>
        </header>
    );
}
