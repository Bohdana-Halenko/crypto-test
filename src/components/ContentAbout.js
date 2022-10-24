import React from 'react';
import Chart from "../img/Chart.png";
import Mouse from "../img/Mouse.png";

function ContentAbout (props) {
  return (
    <div className="content-block1">
      <div className="content-block1__mouse">
        <img src={Mouse} alt="Mouse"/>
      </div>
      <div className="content-block1__title"
           data-aos="zoom-in"
      >
        <p className="content-block1__title-about">
          about us
        </p>
        <p className="content-block1__title-text">
          Global technologies
        </p>
      </div>
      <div className="content-block1__content">
        <div className="content-block1__content-left" data-aos="fade-up">

        </div>
        <div className="content-block1__content-left__mobile" data-aos="fade-up">
          <img src={Chart} alt="chart" className="content-block1__content-left__mobile-chart"/>
        </div>
        <div className="content-block1__content-right"
             data-aos="fade-down"
        >
          <div className="content-block1__content-stage">
            Level 1
          </div>
          <div className="content-block1__content-description">
            <div className="content-block1__content-arrow-blue">

            </div>
            Deploy a multi-legged futures strategy by simultaneously placing orders to buy and sell from the same order
            ticket.
          </div>
          <div className="content-block1__content-description-bottom">
            <div className="content-block1__content-arrow-red">

            </div>
            Place and manage orders based on the Level 2 order book, which provides a live display of all bids and
            offers waiting to be executed.
          </div>
          <button className="content-block1__content-right-button">
            Start Now
          </button>
        </div>
      </div>
    </div>
  )
};

export default ContentAbout;