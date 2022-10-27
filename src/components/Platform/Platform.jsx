import React from 'react'
import styles from './platform.module.scss'

export default function Platform() {
  return (
    <div className={styles.digitalWrapper}>
        <div className={styles.decorative_elements}>
          <div className={styles.circle_top_right}></div>
          <div className={styles.circle_bottom_left}></div>
          <div className={styles.ellipse}></div>
        </div>

        <div className={styles.blockSchema_container} data-aos="fade-right">
          <div className={ `${styles.blur} ${styles.first_cont}` }>
            <div className={styles.block}>
              <p>Artificial Intelligence</p>
            </div>
            <div className={styles.block}>
              <p>Storage Networks</p>
            </div>
            <div className={styles.block}>
              <p>P2P Networks</p>
            </div>
          </div>

          <div className={styles.second_cont}>
            <div className={styles.block}>
              <p>Public Data</p>
            </div>
            <div className={styles.block}>
              <p>Encrypted Private Data *</p>
            </div>
          </div>

          <div className={`${styles.blur} ${styles.third_cont}`}>
            <div className={styles.logo_cont}>
              <svg className={styles.digital} width="65" height="68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#a)">
                  <path fillRule="evenodd" clipRule="evenodd" d="m25.52 26.912-6.59 3.78v12.843l4.288 2.45 3.756-2.17c.318.21.744.21 1.098.033.531-.315.744-.98.425-1.504a1.145 1.145 0 0 0-.677-.511 1.16 1.16 0 0 0-.846.09c-.355.21-.567.596-.532.98l-3.224 1.822-2.657-1.505 6.058-3.465 1.063.63 1.594.91 1.063.595 10.7-6.089c.318.21.743.21 1.133 0 .532-.28.709-.945.39-1.47a1.16 1.16 0 0 0-1.523-.42c-.355.21-.532.595-.532.98l-8.29 4.69-1.88 1.085-2.373-1.365-4.393-2.52v-2.834l6.59 3.78.708-.385 10.734-6.125v-.42l-.177-4.2-3.755-2.133c0-.21-.071-.385-.142-.56a1.13 1.13 0 0 0-1.703-.296 1.092 1.092 0 0 0 .039 1.708 1.126 1.126 0 0 0 1.24.093v-.033l3.259 1.854.106 2.94-6.2-3.534v-4.098L23.606 16.45c0-.21-.07-.385-.177-.56-.283-.525-.956-.7-1.488-.42a1.107 1.107 0 0 0-.528.666c-.08.282-.043.584.103.839s.388.443.674.522c.285.078.591.042.85-.102v-.034l6.66 3.815 3.506 1.992v7.524l-2.303 1.33v-7.56l-3.507-1.994-6.66-3.78-1.099-.63-4.285 2.45v4.27l-.034.033c-.496.28-.708.945-.39 1.47a1.16 1.16 0 0 0 1.524.42 1.1 1.1 0 0 0 .513-.672 1.08 1.08 0 0 0-.123-.833 1.216 1.216 0 0 0-.425-.42v-3.638l2.515-1.433v6.894l-.78.455-1.736.98-1.062.63v12.178h-.034c-.496.315-.709.98-.39 1.505a1.096 1.096 0 0 0 .68.506 1.117 1.117 0 0 0 .844-.122c.53-.28.708-.944.39-1.47a1.213 1.213 0 0 0-.426-.42V29.258l6.625-3.744 2.476 1.4Zm-5.527 4.41 6.058-3.465v2.834l-3.577 2.03v4.69l3.046 1.715-5.526 3.15-.002-10.954Zm9.813.875-2.657-1.505v-4.06l-4.11-2.38-3.047 1.75v-6.509l9.814 5.6v7.104Zm-5.704.84 2.515-1.434 3.543 2.065 4.11-2.345v-3.466l5.702 3.22L30.16 36.5l-6.058-3.465Z"/>
                </g>
                <defs>
                  <filter id="a" x=".355" y=".915" width="63.999" height="66.703" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="3.606" dy="3.606"/><feGaussianBlur stdDeviation="9.014"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.56 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1503_153"/>
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1503_153" result="shape"/>
                  </filter>
                </defs>
              </svg>
              <p>
                Easy to use digital service and exclusive personal service for our active traders
              </p>
            </div>
            <div className={styles.block_box}>
              <div className={styles.block}>
                <p>Indexing</p>
              </div>
              <div className={styles.block}>
                <p>API</p>
              </div>
            </div>

            <div className={styles.consumers}>
              <div>
                <svg width="12" height="90" viewBox="0 0 12 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line opacity="0.8" x1="6.36912" y1="83.1189" x2="6.36911" y2="0.190918" stroke="url(#paint0_linear_1542_3)" strokeWidth="1.80278"/>
                  <path d="M1.05591 83.7108L6.15494 88.8099L11.254 83.7108" stroke="#B1B2BA" strokeWidth="1.35209"/>
                  <defs>
                  <linearGradient id="paint0_linear_1542_3" x1="7.27051" y1="83.1189" x2="7.2705" y2="-1.67263" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F1F1F1"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                  </linearGradient>
                  </defs>
                </svg>
                <svg width="12" height="90" viewBox="0 0 12 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line opacity="0.8" x1="6.36912" y1="83.1189" x2="6.36911" y2="0.190918" stroke="url(#paint0_linear_1542_3)" strokeWidth="1.80278"/>
                  <path d="M1.05591 83.7108L6.15494 88.8099L11.254 83.7108" stroke="#B1B2BA" strokeWidth="1.35209"/>
                  <defs>
                  <linearGradient id="paint0_linear_1542_3" x1="7.27051" y1="83.1189" x2="7.2705" y2="-1.67263" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F1F1F1"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                  </linearGradient>
                  </defs>
                </svg>
              </div>
              <p>Consumers</p>
            </div>
          </div>

        </div>
        <div className={styles.content} data-aos="fade-left">
          <h2>The future <span className={styles.wordOf}>of</span> Cryptocurrency trading <span className={styles.wordPlatform}>platform</span></h2>
          <p>Take advantage of time and sales, futures spread orders and depth trader — plus, trade directly from charts.</p>
          <a href="/#">Learn more</a>
        </div>
    </div>
  )
}