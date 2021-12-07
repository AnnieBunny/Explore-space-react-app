

import styles from './Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

import { useContext } from 'react';

import * as authService from '../../services/authService';
import { useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
    const { login } = useContext(AuthContext);

    let navigate = useNavigate();
    const onLoginSubmit = (e) => {
        e.preventDefault();

        let { email, password } = Object.fromEntries(new FormData(e.currentTarget));

        authService.login(email, password)   
            .then(authData => {
                console.log(authData)
               login(authData);
                
                navigate('/userHome');
            })
            .catch((err)=>console.log(err))
    }

    return(
        <>
        <article className={styles["rocket-icon"]}>
        <FontAwesomeIcon icon={faRocket}  className={styles["rocket"]}/>
       </article>
    
            <article className={styles["form"]}>
                <form onSubmit={onLoginSubmit}>
                    <h2 className={styles["login-title"]}>LOGIN</h2>
                    <label for="email-info">Email</label>
                    <input type="text" className={styles["email-info"]} name="email"/>
                    <label for="password-info">Password</label>
                    <input type="password" className={styles["password-info"]} name="password"/>
                    <button type="submit" className={styles["submit-button"]}>Submit</button>
                </form>
            </article>

            </>
    )
}

export default Login;