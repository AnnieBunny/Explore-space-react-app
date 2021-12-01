import styles from "./MyPosts.module.css";
import { Link } from 'react-router-dom'


const MyPosts = () => {


    return (
        <>
        


            <section className={styles['blog-cards']}>
                <article className={styles['card']}>
                    <h1>
                        Web Development Certificates
                    </h1>

                    <p>Acquired certificates and a diploma from the training at SoftUni (Software University) prove the
                        knowledge and skills you have acquired and must be presented to employers.</p>

                    <button className={styles['edit-btn']}>Edit</button>
                    <button className={styles['delete-btn']}>Delete</button>


                </article>
                <article className={styles['card']}>
                    <h1>
                        Web Development Certificates
                    </h1>

                    <p>Acquired certificates and a diploma from the training at SoftUni (Software University) prove the
                        knowledge and skills you have acquired and must be presented to employers.</p>

                        <button className={styles['edit-btn']}>Edit</button>
                    <button className={styles['delete-btn']}>Delete</button>



                </article>
                <article className={styles['card']}>
                    <h1>
                        Web Development Certificates
                    </h1>

                    <p>Acquired certificates and a diploma from the training at SoftUni (Software University) prove the
                        knowledge and skills you have acquired and must be presented to employers.Acquired certificates and a diploma from the training at SoftUni (Software University) prove the
                        knowledge and skills you have acquired and must be presented to employers.Acquired certificates and a diploma from the training at SoftUni (Software University) prove the
                        knowledge and skills you have acquired and must be presented to employers.</p>
                        <button className={styles['edit-btn']}>Edit</button>
                    <button className={styles['delete-btn']}>Delete</button>



                </article>
                <article className={styles['card']}>
                    <h1>
                        title
                    </h1>

                    <p>lorem nfjregerkgvne.rugnjrgergeheergerg</p>

                    <button className={styles['edit-btn']}>Edit</button>
                    <button className={styles['delete-btn']}>Delete</button>



                </article>
            </section>
        </>

    )
}

export default MyPosts;