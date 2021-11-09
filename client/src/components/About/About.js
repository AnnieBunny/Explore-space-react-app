
import styles from './About.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faMeteor } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

const About = () => {

    return(
        <>
        <section className={styles["container"]}>
        <article className={styles["container-img"]}>
            <img src="/space-img.jpg" alt="space-img"/>
        </article>
        <FontAwesomeIcon icon={faStar} className={styles["first-star"]} />
        <FontAwesomeIcon icon={faStar} className={styles["second-star"]} />
        <FontAwesomeIcon icon={faStar} className={styles["third-star"]} />
        <FontAwesomeIcon icon={faStar} className={styles["forth-star"]} />
        <FontAwesomeIcon icon={faMeteor} className={styles["first-meteor"]} />
        <FontAwesomeIcon icon={faMeteor} className={styles["second-meteor"]} />

    

        <ul className={styles["user-login-register"]}>
            <li className={styles["login-btn"]}><Link to="/login">Login</Link></li>
            <li className={styles["register-btn"]} ><Link to="/register">Register</Link></li>
        </ul>
        <article className={styles["container-text"]}>
            <p className={styles["text-content"]}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quam sapiente natus, voluptatum
                consequatur deserunt doloribus asperiores obcaecati, tempore itaque exercitationem ullam consectetur
                harum totam neque commodi assumenda beatae ab iure dolores laborum. Eligendi voluptatem corrupti
                molestiae, nulla aliquid accusamus. Quae cupiditate minima ad eaque omnis quod facere officia itaque.

            </p>
        </article>
    </section>
        </>
    )
}


export default About;