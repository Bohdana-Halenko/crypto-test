import React from 'react'
import Consumers from "../img/Consumers-mobile.png"

function ContentFuture (props) {
  return (
    <div className="content-block2">
      <div className="content-block2__left" data-aos="fade-up">

      </div>
      <div className="content-block2__left-mobile" data-aos="fade-up">
        <img src={Consumers} alt="Consumers" className="content-block2__left-mobile__img"/>
      </div>
      <div className="content-block2__right" data-aos="fade-down">
        <p className="content-block2__title">
          The future <span className="content-block2__gray">of</span> Cryptocurrency
          trading <span className="content-block2__gradient">platform</span>
        </p>
        <p className="content-block2__subtitle">
          Take advantage of time and sales, futures spread orders and depth trader — plus, trade directly from charts.
        </p>
        <p className="content-block2__more">
          <a href="/#">Learn more
</a>
        </p>
      </div>
    </div>
  )
};

export default ContentFuture;