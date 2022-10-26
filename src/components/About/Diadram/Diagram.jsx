import React from 'react';
import styles from './diagram.module.scss';

export default function Diagram() {
  return (
    <div className={styles.diagram} data-aos="fade-right">
      <div className={styles.line_container}>
        <svg className={styles.solid} width="4px" height="465px" viewBox="0 0 4 469" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2V467.017" stroke="url(#paint0_linear_1503_97)" strokeOpacity="0.9" strokeWidth="3" strokeLinecap="round"/>
          <defs>
          <linearGradient id="paint0_linear_1503_97" x1="2" y1="-91.8767" x2="2" y2="558.711" gradientUnits="userSpaceOnUse">
          <stop offset="0.015625" stopColor="#0C0A17"/>
          <stop offset="0.484375" stopColor="#3874FF"/>
          <stop offset="1" stopColor="#0B0A13"/>
          </linearGradient>
          </defs>
        </svg>

        <svg className={styles.dashed} width="4" height="456" viewBox="0 0 4 456" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2.00854V454.009" stroke="url(#paint0_linear_1503_94)" strokeOpacity="0.4" strokeWidth="3" strokeLinecap="round" strokeDasharray="10 10"/>
          <defs>
          <linearGradient id="paint0_linear_1503_94" x1="2.5" y1="2.00854" x2="2.5" y2="454.009" gradientUnits="userSpaceOnUse">
          <stop offset="0.0260417" stopColor="#0B0B0F"/>
          <stop offset="0.505208" stopColor="#2163FF"/>
          <stop offset="1" stopColor="#0B0A13"/>
          </linearGradient>
          </defs>
        </svg>
        <svg className={styles.dashed} width="4" height="456" viewBox="0 0 4 456" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2.00854V454.009" stroke="url(#paint0_linear_1503_94)" strokeOpacity="0.4" strokeWidth="3" strokeLinecap="round" strokeDasharray="10 10"/>
          <defs>
          <linearGradient id="paint0_linear_1503_94" x1="2.5" y1="2.00854" x2="2.5" y2="454.009" gradientUnits="userSpaceOnUse">
          <stop offset="0.0260417" stopColor="#0B0B0F"/>
          <stop offset="0.505208" stopColor="#2163FF"/>
          <stop offset="1" stopColor="#0B0A13"/>
          </linearGradient>
          </defs>
        </svg>
        <svg className={styles.dashed} width="4" height="456" viewBox="0 0 4 456" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2.00854V454.009" stroke="url(#paint0_linear_1503_94)" strokeOpacity="0.4" strokeWidth="3" strokeLinecap="round" strokeDasharray="10 10"/>
          <defs>
          <linearGradient id="paint0_linear_1503_94" x1="2.5" y1="2.00854" x2="2.5" y2="454.009" gradientUnits="userSpaceOnUse">
          <stop offset="0.0260417" stopColor="#0B0B0F"/>
          <stop offset="0.505208" stopColor="#2163FF"/>
          <stop offset="1" stopColor="#0B0A13"/>
          </linearGradient>
          </defs>
        </svg>
      </div>

      <div className={styles.verticalLine_container}>
        <svg className={styles.solid} width="4px" height="492px" viewBox="0 0 4 469" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2V467.017" stroke="url(#paint0_linear_1503_97)" strokeOpacity="0.9" strokeWidth="3" strokeLinecap="round"/>
            <defs>
            <linearGradient id="paint0_linear_1503_97" x1="2" y1="-91.8767" x2="2" y2="558.711" gradientUnits="userSpaceOnUse">
            <stop offset="0.015625" stopColor="#0C0A17"/>
            <stop offset="0.484375" stopColor="#3874FF"/>
            <stop offset="1" stopColor="#0B0A13"/>
            </linearGradient>
            </defs>
        </svg>
      </div>

      <div className={styles.line_container_first}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.line_container_second}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.numbers}>
        <p>10</p>
        <p>20</p>
        <p>30</p>
        <p>40</p>
      </div>
    </div>
  )
}