
import styles from './About.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faMeteor } from '@fortawesome/free-solid-svg-icons'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

const About = () => {

    return (
        <>
            <section className={styles["container"]}>

                <FontAwesomeIcon icon={faStar} className={styles["first-star"]} />
                <FontAwesomeIcon icon={faStar} className={styles["forth-star"]} />
                <FontAwesomeIcon icon={faMeteor} className={styles["first-meteor"]} />
                <FontAwesomeIcon icon={faMeteor} className={styles["second-meteor"]} />

                <article className={styles['carousel-container']}>

                    <Carousel className={styles['carousel']} fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-100"
                                src="https://c4.wallpaperflare.com/wallpaper/967/372/978/gray-simple-background-gradient-wallpaper-thumb.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3 className={styles['first-slide-label']}>Blog page</h3>
                                <p>You can post, like, edit and delete your own posts.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-100"
                                src="https://c4.wallpaperflare.com/wallpaper/967/372/978/gray-simple-background-gradient-wallpaper-thumb.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3 className={styles['first-slide-label']}>NASA picture</h3>
                                <p>You can see every single day a picture with details from NASA.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-100"
                                src="https://c4.wallpaperflare.com/wallpaper/967/372/978/gray-simple-background-gradient-wallpaper-thumb.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3 className={styles['first-slide-label']}>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </article>



                <ul className={styles["user-login-register"]}>
                    <li className={styles["login-btn"]}><Link to="/login">Login</Link></li>
                    <li className={styles["register-btn"]} ><Link to="/register">Register</Link></li>
                </ul>

            </section>
        </>
    )
}


export default About;