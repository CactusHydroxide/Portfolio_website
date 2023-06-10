import { FC } from "react"
import styles from "../styles/Contact.module.scss"
import { FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa"

const Contact: FC = () => {
    return (
        <div id={styles.contactContainer}>
            <div id={styles.contactLeft}>
                <h2>Get in touch!</h2>
                <p>Looking to launch a website? Looking for a developer for your next big project? My inbox is always open for the next opportunity!</p>
                <button>Let's Chat!</button>
            </div>
            <div id={styles.contactRight}>
                <div id={styles.squareRatio}></div>
                <div id={styles.squareContent}>
                    <h2>Socials</h2>
                    <ul>
                        <li>
                            <FaGithub />
                            <a>Github</a>
                        </li>
                        <li>
                            <FaEnvelope />
                            <a>Email</a>
                        </li>
                        <li>
                            <FaLinkedinIn />
                            <a>LinkedIn</a>
                        </li>
                        {/* <li>Youtube (Coming Soon)</li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact