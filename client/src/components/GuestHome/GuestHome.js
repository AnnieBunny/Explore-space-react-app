
import styles from './GuestHome.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const GuestHome = () => {

    return (
        <>
            <nav>
                <ul className={styles["nav-items"]}>
                    <li className={styles["login"]}><Link to="/login"><strong>Login</strong></Link></li>
                    <FontAwesomeIcon icon={faPlane} className={styles["plane-one"]} />
                    <li className={styles["register"]}><Link to="/register"><strong>Register</strong></Link></li>
                    <FontAwesomeIcon icon={faPlane} className={styles["plane-two"]} />

                    <li className={styles["about"]}><Link to="/about"><strong>About</strong></Link></li>
                    <FontAwesomeIcon icon={faPlane} className={styles["plane-three"]} />


                </ul>
            </nav>
            <header>
                <h1 className={styles["title"]}>
                    Explore Space!
                </h1>
            </header>

            <section className={styles["planets"]}>
                <article className={styles["earth-img"]}>
                    <img src="/EARTH.png" alt="earth-img" />
                </article>
                <article className={styles["mars-img"]}>
                    <img src="/MARS.png" alt="mars-img" />
                </article>

            </section>

        </>
    )
}

export default GuestHome;