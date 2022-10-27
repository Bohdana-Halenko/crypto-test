import React, { useState } from 'react'
import styles from './nav.module.scss'


export default function Nav() {
  const [burgerActive, setBurgerActive] = useState(false)
  return (
    <nav className='wrapper'>
      <div className={styles.decorative_elements}>
        <div className={styles.circle_top_left}></div>
        <div className={styles.circle_bottom_right}></div>
      </div>
      <div className={styles.nav_container}>
        <a href='/#' className={`${styles.link} ${styles.logo}`}>C</a>
        <div className={burgerActive ? `${styles.navbar} ${styles.active}` : styles.navbar} >
          <a href="#activities" className={styles.link}>activities</a>
          <a href="#technology" className={styles.link}>technology</a>
          <a href="#r&d" className={styles.link}>R&D</a>
          <a href="#community" className={styles.link}>community</a>
          <button className={styles.button}>
            Career
            <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5858 2L0.63604 11.9497C0.245515 12.3403 0.245515 12.9734 0.63604 13.364C1.02656 13.7545 1.65973 13.7545 2.05025 13.364L12 3.41421V9C12 9.55228 12.4477 10 13 10C13.5523 10 14 9.55228 14 9V2C14 0.89543 13.1046 0 12 0H5C4.44772 0 4 0.447715 4 1C4 1.55228 4.44772 2 5 2H10.5858Z" fill="black"/>
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.burger} onClick={ () => setBurgerActive(!burgerActive) }>
        <div className={burgerActive ? styles.active : null}></div>
        <div className={burgerActive ? styles.active : null}></div>
      </div>
    </nav>
  )
}