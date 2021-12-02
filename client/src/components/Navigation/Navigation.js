
import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'
const Navigation =() =>{

    return(
        
        <nav className={styles['navigation']}>


        <ul>

            <li><Link to="/getSpacePhoto">Generate photo from NASA!</Link></li>
            <li className={styles['my-posts-btn']}><Link to="/myPosts">My Posts</Link></li>
            <li><Link to="/create">Add post</Link></li>
            <li><Link to="/userHome">Posts</Link></li>
            <li>Logout</li>




        </ul>
    </nav>
    )
}

export default Navigation;