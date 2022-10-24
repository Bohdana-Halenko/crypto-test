import React from 'react';
import Logo from "../img/Logo.png";
import Arrow from "../img/Arrow.png";


function Header (props) {
  return (
    <div className="container">
      <div className="header">
        <div className="header__logo">
          <img src={Logo} alt="Logo"/>
        </div>
        <div className="header__mobile-menu">
          <section className="top-nav">
            <input id="menu-toggle" type="checkbox"/>
            <label className='menu-button-container' htmlFor="menu-toggle">
              <div className='menu-button'></div>
            </label>
            <ul className="menu">
              <li>Activities</li>
              <li>Technology</li>
              <li>R&D</li>
              <li>Community</li>
              <li>
                <button className="header__nav-button">
                Career
                <img src={Arrow} alt="Arrow" className="header__nav-button-arrow"/>
                </button>
              </li>
            </ul>
          </section>
        </div>
        <div className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="/#">Activities</a>
            </li>
            <li className="header__nav-item">
              <a href="/#">Technology</a>
            </li>
            <li className="header__nav-item">
              <a href="/#">R&D</a>
            </li>
            <li className="header__nav-item">
              <a href="/#">Community</a>
            </li>
            <li>
              <button className="header__nav-button">
                Career
                <img src={Arrow} alt="Arrow" className="header__nav-button-arrow"/>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="header__description__crypto">
        crypto trading
      </div>
      <div className="header__description animate__animated animate__backInDown">
        <span className="header__description-title">Engineers Meet</span> <span className="header__description-subtitle">
        Traders __</span>
      </div>
      <p className="header__description-text animate__animated animate__backInUp">
        Advanced crypto algorithmic trading and efficient
        cross-chain execution, at scale.
      </p>
      <div className="header__bottom">
        <button className="header__button animate__animated animate__zoomIn">
          Learn More
          <div className="header__bottom-arrow">
            <p><i className="arrow down"></i></p>
          </div>
        </button>
      </div>
    </div>
  )
};

export default Header;