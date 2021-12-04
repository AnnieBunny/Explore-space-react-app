
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import styles from './Navigation.module.css'
const Navigation = () => {
    const { user } = useContext(AuthContext);

    return (

        <>

            {user.email
                ? (
                    <>
                        <nav className={styles['navigation']}>
                            <ul>

                                <li><Link to="/getSpacePhoto">Generate photo from NASA!</Link></li>
                                <li className={styles['my-posts-btn']}><Link 
                                 to="/myPosts">My posts </Link></li>
                                <li><Link  to="/create">Add post </Link></li>
                                <li><Link to="/userHome">Posts</Link></li>
                                <li><Link to="/logout">Logout</Link></li>




                            </ul>
                        </nav>
                    </>
                )
                : ''
            }
        </>

    )
}

export default Navigation;