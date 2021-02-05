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
import OneInch from "./images/1inch-logo.png"
import Chainlink from "./images/chainlink-logo.png"
import Synthetix from "./images/synthetix-logo.png";

const Menu = () => {
  return (
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
  );
};

const Announcement = () => {
  return (
    <div className="announcement">
      <img src={Broadcast} alt="broadcast" />
      <span className="text">
        Hakka Finance is <a href="http://google.com">hiring</a>. Come join an
        industry-leading team.
      </span>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        The most powerful decentralized finance system.
      </div>
      <div className="subtitle">
        Build applications that empower lenders, borrowers, and traders with the
        most flexible decentralized finance protocol on Ethereum.
      </div>
      <Button
        variant="success"
        size="lg"
        href="https://hakka-finance.gitbook.io/hakka-wiki/"
      >
        Read the docs
      </Button>
    </div>
  );
};

const Socials = () => {
  const icons = [Telegram, Discord, Twitter, Medium, Github]
  const links = ["https://t.me/hakkafinance", "https://discord.com/invite/zYfqpUQ", "https://twitter.com/hakkafinance", "https://medium.com/hakkafinance", "https://github.com/hakkafinance"]
  return (
    <div className="social">
      <span className="title">Community</span>
      <MyIcons icons={icons} spacing={32} links={links}/>
    </div>
  );
};

const Divide = () => {
  return <div className="divide" />;
};

const Products = () => {
  return (
  <div className="products">
    <p className='title'>Products bulit on Hakka Finance</p> 
    <p className='subtitle'>Highly secure and flexible infrastructure</p>
    <Tabs defaultActiveKey="profile" id="products-tab">
  <Tab eventKey="home" title="Home">
    <Sonnet />
  </Tab>
  <Tab eventKey="profile" title="Profile">
    <Sonnet />
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    <Sonnet />
  </Tab>
</Tabs>
  </div>
  );
};

const Gov = () => {
  return (
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
  );
};

const Sponsors = () => {
  const icons = [OneInch, Synthetix, Chainlink]
  return (
    <div className="sponsors">
      <p className="title">Partners &amp; Collaborators</p>
      <MyIcons icons={icons} spacing={48}/>
    </div>
  );
};

const Footer = () => {
  const icons = [Telegram, Discord, Twitter, Medium, Github]
  const links = ["https://t.me/hakkafinance", "https://discord.com/invite/zYfqpUQ", "https://twitter.com/hakkafinance", "https://medium.com/hakkafinance", "https://github.com/hakkafinance"]
  return (
    <>
      <div className="contact">
        <p className="title">Stay updated on the latest Hakka news.</p>
        <div className="wrapper">
          <p className="title">Subscribe Now</p>
          <Form>
            <Form.Control type="email" placeholder="Enter email" size="lg" />
          </Form>
        </div>
        <MyIcons icons = {icons} spacing={32} links={links}/>
      </div>
      <footer className="copyright"><p>© Copyright 2021 HAKKA FINANCE</p></footer>
    </>
  );
};

const MyIcons = props => {
  const icons = props.icons
  const spacing = props.spacing
  const links = props.links
  return links !== undefined ? (
    <span>{icons.map((icon, i) => 
      <a key={i} href={links[i]}>
        <img src={icon} style={{margin: `0 ${spacing}px 0 0`}}alt={`icon${i}`}/>
      </a>)}</span>
  ): (
  <span>{icons.map((icon, i) => 
      <img key={i} src={icon} style={{margin: `0 ${spacing}px 0 0`}}alt={`icon${i}`}/>
)}</span>
    );
}
 
const App = () => {
  return (
    <>
      <Menu />
      <Announcement />
      <Header />
      <Divide />
      <Socials />
      <Divide />
      <Products />
      <Gov />
      <Sponsors />
      <Footer />
    </>
  );
};

export default App;
