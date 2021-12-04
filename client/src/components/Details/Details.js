
import styles from './Details.module.css';

const Details = () => {

    return (

        <section className={styles['details-container']}>
            <article className={styles['details-post']}>
                <p className={styles['details-post-title']}>Definition and Usage</p>
                <p className={styles['details-post-text']}>
                    he overflow property specifies what should happen if content overflows an element's box.
                    This property specifies whether to clip content or to add scrollbars when an element's content is too big to fit in a specified area.
                    Note: The overflow property only works for block elements with a specified height.
                    he overflow property specifies what should happen if content overflows an element's box.
                    This property specifies whether to clip content or to add scrollbars when an element's content is too big to fit in a specified area.
                    Note: The overflow property only works for block elements with a specified height. he overflow property specifies what should happen if content overflows an element's box.
                    This property specifies whether to clip content or to add scrollbars when an element's content is too big to fit in a specified area.
                    Note: The overflow property only works for block elements with a specified height.

                </p>

            </article>
            <article className={styles['details-post-ownerInfo']} >
                <p className={styles['details-post-username']}><strong>Authour: </strong> ani@abv.bg</p>
                <p className={styles['details-post-created']}><strong>Date: </strong>12.12.1212</p>
                <p className={styles['details-post-likes']}>Likes: 8</p>

            </article>

            <article className={styles['details-post-btn-container']}>
                <button className={styles['edit-btn']}>Edit</button>
                <button className={styles['delete-btn']}>Delete</button>

                <button className={styles['like-btn']}>Like</button>
                <button className={styles['back-btn']}>Back</button>
            </article>
        </section>
    )
}

export default Details;