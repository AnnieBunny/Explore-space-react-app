
import styles from "./UserHome.module.css";
import { FaUserAstronaut } from 'react-icons/fa';

const UserHome = () => {


    return (
        <>
            <nav className={styles['navigation']}>


                <ul>

                    <li>See space now!</li>
                    <li>My Posts</li>
                    <li>Add post</li>
                    <li>My Posts</li>
                    <li>Logout</li>




                </ul>
            </nav>


            <section className={styles['blog-cards']}>
                <article className={styles['card']}>
                    <h1>
                        Web Development Certificates
                    </h1>

                    <p>Acquired certificates and a diploma from the training at SoftUni (Software University) prove the
                        knowledge and skills you have acquired and must be presented to employers.</p>

                    <button className={styles['like-btn']}>LIKE!</button>
                    <button className={styles['details-btn']}>Details</button>


                </article>
                <article className={styles['card']}>
                    <h1>
                        Web Development Certificates
                    </h1>

                    <p>Acquired certificates and a diploma from the training at SoftUni (Software University) prove the
                        knowledge and skills you have acquired and must be presented to employers.</p>

                    <button className={styles['like-btn']}>LIKE!</button>
                    <button className={styles['details-btn']}>Details</button>



                </article>
                <article className={styles['card']}>
                    <h1>
                        Web Development Certificates
                    </h1>

                    <p>Acquired certificates and a diploma from the training at SoftUni (Software University) prove the
                        knowledge and skills you have acquired and must be presented to employers.Acquired certificates and a diploma from the training at SoftUni (Software University) prove the
                        knowledge and skills you have acquired and must be presented to employers.Acquired certificates and a diploma from the training at SoftUni (Software University) prove the
                        knowledge and skills you have acquired and must be presented to employers.</p>

                    <button className={styles['like-btn']}>LIKE!</button>
                    <button className={styles['details-btn']}>Details</button>



                </article>
                <article className={styles['card']}>
                    <h1>
                        title
                    </h1>

                    <p>lorem nfjregerkgvne.rugnjrgergeheergerg</p>

                    <button className={styles['like-btn']}>LIKE!</button>
                    <button className={styles['details-btn']}>Details</button>



                </article>
            </section>
        </>

    )
}

export default UserHome;