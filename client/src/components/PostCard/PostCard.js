import styles from './PostCard.module.css';
import { Link } from 'react-router-dom';

const PostCard = ({post}) => {

    return (
        <article className={styles['card']}>

            <h1>
               {post.title}
            </h1>

            <p  className={styles['text']} >{post.text}</p>

      
            <button className={styles['details-btn']}><Link className="button" to={`/details/${post._id}`}>Details</Link></button>

          
        
        </article>

    )
}


export default PostCard;