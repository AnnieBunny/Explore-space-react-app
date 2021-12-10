import styles from './Edit.module.css'
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import * as postService from '../../services/postService'
import { AuthContext } from '../contexts/AuthContext';


const Edit = () =>{
    const navigate = useNavigate();
    const { postId } = useParams();
    const [post, setPost] = useState({});
    const { user } = useContext(AuthContext);


    
    useEffect(() => {
        postService.getOne(postId)
            .then(postResult => {
                console.log(postResult);
                setPost(postResult);
            })
    }, [postId]);

    const onEditPostSubmitHandler=(e) =>{

    
            e.preventDefault();
    
            let updatedPost = {
                title: e.target.title.value,
                text: e.target.text.value,
                
            };
            
            console.log(updatedPost);
    
    
            postService.update(post._id, updatedPost,user.accessToken)
                .then((res) => {
                  
    
                    navigate(`/details/${post._id}`);
    
                   
                });
    
    
    }


    return(
        <>


        <article className={styles["form"]}>
            <h3 className={styles["add-post-title"]}>EDIT POST</h3>
            <form onSubmit={onEditPostSubmitHandler}>
                <label htmlFor="post-title">Title</label>
                <input type="text" name='title'defaultValue={post.title} className={styles["post-title"]} />
                <label htmlFor="post-text-content">Text</label>
                <textarea name='text' defaultValue={post.text} className={styles["post-text-content"]} />
                <button type="submit" className={styles["submit-button"]}>Submit</button>
            </form>
        </article>
    </>
    )
}

export default Edit;