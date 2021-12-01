
import styles from "./UserHome.module.css";

import { useEffect, useState } from "react";
import * as postService from '../../services/postService';
import PostCard from "../PostCard/PostCard";

const UserHome = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAllPosts()
            .then((res) => {

                setPosts(res)
            })


    }, [])

    return (
        <>

            {
                posts.length > 0
                    ? (
                        <section className={styles['blog-cards']}>
                            {posts.map(x => <PostCard key={x._id} post={x}/>)}
                        </section>
                    )
                        : <p>No posts in DB!</p>
}

        </>

    )
}

export default UserHome;