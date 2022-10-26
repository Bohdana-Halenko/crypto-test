import React from 'react';
import styles from './cards.module.scss';
import Numbers from '../../img/numbers.svg';
import Art from '../../img/art.svg';

export default function Cards() {
  return (
    <div style={{overflow: 'hidden', marginTop: '180px'}}>
      <div className={`wrapper ${styles.cards_wrapper}`}  data-aos="flip-down">
        <div className={styles.decorative_elements}>
          <div className={styles.circle_bottom_left}></div>
        </div>
        <div className={`${styles.card} ${styles.big_card}`}> 
          <div>
            <div className={styles.circle_top_left}></div>
            <img src={Numbers} alt="numbers background" />
          </div>
          <div>
            <p className={styles.title}>Spot & Margin</p>
            <h3 className={styles.headline}>
              Trade <span className={styles.word200}>200+</span> pairs with up <br />
              to 10x leverage
            </h3>
            <a href="/#" className={styles.link}>Learn more</a>
            <div className={styles.circle_bottom_right}></div>
          </div>
        </div>
        <div className={`${styles.card} ${styles.small_card}`}>
          <p className={styles.title}>Derivatives</p>
          <h3 className={styles.headline}>
            40+ quarterly futures and contracts
          </h3>
          <a href="/#" className={styles.link}>Learn more</a>
          <div className={styles.circle_bottom_right}></div>
        </div>
        <div className={`${styles.card} ${styles.small_card}`}>
          <p className={styles.title}>Trading arena</p>
          <h3 className={styles.headline}>
            Prize pools worth up to <span className={styles.fw500}>USD 1,000,000</span>
          </h3>
          <a href="/#" className={styles.link}>Learn more</a>
          <div className={styles.circle_bottom_right}></div>
        </div>
        <div className={`${styles.card} ${styles.large_card}`}>
          <div>
            <p className={styles.title}>Mobile app</p>
            <h3 className={styles.headline}>
              Trade anytime, <span className={styles.fw500}>anywhere</span>
            </h3>
            <a href="/#" className={styles.link}>Learn more</a>
          </div>
          <div>
            <img src={Art} alt="art background" />
          </div>

          <div className={styles.circle_top_left}></div>
          <div className={styles.circle_bottom_right}></div>
        </div>
      </div>
    </div>
  )
}