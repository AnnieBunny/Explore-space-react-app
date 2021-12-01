
import styles from './Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import * as authService from '../../services/authService';
import { useNavigate } from 'react-router';


const Login = () => {

    let navigate = useNavigate();
    const onLoginSubmit = (e) => {
        e.preventDefault();

        let { email, password } = Object.fromEntries(new FormData(e.currentTarget));

        authService.login(email, password)   
            .then(authData => {
                // login(authData);
                
                navigate('/userHome');
            });
    }

    return(
        <>
        <article className={styles["rocket-icon"]}>
        <FontAwesomeIcon icon={faRocket}  className={styles["rocket"]}/>
       </article>
    
            <article className={styles["form"]}>
                <form onSubmit={onLoginSubmit}>
                    <label for="email-info">Email</label>
                    <input type="text" className={styles["email-info"]}/>
                    <label for="password-info">Password</label>
                    <input type="password" className={styles["password-info"]}/>
                    <button type="submit" className={styles["submit-button"]}>Submit</button>
                </form>
            </article>

            </>
    )
}

export default Login;