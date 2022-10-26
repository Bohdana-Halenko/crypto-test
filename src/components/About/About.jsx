import React from 'react';
import styles from './about.module.scss';
import Diagram from './Diadram/Diagram';
import Circle from '../../img/big_circle.svg';

export default function About() {
  return (
    <div className={`wrapper ${styles.about_wrapper}`}>
      <div className={styles.decorative_elements}>
        <div className={styles.circle_top_right}></div>
        <div className={styles.circle_bottom_left}></div>
        <img src={Circle} alt="decorative circle" />
      </div>
      <div className={styles.headline_container}>
        <p id='about' className={styles.headline}>about us</p>
        <h2 className={styles.title}>Global technologies</h2>
      </div>

      <div className={styles.container}>
        <Diagram />
        <div className={styles.content} data-aos="fade-left">
          <p className={styles.content_title}>Level 1</p>
          <ul className={styles.list}>
            <li>
              Deploy a multi-legged futures strategy by simultaneously placing orders to buy and sell from the same order ticket.
            </li>
            <li>
              Place and manage orders based on the Level 2 order book, which provides a live display of all bids and offers waiting to be executed.
            </li>
          </ul>
          <button className={styles.button}>start now</button>
        </div>
      </div>
    </div>
  )
}