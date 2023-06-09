import { useEffect, FC, useState } from 'react'
import styles from '../styles/Navbar.module.scss'
import { GoListUnordered } from 'react-icons/go'

const NavBar: FC = () => {
    const [navInView, setNavInView] = useState<boolean>(false)
    const [navCollapse, setNavCollapse] = useState<boolean>(true)
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

    let showCollapsedClassName = `${!navCollapse && styles.showCollapsedItem}`

    return (
        <div className={`${styles.navbarContainer} ${navInView && styles.show} ${showCollapsedClassName}`}>
            <div className={styles.logo}>
                <h3>Clement Loy</h3>
            </div>
            <ul className={`${styles.nav}`}>
                <li>
                    <GoListUnordered className={styles.navListIcon} onClick={() => { setNavCollapse(current => !current) }} />
                </li>
                <li className={showCollapsedClassName}>
                    <p>About</p>
                </li>
                <li className={showCollapsedClassName}>
                    <p>Skills</p>
                </li>
                <li className={showCollapsedClassName}>
                    <p>Experience</p>
                </li>
                <li className={showCollapsedClassName}>
                    <p>Contact</p>
                </li>
            </ul>
        </div >
    )
}

export default NavBar