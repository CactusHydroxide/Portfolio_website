import { FC, useEffect, useState } from "react"
import styles from "../styles/Contact.module.scss"
import { FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa"
import { useIntersection } from "@mantine/hooks"

interface Props {
    containerRef: React.MutableRefObject<HTMLDivElement>
}

const Contact: FC<Props> = ({ containerRef }) => {
    const [fadeIn, setFadeIn] = useState<boolean>(false)
    const { ref, entry } = useIntersection({
        root: containerRef.current,
        threshold: 1
    })

    useEffect(() => {
        if (entry?.isIntersecting) {
            setFadeIn(true)
        }
    }, [entry])

    return (
        <div id={styles.contactContainer}>
            {/* 
            // TODO: give some div height
            // TODO: bottom trigger 
            */}
            <div ref={ref} className="fadeInTrigger" />
            <div id={styles.contactLeft} className={`${fadeIn && styles.inView}`}>
                <h2>Get in touch!</h2>
                <p>Looking to launch a website? Looking for a developer for your next big project? My inbox is always open for the next opportunity!</p>
                <button>Let's Chat!</button>
            </div>
            <div id={styles.contactRight} className={`${fadeIn && styles.inView}`}>
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