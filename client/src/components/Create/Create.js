
import styles from './Create.module.css';
import { useNavigate } from 'react-router';
import * as postService from '../../services/postService';

import { useContext,useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()
const Create = () => {
    const { user } = useContext(AuthContext);
    const [disabledBtn, setDisabledBtn] = useState(true);


    let navigate = useNavigate();
    let userName = user.email;

    let onCreatePostSubmit = (e) => {
        e.preventDefault();

        let { title, text } = Object.fromEntries(new FormData(e.currentTarget));


        postService.createPost({ title, text, userName }, user.accessToken)
            .then((res) => {


                navigate('/userHome');
            });
    }

    const onTextHandler = (e) => {
        let textInput = e.target.value;

        if (textInput.length < 5) {
            setDisabledBtn(true);

            toast.error("Too short symbols. Must have more than 5 symobls!")
        }  else{
            setDisabledBtn(false);
        }
      
    };

    const onTitleHandler = (e) => {
        let titleInput = e.target.value;

        if (titleInput.length < 1) {
            setDisabledBtn(true);

            toast.error("Too short symbols. Must have more than 1 symobol!")
        }
        else{
            setDisabledBtn(false)
        }
    };




    return (
        <>


            <article className={styles["form"]}>
                <h3 className={styles["add-post-title"]}>ADD POST</h3>
                <form onSubmit={onCreatePostSubmit}>
                    <label htmlFor="post-title">Title</label>
                    <input type="text" name='title' className={styles["post-title"]} onBlur={onTitleHandler} />
                    <label htmlFor="post-text-content">Text</label>
                    <textarea name='text' className={styles["post-text-content"]} onBlur={onTextHandler} />
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
export default Create;