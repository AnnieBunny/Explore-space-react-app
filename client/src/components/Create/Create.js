
import styles from './Create.module.css';
import { useNavigate } from 'react-router';
import * as postService from '../../services/postService';

import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
const Create = () => {
    const { user } = useContext(AuthContext);


let navigate = useNavigate();
let userName = user.email;

    let onCreatePostSubmit = (e) => {
        e.preventDefault();

        let { title, text } = Object.fromEntries(new FormData(e.currentTarget));


        postService.createPost({title, text, userName},user.accessToken)
            .then((res) => {
                

                navigate('/userHome');
            });
    }
    return (
        <>


            <article className={styles["form"]}>
                <h3 className={styles["add-post-title"]}>ADD POST</h3>
                <form onSubmit={onCreatePostSubmit}>
                    <label for="post-title">Title</label>
                    <input type="text" name='title' className={styles["post-title"]} />
                    <label for="post-text-content">Text</label>
                    <textarea name='text' className={styles["post-text-content"]} />
                    <button type="submit" className={styles["submit-button"]}>Submit</button>
                </form>
            </article>
        </>
    )

}
export default Create;