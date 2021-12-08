import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import styles from './Register.module.css';
import * as authService from '../../services/authService';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
const Register = () => {
    const { login } = useContext(AuthContext);

    let navigate = useNavigate();

    const onRegisterSubmit = (e) => {
        e.preventDefault();

        let { email, password } = Object.fromEntries(new FormData(e.currentTarget));

        authService.register(email, password)   
            .then(authData => {
                login(authData);
                
                navigate('/userHome');
            });
    }

    return(
     <>
       <article className={styles["rocket-icon-register"]}>
       <FontAwesomeIcon icon={faRocket}  className={styles["rocket"]}/>
   </article>

        <article className={styles["form"]}>
            <form onSubmit={onRegisterSubmit}>
            <h2 className={styles["register-title"]}>Register</h2>
                <label for="email-info-register">Email</label>
                <input type="text" name="email" className={styles["email-info-register"]}/>
                <label for="password-info-register">Password</label>
                <input type="password"  name="password"className={styles["password-info-register"]}/>
                <label for="repeat-password-info-register">Repeat Password</label>
                <input type="repeat-password" className={styles["password-info-register"]}/>
                <button type="submit" className={styles["submit-button-register"]}>Submit</button>
            </form>
        </article>
     </>

    )
}

export default Register;