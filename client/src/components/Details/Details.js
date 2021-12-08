
import styles from './Details.module.css';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import * as postService from '../../services/postService'
const Details = () => {


    const { postId } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        postService.getOne(postId)
            .then(postResult => {
                console.log(postResult);
                setPost(postResult);
            })
    }, [postId]);
    return (

        <section className={styles['details-container']}>
            <article className={styles['details-post']}>
                <p className={styles['details-post-title']}>{post.title}</p>
                <p className={styles['details-post-text']}>
                   {post.text}

                </p>

            </article>
            <article className={styles['details-post-ownerInfo']} >
                <p className={styles['details-post-username']}><strong>Authour: </strong> {post.userName}</p>
              
                <p className={styles['details-post-likes']}>Likes: {post.likes?.length}</p>

            </article>

            <article className={styles['details-post-btn-container']}>
                <button className={styles['edit-btn']}>Edit</button>
                <button className={styles['delete-btn']}>Delete</button>
                <button className={styles['back-btn']}>Back</button>

                <button className={styles['like-btn']}>Like</button>
            </article>
        </section>
    )
}

export default Details;