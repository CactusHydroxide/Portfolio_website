import { FC } from "react";
import styles from '../styles/Banner.module.scss'

const Banner: FC = () => {
    return (
        <div id={styles.bannerContainer}>
            <div id={styles.bannerImgContainer} >
                <div className={`${styles.bannerImgBlock} ${styles.bannerBg1}`}></div>
                <div className={`${styles.bannerImgBlock} ${styles.bannerBg2}`}></div>
                <div className={`${styles.bannerImgBlock} ${styles.bannerImg}`}></div>
            </div>

            <div id={styles.bannerContent}>
                <p>Hello, my name is</p>
                <h1>Clement Loy</h1>
                <p>Something something subtitle subtitle. noise noise something something profit</p>
            </div>
        </div>
    )
}

export default Banner