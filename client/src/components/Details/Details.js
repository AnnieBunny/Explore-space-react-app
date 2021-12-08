
import styles from './Details.module.css';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import * as postService from '../../services/postService'
import { AuthContext } from '../contexts/AuthContext';
import DeleteModal from './DeleteModal';


const Details = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { postId } = useParams();
    const [post, setPost] = useState({});

    const [deletePostShowModal, setDeletePostShowModal] = useState(false);

    const onClickDeletePostButton = () => {
        setDeletePostShowModal(true);
    };


    useEffect(() => {
        postService.getOne(postId)
            .then(postResult => {
                console.log(postResult);
                setPost(postResult);
            })
    }, [postId]);

    const onRemovePostHandler = (e) => {
        e.preventDefault();

        postService.remove(postId, user.accessToken)
            .then(() => {
                navigate('/userHome')
            })
    }

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
                <p className={styles['details-post-likes']}><strong>Created on: </strong>{`${new Date(post._createdOn)}`.slice(4, 24)}</p>
                <p className={styles['details-post-likes']}>Likes: {post.likes?.length}</p>



            </article>
            {user._id && (user._id == post._ownerId
                ?
                (
                    <>
                        <button className={styles['edit-btn']}>Edit</button>
                        <button onClick={onClickDeletePostButton} className={styles['delete-btn']}>Delete</button>

                    </>
                )
                : <button className={styles['like-btn']}>Like</button>
            )}


            <DeleteModal
                show={deletePostShowModal}
                onHide={() => setDeletePostShowModal(false)}
                onDeletePost={onRemovePostHandler}

            />
            <article className={styles['details-post-btn-container']}>

                <button onClick={()=>{
                    navigate('/userHome')
                }}className={styles['back-btn']}>Back</button>


            </article>
        </section>
    )
}

export default Details;