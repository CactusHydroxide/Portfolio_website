import { FC } from "react"
import styles from "../styles/Contact.module.scss"

const Contact: FC = () => {
    return (
        <div id={styles.contactContainer}>
            <div id={styles.contactLeft}>
                <h2>Get it touch!</h2>
                <p>Looking to launch a website? Looking for a developer for your next big project? My inbox is always open for the next opportunity!</p>
                <button>Email me!</button>
            </div>
            <div id={styles.contactRight}>
                <h3>Socials</h3>
                <ul>
                    <li>Github</li>
                    <li>Email</li>
                    <li>LinkedIn (Coming Soon)</li>
                    <li>Youtube (Coming Soon)</li>
                </ul>
            </div>
        </div>
    )
}

export default Contact