import { useEffect, FC, useState } from 'react'
import styles from '../styles/Navbar.module.scss'
import { GoListUnordered } from 'react-icons/go'

const NavBar: FC = () => {
    const [navInView, setNavInView] = useState<boolean>(false)
    const [navCollapse, setNavCollapse] = useState<boolean>(true)
    const [prevTop, setPrevTop] = useState<number>(0)
    const [currentTop, setCurrentTop] = useState<number>(0)

    /*
        * Initial Render
        * Sets navstate to true for initial slide in
        * Adds scroll event listener to document
    */
    useEffect(() => {
        setNavInView(true)
        document.addEventListener('scroll', () => {
            setCurrentTop(document.documentElement.scrollTop)
            setTimeout(() => { }, 500)
        })
    }, [])

    // * Update navInView based of scroll direction
    useEffect(() => {
        if (currentTop > prevTop) {
            setNavInView(false)
            setNavCollapse(true)
        }
        else { setNavInView(true) }
        setPrevTop(currentTop)
    }, [currentTop])

    const touchHandling: React.TouchEventHandler = (e) => {
        let moduleStyleName = styles.touch
        const el = e.currentTarget as HTMLElement
        el.classList.add(moduleStyleName)

        el.addEventListener('touchend', () => {
            el.classList.remove(moduleStyleName)
        })
    }

    let showCollapsedClassName = `${!navCollapse && styles.showCollapsedItem}`

    return (
        <div className={`${styles.navbarContainer} ${navInView && styles.show} ${showCollapsedClassName}`}>
            <div className={styles.logo}>
                <h3>Clement Loy</h3>
            </div>
            <ul className={`${styles.nav}`}>
                <li onTouchStart={touchHandling}>
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




            {/* ! DEBUGGING ONLY */}
            {/* <button
                onClick={() => setNavInView(false)}
                style={{
                    position: 'fixed',
                    bottom: '150px',
                    right: '150px'
                }}
            >
                hideNav
            </button> */}
        </div >
    )
}

export default NavBar