import { useEffect, FC, useState } from 'react'
import styles from '../styles/Navbar.module.scss'

const NavBar: FC = () => {
    const [navInView, setNavInView] = useState<boolean>(false)
    const [prevTop, setPrevTop] = useState<number>(0)
    const [currentTop, setCurrentTop] = useState<number>(0)

    useEffect(() => {
        setNavInView(true)
        document.addEventListener('scroll', () => {
            setCurrentTop(document.documentElement.scrollTop)
            setTimeout(() => { }, 500)
        })
    }, [])

    useEffect(() => {
        // update navInView based of scroll direction
        currentTop > prevTop ? setNavInView(false) : setNavInView(true)
        setPrevTop(currentTop)
    }, [currentTop])

    return (
        <div className={`${styles.navbarContainer} ${navInView && styles.show}`}>
            <div className={styles.logo}>
                <h3>Clement Loy</h3>
            </div>
            <ul className={styles.nav}>
                <li>
                    <p>About</p>
                </li>
                <li>
                    <p>Skills</p>
                </li>
                <li>
                    <p>Experience</p>
                </li>
                <li>
                    <p>Contact</p>
                </li>
            </ul>
        </div >
    )
}

export default NavBar