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
          learn more
          <div className={styles.circle}>
            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.25 1.75L6.75 7.25L1.25 1.75" stroke="#1556EE" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </button>      
      </div>
      <img src={Schema} alt="block-schema" className={styles.block_schema} />
      <a href="#about" className={styles.mouse}>
        <svg width="18" height="30" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="15" height="27" rx="7.5" stroke="#E9E9E9" strokeWidth="2"/>
          <path d="M8.5 6V10" stroke="#E9E9E9" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </a>
    </header>
  )
}