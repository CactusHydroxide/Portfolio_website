import { FC } from "react"
import styles from '../styles/Footer.module.scss'

const Footer: FC = () => {
    return (
        <div className={styles.footerContainer} id="footer">
            <p>
                Clement Loy (c) 2023
            </p>
        </div>
    )
}

export default Footer