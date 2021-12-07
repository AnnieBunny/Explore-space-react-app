
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useLocation } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import styles from './Navigation.module.css'
const Navigation = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    const nav = location.pathname;
    let navSpacePhoto = false;
    let navAddPost = false;
    let navPosts = false;
    
    if(nav === '/getSpacePhoto') {
        navSpacePhoto = true;
    }
    if(nav === '/create') {
        navAddPost = true;
    }
    if(nav === '/userHome') {
        navPosts = true;
    }
  

    return (

        <>

            {user.email
                ? (
                    <>
                        <nav className={styles['navigation']}>
                            <ul>
                            <li className={styles['navigation-username']}><strong>Аstronaut: </strong>{user.email}</li>
                                <li style={{ "background-color" : navSpacePhoto ? 'grey' : '#F7F7F7'}}><Link to="/getSpacePhoto">Generate photo from NASA!</Link></li>
                                <li style={{ "background-color" : navAddPost ? 'grey' : '#F7F7F7'}}><Link  to="/create">Add post </Link></li>
                                <li style={{ "background-color" : navPosts ? 'grey' : '#F7F7F7'}}><Link to="/userHome">Posts</Link></li>
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