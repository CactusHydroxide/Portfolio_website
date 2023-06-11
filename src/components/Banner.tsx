import { FC } from "react";
import styles from '../styles/Banner.module.scss'
import imgUrl from '../public/banner_img.jpg'

const Banner: FC = () => {
    return (
        <div id={styles.bannerContainer}>
            <div id={styles.bannerImgContainer} >
                <div className={`${styles.bannerImgBlock} ${styles.bannerBg1}`}>
                    <div className={styles.square}></div>
                </div>
                <div className={`${styles.bannerImgBlock} ${styles.bannerBg2}`}>
                    <div className={styles.square}></div>
                </div>
                <div className={`${styles.bannerImgBlock} ${styles.bannerImg}`}>
                    <div className={styles.square}>
                        <img src={imgUrl} alt="My face" />
                    </div>
                </div>
                <div className={styles.square}>
                </div>
            </div>

            <div id={styles.bannerContent}>
                <span>Hello, my name is</span>
                <h1>Clement Loy</h1>
                <p>Something something subtitle subtitle. noise noise something something profit</p>
            </div>
        </div>
    )
}

export default Banner