import { Dispatch, FC, SetStateAction, useEffect } from 'react'
import styles from '../styles/InitialLoad.module.scss'


const InitialLoad: FC<{ setInitRender: Dispatch<SetStateAction<boolean>> }> = ({ setInitRender }) => {

    useEffect(() => {
        let el = document.getElementById('loadAnimationContainer')
        if (el !== null) {
            el.addEventListener('animationend', () => {
                setInitRender(false)
            }, { once: true })
        }
    }, [])

    return (
        <div className={styles.container} id='loadAnimationContainer'>
            <div>
                <h1>Clement Loy</h1>
                <p>Hello!</p>
            </div>
        </div>
    )
}

export default InitialLoad