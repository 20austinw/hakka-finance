import "./App.css";
import React, {useState} from 'react';
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
import BlackHole from './images/blackholeswap.png'
import WhitePaper from './images/icon-whitepaper.png'

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

const CardDeck = ({children}) => {
  return (
    <div style={{
       width: '990px',
       height: '840px',
       margin: '33px 0 0 0',
       outline: '2px solid black',
       display: 'flex',
       flexDirection: 'row',
       flexWrap: 'wrap',
      justifyContent: 'center'
    }}>
      {children}
    </div>
  )
}

const Card = props => {
  const [color, setColor] = useState('#169150')
  return (
  <div className='cardContainer' style={{width: '330px', height: '420px'}}>
  {/*Card has to be controlled from App.css */}
  <div className='card'> 
    <img src={BlackHole} alt='BlackHole'style={{
      width: '72px',
      height: '72px',
      margin: '0 0 20px 0',
      objectFit: 'contain',
      float: 'left'
    }}/>
      <p style={{
        margin: '0px 0px 8px 0',
        fontFamily: 'Nunito Sans, sans-serif',
        fontSize: '24px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#363636'
      }}>{props.title}</p>
      <a href={props.whitepaperLink}><div className='wrapper' style={{display: 'flex', alignItems: 'center'}}>
        <img src={WhitePaper} style={{
          width: '24px',
          height: '24px',
          margin: '0 8px 0 0',
          objectFit: 'contain'
        }} alt='icon'/>
        <span style={{
          fontFamily: 'Nunito Sans, sans-serif',
          fontSize: '14px',
          fontWeight: 'bold',
          fontStretch: 'normal',
          fontStyle: 'normal',
          letterSpacing: 'normal',
          lineHeight: 'normal',
          color: 'rgba(117, 128, 124, 0.7)',
        }}>View Whitepaper</span>
    </div></a>
    <p style={{
      width: '252px',
      height: '66px',
      margin: '36px 0',
      fontFamily: 'Nunito Sans, sans-serif',
      fontSize: '16px',
      fontWeight: '600',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
      color: '#363636'
      }}>
      {props.desc}
    </p>
    <a href={props.productLink}>
    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" style={{float:'right'}} onMouseOver={()=>setColor('#29d646')} onMouseOut={()=>setColor('#169150')}>
      <g fill="none" fillRule="evenodd">
        <circle cx="22" cy="22" r="21.5" fill="#FFF" stroke={color}/>
        <g transform="translate(12 12)">
          <rect width="20" height="20"/>
          <path fill={color} fillRule="nonzero" d="M5.14208351,4.00356895 C4.81233652,3.97374489 4.49403058,4.1326062 4.31992726,4.41389374 C4.14582394,4.69518128 4.14582394,5.05058643 4.31992726,5.33187397 C4.49403058,5.61316151 4.81233652,5.77202282 5.14208351,5.74219876 L14.0284414,5.74741465 L4.2247259,15.5393777 C3.91315582,15.885446 3.92719815,16.4145253 4.25668778,16.7436199 C4.58617742,17.0727146 5.1158917,17.0867401 5.46237535,16.7755435 L15.2660908,6.98358044 L15.259128,15.8610242 C15.2701122,16.3365151 15.6534247,16.719368 16.1294862,16.7303391 C16.3604305,16.730701 16.5820201,16.639229 16.7453225,16.4761223 C16.908625,16.3130156 17.0002068,16.0916916 16.9998445,15.8610242 L16.9998445,4.87288386 C17.0042721,4.64099978 16.9139964,4.41730738 16.7498029,4.25331076 C16.5856095,4.08931414 16.3616486,3.99914667 16.1294862,4.00356895 L5.14208351,4.00356895 Z"/>
        </g>
      </g>
    </svg>
    </a>
   </div>
   </div>
  )
}

const CurrentProducts = () => {
  return (
    <CardDeck>
      <Card title='BlackholeSwap' whitepaperLink='http://google.com/' desc='HA decentralized AMM (Automatic Market Making) exchange designed for stablecoins' productLink='http://google.com/' />
      <Card title='BlackholeSwap' whitepaperLink='http://google.com/' desc='HA decentralized AMM (Automatic Market Making) exchange designed for stablecoins' productLink='http://google.com/' />
      <Card title='BlackholeSwap' whitepaperLink='http://google.com/' desc='HA decentralized AMM (Automatic Market Making) exchange designed for stablecoins' productLink='http://google.com/' />
      <Card title='BlackholeSwap' whitepaperLink='http://google.com/' desc='HA decentralized AMM (Automatic Market Making) exchange designed for stablecoins' productLink='http://google.com/' />
      <Card title='BlackholeSwap' whitepaperLink='http://google.com/' desc='HA decentralized AMM (Automatic Market Making) exchange designed for stablecoins' productLink='http://google.com/' />
    </CardDeck>
  )
}

const Products = () => {
  return (
  <div className="products">
    <p className='title'>Products bulit on Hakka Finance</p> 
    <p className='subtitle'>Highly secure and flexible infrastructure</p>
    <CurrentProducts />
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
