import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiWallet } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { BsCoin } from 'react-icons/bs';
import { RiGamepadLine } from 'react-icons/ri';

function Navbar() {
  return (
    <nav className="bottom-nav">
      <div className="nav-item">
        <AiOutlineHome />
        <span>Home</span>
      </div>
      <div className="nav-item">
        <BsCoin />
        <span>Earn</span>
      </div>
      <div className="nav-item">
        <RiGamepadLine />
        <span>Memepad</span>
      </div>
      <div className="nav-item">
        <FiUsers />
        <span>Frens</span>
      </div>
      <div className="nav-item">
        <BiWallet />
        <span>Wallet</span>
      </div>
    </nav>
  );
}

export default Navbar; 