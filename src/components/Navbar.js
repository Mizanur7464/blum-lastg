import React from 'react';

function Navbar() {
  return (
    <nav className="bottom-nav">
      <div className="nav-item">
        <i className="icon-home"></i>
        <span>Home</span>
      </div>
      <div className="nav-item">
        <i className="icon-earn"></i>
        <span>Earn</span>
      </div>
      <div className="nav-item">
        <i className="icon-memepad"></i>
        <span>Memepad</span>
      </div>
      <div className="nav-item">
        <i className="icon-frens"></i>
        <span>Frens</span>
      </div>
      <div className="nav-item">
        <i className="icon-wallet"></i>
        <span>Wallet</span>
      </div>
    </nav>
  );
}

export default Navbar; 