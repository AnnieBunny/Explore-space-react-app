import styles from './Edit.module.css'

const Edit = () =>{

    return(
        <>


        <article className={styles["form"]}>
            <h3 className={styles["add-post-title"]}>EDIT POST</h3>
            <form>
                <label for="post-title">Title</label>
                <input type="text" name='title' className={styles["post-title"]} />
                <label for="post-text-content">Text</label>
                <textarea name='text' className={styles["post-text-content"]} />
                <button type="submit" className={styles["submit-button"]}>Submit</button>
            </form>
        </article>
    </>
    )
}

export default Edit;