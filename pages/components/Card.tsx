import Head from 'next/head'
import Image from 'next/image'
import { Manrope } from 'next/font/google'
import styles from '@/styles/Components.module.css'

const manrope = Manrope({ subsets: ['latin'] })

export default function Card() {
  return (
        <div className={styles.card}>
            <div className={styles.card_details}>
                <div>
                    <Image src="/favicon.svg" width={27} height={37} alt="slickinvest logo" />

                    <svg width="45" height="34" viewBox="0 0 45 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.7">
                            <rect x="1.27587" y="0.981861" width="42.5529" height="32.1267" rx="5.78928" fill="white" fill-opacity="0.26" stroke="white" stroke-width="1.2374"/>
                            <path d="M1.34174 10.6265H12.5065C14.276 10.6265 15.7104 12.061 15.7104 13.8305V18.6662M15.7104 33.0691V26.7058M15.7104 26.7058V18.6662M15.7104 26.7058H1.34174M15.7104 18.6662H1.34174" stroke="white" stroke-width="1.2374"/>                        <path d="M43.7636 10.6265H30.0791M30.0791 10.6265V18.6661M30.0791 10.6265V1.04736M30.0791 33.069V26.7058M30.0791 26.7058V18.6661M30.0791 26.7058H43.7636M30.0791 18.6661H43.7636" stroke="white" stroke-width="1.2374"/>
                        </g>
                    </svg>
                </div>

                <article>
                    <p>
                        <span>Card Number</span>
                        <p>6277 7654 2527 4778</p>
                    </p>

                    <p className={styles.card_details_bottom}>
                        <p>
                            <span>Card holder name</span>
                            <p>JOHN C.</p>
                        </p>

                        <p>
                            <span>Expiry date</span>
                            <p>02/30</p>
                        </p>
                    </p>
                </article>

            </div>

            <div className={styles.card_bg}>
                <div className={styles.card_bg_bottom}></div>
            </div>
        </div>
  )
}
