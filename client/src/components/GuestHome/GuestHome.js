
import styles from './GuestHome.module.css'

const GuestHome =() => {

    return(
        <>
        <nav>
        <ul className={styles["nav-items"]}>
            <li className={styles["login"]}><a href="#">Login</a></li>
            <i className={styles["fas fa-plane"]}></i>
            <li className={styles["register"]}><a href="#">Register</a></li>
            <i className={styles["fas fa-plane register"]}></i>
        </ul>
    </nav>
    <header>
         <h1 className={styles["title"]}>
        Explore the Space!
    </h1>
    </header>
   
    <section className={styles["planets"]}>
        <article className={styles["earth-img"]}>
            <img src="./images/EARTH.png" alt="earth-img" />
        </article>
        <article className={styles["mars-img"]}>
            <img src="./images/MARS.png" alt="mars-img" />
        </article>

    </section>

    </>
    )
}

export default GuestHome;