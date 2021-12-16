

import styles from './Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

import { useContext } from 'react';

import * as authService from '../../services/authService';
import { useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()


const Login = () => {
    const { login } = useContext(AuthContext);

    let navigate = useNavigate();
    const onLoginSubmit = (e) => {
        e.preventDefault();

        let { email, password } = Object.fromEntries(new FormData(e.currentTarget));

        authService.login(email, password)
            .then(authData => {
                console.log(authData)

                if (authData.code === 403) {
                    toast.error(`${authData.message}`);

                } else {
                     login(authData);

                navigate('/userHome'); 
                }
              
            })
            .catch((err) => console.log(err))
    };


    const onEmailValidation = (e) => {
        let emailInput = e.target.value;
        let regex = /^\S+@\S+\.\S+$/
        if (!regex.test(emailInput)) {

            toast.error("Invalid email");
        }

        console.log(11111);
    };

    return (
        <>
            <article className={styles["rocket-icon"]}>
                <FontAwesomeIcon icon={faRocket} className={styles["rocket"]} />
            </article>

            <article className={styles["form"]}>
                <form onSubmit={onLoginSubmit}>
                    <h2 className={styles["login-title"]}>LOGIN</h2>
                    <label for="email-info">Email</label>
                    <input type="text" className={styles["email-info"]} name="email" onBlur={onEmailValidation} />
                    <label for="password-info">Password</label>
                    <input type="password" className={styles["password-info"]} name="password" />
                    <button type="submit" className={styles["submit-button"]}>Submit</button>
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

export default Login;