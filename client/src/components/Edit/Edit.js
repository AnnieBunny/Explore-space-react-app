import styles from './Edit.module.css'
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import * as postService from '../../services/postService'
import { AuthContext } from '../contexts/AuthContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()
const Edit = () => {
    const navigate = useNavigate();
    const { postId } = useParams();
    const [post, setPost] = useState({});
    const { user } = useContext(AuthContext);
    const [disabledBtn, setDisabledBtn] = useState(true);

    let userName = user.email;

    useEffect(() => {
        postService.getOne(postId)
            .then(postResult => {
                console.log(postResult);
                setPost(postResult);
            })
    }, [postId]);

    const onEditPostSubmitHandler = (e) => {


        e.preventDefault();

        let updatedPost = {
            title: e.target.title.value,
            text: e.target.text.value,
            userName
        };

        console.log(updatedPost);


        postService.update(post._id, updatedPost, user.accessToken)
            .then((res) => {

console.log(res);
                navigate(`/details/${post._id}`);


            });


    };

    const onTextHandler = (e) => {
        let textInput = e.target.value;

        if (textInput.length < 5) {
            setDisabledBtn(true);

            toast.error("Too short symbols. Must have more than 5 symobls!")
        } else {
            setDisabledBtn(false)
        }

    };

    const onTitleHandler = (e) => {
        let titleInput = e.target.value;

        if (titleInput.length < 1) {
            setDisabledBtn(true);

            toast.error("Too short symbols. Must have more than 1 symobol!")
        }
        else {
            setDisabledBtn(false)
        }
    };


    return (
        <>


            <article className={styles["form"]}>
                <h3 className={styles["add-post-title"]}>EDIT POST</h3>
                <form onSubmit={onEditPostSubmitHandler}>
                    <label htmlFor="post-title">Title</label>
                    <input type="text" name='title' defaultValue={post.title} className={styles["post-title"]} onBlur={onTitleHandler} />
                    <label htmlFor="post-text-content">Text</label>
                    <textarea name='text' defaultValue={post.text} className={styles["post-text-content"]} onBlur={onTextHandler} />
                    <button type="submit" className={styles["submit-button"]} disabled={disabledBtn}>Submit</button>
                </form>
            </article>

            <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
        </>
    )
}

export default Edit;