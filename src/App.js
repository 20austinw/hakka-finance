import "./App.css";
import Logo from "./images/hf_logo.png";
import Broadcast from "./images/broadcast.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./images/social-github.png";
import Discord from "./images/social-discord.png";
import Medium from "./images/social-medium.png";
import Telegram from "./images/social-telegram.png";
import Twitter from "./images/social-twitter.png";
import Background from "./images/background.png";

const App = () => {
  return (
    <>
      <div className="menu">
        <img src={Logo} alt="hf_logo" />
        <span className="button">
          <a href="https://hakka-finance.gitbook.io/hakka-wiki/">WIKI</a>
        </span>
        <span className="button">
          <a href="https://rewards.hakka.finance/pools">REWARDS</a>
        </span>
        <span className="button">
          <a href="https://gov.hakka.finance/">GOV</a>
        </span>
      </div>
      <div></div>
      <div className="announcement">
        <img src={Broadcast} alt="broadcast" />
        <span className="text">
          Hakka Finance is <a href="http://google.com">hiring</a>. Come join an
          industry-leading team.
        </span>
      </div>
      <div className="board">
        <div className="title">
          The most powerful decentralized finance system.
        </div>
        <div className="subtitle">
          Build applications that empower lenders, borrowers, and traders with
          the most flexible decentralized finance protocol on Ethereum.
        </div>
        <Button
          variant="success"
          size="lg"
          href="https://hakka-finance.gitbook.io/hakka-wiki/"
        >
          Read the docs
        </Button>
      </div>
      <div className="divide" />
      <div className="social">
        <span className="title">Community</span>
        <a href="https://github.com/hakkafinance">
          <img src={Github} alt="social-github" />
        </a>
        <a href="https://medium.com/hakkafinance">
          <img src={Medium} alt="social-medium" />
        </a>
        <a href="https://twitter.com/hakkafinance">
          <img src={Twitter} alt="social-twitter" />
        </a>
        <a href="https://discord.com/invite/zYfqpUQ">
          <img src={Discord} alt="social-discord" />
        </a>
        <a href="https://t.me/hakkafinance">
          <img src={Telegram} alt="social-telegram" />
        </a>
      </div>
      <div className="divide" />
      <div className="products"></div>
      <div className="gov">
        <div className="title">Hakka Governance Token</div>
        <div className="subtitle">
          Token holders decide how to upgrade the Hakka finance.
        </div>
        <div className="wrapper">
          <div className="container">
            <div className="title">Community Grant Program</div>
            <div className="content">
              <p>
                Rewarding developers who expand the amount of data available
                on-chain, enhance the security of the Chainlink node
                infrastructure, and integrate Chainlink across new systems.
              </p>
            </div>
            <Button variant="outline-success">Go to GOV</Button>{" "}
          </div>
          <img src={Background} alt="background" width={420} height={280} />
        </div>
        <div className="supply">
          <p className="title">Circulating Supply</p>
          <p className="number">157905353.0522 HAKKA</p>
          <a href="">View the Contract on Etherscan</a>
        </div>
      </div>
      <div className="sponsors">
        <p className="title">Partners &amp; Collaborators</p>
      </div>
      <div className="contact">
        <p className="title">Stay updated on the latest Hakka news.</p>
        <div className="wrapper">
          <p className="title">Subscribe Now</p>
          <Form>
            <Form.Control type="email" placeholder="Enter email" size="lg" />
          </Form>
        </div>
      </div>
      <div className="footer"></div>
    </>
  );
};

export default App;
