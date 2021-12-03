
import styles from "./UserHome.module.css";

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

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
                    ?
                    (
                        <section className={styles['blog-cards']}>
                            {posts.map(x => <PostCard key={x._id} post={x} />)}
                        </section>
                    )
                    :
                    (
                        <>
                            <p className={styles['no-post-text']}>No posts here!</p>
                            <p className={styles['no-post-text']}>Make first post!</p>
                     
                            <article className={styles['btn-container']} >
                           <Link className={styles['add-new-post-btn']} to="/create">ADD POST</Link>

                            </article>
                        </>
                    )
            }

        </>

    )
}

export default UserHome;