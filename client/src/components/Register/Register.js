import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import styles from './Register.module.css';
import * as authService from '../../services/authService';
import { useNavigate } from 'react-router';
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()
const Register = () => {
    const { login } = useContext(AuthContext);

    let navigate = useNavigate();

    const [disabledBtn, setDisabledBtn] = useState(true);

    const onEmailHandler = (e) => {
        let emailInput = e.target.value;
        let regex = /^\S+@\S+\.\S+$/
        if (!regex.test(emailInput)) {

            toast.error("Invalid email")
        }

    };

    const onPasswordHandler = (e) => {
        let passwordInput = e.target.value;

        if (passwordInput.length < 5) {
            setDisabledBtn(true)

            toast.error("Too short password")
        }
        else{
            setDisabledBtn(false)
        }
    };



    const onRegisterSubmit = (e) => {
        e.preventDefault();

        let { email, password } = Object.fromEntries(new FormData(e.currentTarget));
        
       
        authService.register(email, password)
            .then(authData => {



                login(authData);

                navigate('/userHome');


            });
    };





    return (
        <>
            <article className={styles["rocket-icon-register"]}>
                <FontAwesomeIcon icon={faRocket} className={styles["rocket"]} />
            </article>

            <article className={styles["form"]}>
                <form onSubmit={onRegisterSubmit}>
                    <h2 className={styles["register-title"]}>Register</h2>
                    <label for="email-info-register">Email</label>
                    <input type="text" name="email" className={styles["email-info-register"]} onBlur={onEmailHandler} />
                    <label for="password-info-register">Password</label>
                    <input type="password" name="password" className={styles["password-info-register"]} onBlur={onPasswordHandler} />

                    <button type="submit" className={styles["submit-button-register"]} disabled={disabledBtn}>Submit</button>
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

export default Register;