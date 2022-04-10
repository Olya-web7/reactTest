import React from "react";
import './styles.scss';

const Header = props => {
  return (
    <header className="header">
      <div className="wrap">
      <div className='item'>
          <a href="www.google.com">WOMEN</a>
        </div>
        <div className='item'>
          <a href="www.google.com">MEN</a>
        </div>
        <div className='item'>
          <a href="www.google.com">KIDS</a>
        </div>
      </div>
    </header>
  )
}

export default Header;