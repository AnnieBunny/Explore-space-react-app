import styles from './PostCard.module.css';

const PostCard = ({post}) => {

    return (
        <article className={styles['card']}>

            <h1>
               {post.title}
            </h1>

            <p>{post.text}</p>

            <button className={styles['like-btn']}>LIKE!</button>
            <button className={styles['details-btn']}>Details</button>


        </article>

    )
}


export default PostCard;