import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import styles from './Register.module.css';

const Register = () => {

    return(
     <>
       <article className={styles["rocket-icon-register"]}>
       <FontAwesomeIcon icon={faRocket}  className={styles["rocket"]}/>
   </article>

        <article className={styles["form"]}>
            <form>
                <label for="email-info-register">Email</label>
                <input type="text" className={styles["email-info-register"]}/>
                <label for="password-info-register">Password</label>
                <input type="password" className={styles["password-info-register"]}/>
                <label for="repeat-password-info-register">Repeat Password</label>
                <input type="repeat-password" className={styles["password-info-register"]}/>
                <button className={styles["submit-button-register"]}>Submit</button>
            </form>
        </article>
     </>

    )
}

export default Register;