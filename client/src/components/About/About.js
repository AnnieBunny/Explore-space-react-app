
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

                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.mos.cms.futurecdn.net/KYEJp9vem3QQFGhi25SYx4-1200-80.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
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