import React, { useState, useEffect } from 'react';
import './App.css';

function MiningStatus({ amount, timeLeft }) {
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const progress = ((7 * 3600 - timeLeft) / (7 * 3600)) * 100;

  return (
    <div className="mining-status">
      <div className="mining-info">
        <span className="mining-icon">⚡</span>
        <span className="mining-text">
          Farming <span className="mining-amount">₿ {amount.toFixed(3)}</span>
        </span>
      </div>
      <div className="mining-timer">{hours}h {minutes}m</div>
      <div className="mining-progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
}

function HomePage() {
  const [isMining, setIsMining] = useState(false);
  const [miningAmount, setMiningAmount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(7 * 3600); // 7 hours in seconds

  useEffect(() => {
    let miningInterval;
    let timerInterval;

    if (isMining) {
      // Update mining amount every minute
      miningInterval = setInterval(() => {
        setMiningAmount(prev => prev + 0.032);
      }, 60000); // 60000ms = 1 minute

      // Update timer every second
      timerInterval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsMining(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(miningInterval);
      clearInterval(timerInterval);
    };
  }, [isMining]);

  const startMining = () => {
    setIsMining(true);
    setMiningAmount(0);
    setTimeLeft(7 * 3600);
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m`;
  };

  return (
    <>
      <header className="header">
        <div className="header-title">Blum</div>
        <div>⋮</div>
      </header>

      <div className="crypto-card">
        <div className="crypto-info">
          <div className="crypto-icon"></div>
          <div>
            <div className="crypto-details">Joelink crypto commu...</div>
            <div className="crypto-bp">1,284,870 BP</div>
          </div>
        </div>
        <button className="open-button">Open</button>
      </div>

      <div className="profile-section">
        <div className="profile-icon">
          RM
        </div>
        <div className="username">mizansdfsdfsdf</div>
        <div className="balance">₿ {(180 + miningAmount).toFixed(3)}</div>
        <button 
          className={`farming-button ${isMining ? 'mining' : ''}`}
          onClick={startMining}
          disabled={isMining}
        >
          {!isMining ? (
            <>
              <span role="img" aria-label="lightning">⚡</span>
              Start farming
            </>
          ) : (
            <>
              <span className="mining-icon">⚡</span>
              <span>Farming</span>
              <span className="amount">₿ {miningAmount.toFixed(3)}</span>
              <span className="timer">{formatTime(timeLeft)}</span>
            </>
          )}
        </button>
      </div>
    </>
  );
}

function EarnPage() {
  return (
    <>
      <header className="header">
        <div className="header-title">Blum</div>
        <div>⋮</div>
      </header>

      <div className="earn-page">
        <div className="top-card">
          <div className="top-card-content">
            <div>
              <div className="top-card-text">Get the latest news</div>
              <div className="top-card-bp">+0/333 BP</div>
            </div>
            <div className="counter">0/3</div>
          </div>
        </div>
        
        <div className="category-tabs">
          <div className="category-tab active">New</div>
          <div className="category-tab">OnChain</div>
          <div className="category-tab">Socials</div>
          <div className="category-tab">Blum Bot</div>
        </div>

        <div className="news-list">
          <div className="news-item">
            <div className="news-content">
              <div className="news-icon">▶</div>
              <div className="news-details">
                <div className="news-title">Nov 9 Crypto News</div>
                <div className="news-bp">+250 BP</div>
              </div>
            </div>
            <button className="start-button">Start</button>
          </div>

          <div className="news-item">
            <div className="news-content">
              <div className="news-icon">▶</div>
              <div className="news-details">
                <div className="news-title">Crypto Slang. Part 4</div>
                <div className="news-bp">+250 BP</div>
              </div>
            </div>
            <button className="start-button">Start</button>
          </div>

          <div className="news-item">
            <div className="news-content">
              <div className="news-icon">▶</div>
              <div className="news-details">
                <div className="news-title">Dec 6 Crypto News</div>
                <div className="news-bp">+250 BP</div>
              </div>
            </div>
            <button className="start-button">Start</button>
          </div>

          <div className="news-item">
            <div className="news-content">
              <div className="news-icon">▶</div>
              <div className="news-details">
                <div className="news-title">DEX Evolution</div>
                <div className="news-bp">+250 BP</div>
              </div>
            </div>
            <button className="start-button">Start</button>
          </div>

          <div className="news-item">
            <div className="news-content">
              <div className="news-icon">▶</div>
              <div className="news-details">
                <div className="news-title">Is Binance a DEX?</div>
                <div className="news-bp">+250 BP</div>
              </div>
            </div>
            <button className="start-button">Start</button>
          </div>
        </div>
      </div>
    </>
  );
}

function MemopadPage() {
  return (
    <>
      <header className="header">
        <div className="header-title">Blum</div>
        <div>⋮</div>
      </header>
      <div className="memopad-content">
        <div className="memopad-header">
          <div className="token-info">
            <span className="token-name">DARK</span>
            <div className="token-stats">
              <span>9K</span>
              <span>5.4K</span>
            </div>
          </div>
          <div className="token-price">$478.3K</div>
        </div>

        <div className="memopad-tabs">
          <div className="memopad-tab active">New</div>
          <div className="memopad-tab">Hot</div>
          <div className="memopad-tab">Bluming</div>
          <div className="memopad-tab">Listed</div>
        </div>

        <div className="token-list">
          <div className="token-item">
            <div className="token-item-left">
              <div className="token-icon">BND</div>
              <div className="token-details">
                <div className="token-symbol">BND</div>
                <div className="token-holders">
                  <span>@1</span>
                  <span>2</span>
                </div>
              </div>
            </div>
            <div className="token-right">
              <div className="token-mc">MC $3.8K</div>
              <div className="token-time">3min</div>
            </div>
          </div>

          <div className="token-item">
            <div className="token-item-left">
              <div className="token-icon">KVN</div>
              <div className="token-details">
                <div className="token-symbol">KVN</div>
                <div className="token-holders">
                  <span>@1</span>
                  <span>3</span>
                </div>
              </div>
            </div>
            <div className="token-right">
              <div className="token-mc">MC $3.8K</div>
              <div className="token-time">3min</div>
            </div>
          </div>

          <div className="token-item">
            <div className="token-item-left">
              <div className="token-icon">TNKPR</div>
              <div className="token-details">
                <div className="token-symbol">TNKPR</div>
                <div className="token-holders">
                  <span>@4</span>
                  <span>5</span>
                </div>
              </div>
            </div>
            <div className="token-right">
              <div className="token-mc">MC $3.1K</div>
              <div className="token-time">3min</div>
            </div>
          </div>

          <div className="token-item">
            <div className="token-item-left">
              <div className="token-icon">HFG</div>
              <div className="token-details">
                <div className="token-symbol">HFG</div>
                <div className="token-holders">
                  <span>@3</span>
                  <span>5</span>
                </div>
              </div>
            </div>
            <div className="token-right">
              <div className="token-mc">MC $3.8K</div>
              <div className="token-time">4min</div>
            </div>
          </div>

          <div className="token-item">
            <div className="token-item-left">
              <div className="token-icon">HASH</div>
              <div className="token-details">
                <div className="token-symbol">HASH</div>
                <div className="token-holders">
                  <span>@1</span>
                  <span>2</span>
                </div>
              </div>
            </div>
            <div className="token-right">
              <div className="token-mc">MC $3.8K</div>
              <div className="token-time">4min</div>
            </div>
          </div>

          <div className="token-item">
            <div className="token-item-left">
              <div className="token-icon">KIDRAW</div>
              <div className="token-details">
                <div className="token-symbol">KIDRAW</div>
                <div className="token-holders">
                  <span>@1</span>
                  <span>3</span>
                </div>
              </div>
            </div>
            <div className="token-right">
              <div className="token-mc">MC $3.8K</div>
              <div className="token-time">4min</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ReferralModal({ onClose }) {
  const [copied, setCopied] = useState(false);
  const referralLink = `https://blum.com/ref/${Math.random().toString(36).substring(7)}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-title">Your Invitation Link</div>
        <div className="referral-code">
          <span style={{ fontSize: '14px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {referralLink}
          </span>
          <button className="copy-button" onClick={copyToClipboard}>
            {copied ? '✓' : '📋'}
          </button>
        </div>
        <div className="modal-buttons">
          <button className="modal-button share-button" onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: 'Join Blum',
                text: 'Join me on Blum!',
                url: referralLink
              });
            }
          }}>
            Share
          </button>
          <button className="modal-button close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function FrensPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-title">Blum</div>
        <div>⋮</div>
      </header>
      <div className="frens-content">
        <div className="frens-emoji">
          👨‍👨‍👦‍👦
        </div>
        <h1 className="frens-title">Invite frens. Earn points</h1>

        <div className="how-it-works">
          <h3>How it works</h3>
          <div className="steps-container">
            <div className="timeline"></div>
            
            <div className="step">
              <div className="step-title">Share your invitation link</div>
              <div className="step-description">Get a ▶️ play pass for each fren</div>
            </div>

            <div className="step">
              <div className="step-title">Your friends join Blum</div>
              <div className="step-description">And start farming points</div>
            </div>

            <div className="step">
              <div className="step-title">Score 10% from buddies</div>
            </div>
          </div>
        </div>

        <button className="invite-button" onClick={() => setShowModal(true)}>
          Invite a fren
        </button>
      </div>

      {showModal && <ReferralModal onClose={() => setShowModal(false)} />}
    </>
  );
}

function WalletPage() {
  return (
    <div className="wallet-page">
      <header className="header">
        <div className="header-title">Blum</div>
        <div>⋮</div>
      </header>

      <div className="wallet-content">
        <button className="connect-wallet-btn">Connect wallet</button>

        <div className="points-section">
          <div className="points-header">
            <h2>Points</h2>
            <span className="points-balance">$0</span>
          </div>

          <div className="wallet-tabs">
            <button className="wallet-tab active">Balances</button>
            <button className="wallet-tab">History</button>
          </div>

          <div className="earn-card">
            <div className="earn-left">
              <div className="earn-icons">
                <span className="diamond-icon">💎</span>
                <span className="warning-icon">⚠️</span>
              </div>
              <div className="earn-text">
                <p>Earn more in Drop game,</p>
                <p>Tasks and Quests.</p>
              </div>
            </div>
            <span className="arrow-icon">›</span>
          </div>

          <div className="balance-item">
            <div className="balance-left">
              <div className="token-icon blum-icon">B</div>
              <div className="balance-info">
                <div className="token-name">Blum points</div>
                <div className="token-balance">180.96 BP</div>
              </div>
            </div>
            <span className="farming-badge">Farming...</span>
          </div>

          <div className="balance-item">
            <div className="balance-left">
              <div className="token-icon pass-icon">🎮</div>
              <div className="balance-info">
                <div className="token-name">Play passes</div>
                <div className="token-balance">7 PP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomNavigation({ currentPage, setCurrentPage }) {
  return (
    <nav className="bottom-nav">
      <div 
        className="nav-item" 
        style={{color: currentPage === 'home' ? 'white' : '#666'}}
        onClick={() => setCurrentPage('home')}
      >
        <div className="nav-icon">⌂</div>
        Home
      </div>
      <div 
        className="nav-item"
        style={{color: currentPage === 'earn' ? 'white' : '#666'}}
        onClick={() => setCurrentPage('earn')}
      >
        <div className="nav-icon">💰</div>
        Earn
      </div>
      <div 
        className="nav-item"
        style={{color: currentPage === 'memopad' ? 'white' : '#666'}}
        onClick={() => setCurrentPage('memopad')}
      >
        <div className="nav-icon">📝</div>
        Memopad
      </div>
      <div 
        className="nav-item"
        style={{color: currentPage === 'frens' ? 'white' : '#666'}}
        onClick={() => setCurrentPage('frens')}
      >
        <div className="nav-icon">👥</div>
        Frens
      </div>
      <div 
        className="nav-item"
        style={{color: currentPage === 'wallet' ? 'white' : '#666'}}
        onClick={() => setCurrentPage('wallet')}
      >
        <div className="nav-icon">👛</div>
        Wallet
      </div>
    </nav>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="app-container">
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'earn' && <EarnPage />}
      {currentPage === 'memopad' && <MemopadPage />}
      {currentPage === 'frens' && <FrensPage />}
      {currentPage === 'wallet' && <WalletPage />}
      
      <BottomNavigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="copyright">Create for Sample</div>
    </div>
  );
}

export default App; 