import './App.css';
import Logo from './images/hf_logo.png'
import Broadcast from './images/broadcast.png'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Github from './images/social-github.png'
import Discord from  './images/social-discord.png'
import Medium from './images/social-medium.png'
import Telegram from './images/social-telegram.png'
import Twitter from './images/social-twitter.png'

const App = () => {
  return (
    <>
      < div className='menu' >
        <img src={Logo} alt='hf_logo' />
        <span className='button'>
          <a href='https://hakka-finance.gitbook.io/hakka-wiki/'>WIKI</a>
        </span>
        <span className='button'>
          <a href='https://rewards.hakka.finance/pools'>REWARDS</a>
        </span>
        <span className='button'>
          <a href='https://gov.hakka.finance/'>GOV</a>
        </span>
      </div>
      <div></div>
      <div className='announcement'>
        <img src={Broadcast} alt='broadcast' />
        <span className='text'>Hakka Finance is <a href='http://google.com'>hiring</a>. Come join an industry-leading team.</span>
      </div>
      <div className='board'>
        <div className='title'>The most powerful decentralized finance system.</div>
        <div className='subtitle'>Build applications that empower lenders, borrowers, and traders with the most flexible decentralized finance protocol on Ethereum.</div>
        <Button variant='success' size='lg' href='https://hakka-finance.gitbook.io/hakka-wiki/'>Read the docs</Button>
      </div>
      <div className='divide' />
      <div className='social'>
        <span className='title'>Community</span>
        <a href='https://github.com/hakkafinance' ><img src={Github} alt='social-github'/></a>
        <a href='https://medium.com/hakkafinance' ><img src={Medium} alt='social-medium'/></a>
        <a href='https://twitter.com/hakkafinance'><img src={Twitter}  alt='social-twitter'/></a>
        <a href='https://discord.com/invite/zYfqpUQ' ><img src={Discord} alt='social-discord'/></a>
        <a href='https://t.me/hakkafinance' ><img src={Telegram} alt='social-telegram'/></a>
      </div>
      <div className='divide' />
      <div className='products'></div>
      <div className='gov'>
        <div className='title'>Hakka Governance Token</div>
      </div>
    </>
  )
}

export default App;
