import React from 'react';

function ContentCards (props) {
  return (
    <div className="content-block3">
      <div data-aos="flip-down" className="content-block3__spot-margin">
        <p className="content-block3__title">
          Spot & Margin
        </p>
        <div className="content-block3__spot-margin-subtitle">
          Trade <span className="content-block3__spot-margin-subtitle-gradient">200+</span>
          <p>
            pairs with up
          </p>
          <p>
            to 10x leverage
          </p>
        </div>
        <p className="content-block3__more">
          <a href="/#">Learn more</a>
        </p>
      </div>
      <div className="content-block3__right">
        <div data-aos="flip-down" className="content-block3__derivatives">
          <p className="content-block3__title">
            Derivatives
          </p>
          <div className="content-block3__right-title">
            <b>40+</b> quarterly futures and contracts
          </div>
          <p className="content-block3__more">
            <a href="/#">Learn more</a>
          </p>
        </div>
        <div data-aos="flip-down" className="content-block3__trading-arena">
          <p className="content-block3__title">
            Trading Arena
          </p>
          <div className="content-block3__right-title__block2">
            Prize pools worth up to <b>USD 1,000,000</b>
          </div>
          <p className="content-block3__more">
            <a href="/#">Learn more</a>
          </p>
        </div>
        <div data-aos="flip-down" className="content-block3__mobile-app">
          <p className="content-block3__title">
            mobile app
          </p>
          <div className="content-block3__right-title__block3">
            Trade anytime, <b>anywhere</b>
          </div>
          <p className="content-block3__more">
            <a href="/#">Learn more</a>
          </p>
        </div>
      </div>
    </div>
  )
};

export default ContentCards;