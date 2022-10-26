import React from 'react'
import styles from './header.module.scss'
import Background from '../../img/header-bg.png'
import Schema from '../../img/block-schema.png'

export default function Header() {
  return (
    <header data-aos="fade-down" data-aos-duration="1500">
      <div className={styles.bgImage_container}>
        <img  src={Background} alt="background" className={styles.background_image}/>
      </div>
      <div className={`wrapper ${styles.header_wrapper}`}>
        <div className={styles.decorative_elements}>
          <div className={styles.circle_top_left}></div>
          <div className={styles.circle_bottom_right}></div>
        </div>
        <div className={styles.content}>
          <h1 className={styles.topic}>crypto trading</h1>
          <p className={styles.headline}>
            Engineers meet <span className={styles.span_blue}>Traders <sub>&ndash;</sub></span>
          </p>
          <p className={styles.text}>
            Advanced crypto algorithmic trading and efficient<br /> 
            cross-chain execution, at scale.
          </p>
        </div>  
        <button className={styles.button}>
          Learn more
          <div className={styles.circle}>
            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.25 1.75L6.75 7.25L1.25 1.75" stroke="#1556EE" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </button>      
      </div>
      <img src={Schema} alt="block-schema" className={styles.block_schema} />
      <div className={styles.middle}>
        <div className={styles.mouse}></div>
      </div>
    </header>
  )
}