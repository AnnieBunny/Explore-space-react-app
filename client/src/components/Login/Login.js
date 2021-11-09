
import styles from './Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

const Login = () => {


    return(
        <>
        <article className={styles["rocket-icon"]}>
        <FontAwesomeIcon icon={faRocket}  className={styles["rocket"]}/>
       </article>
    
            <article className={styles["form"]}>
                <form>
                    <label for="email-info">Email</label>
                    <input type="text" className={styles["email-info"]}/>
                    <label for="password-info">Password</label>
                    <input type="password" className={styles["password-info"]}/>
                    <button className={styles["submit-button"]}>Submit</button>
                </form>
            </article>

            </>
    )
}

export default Login;