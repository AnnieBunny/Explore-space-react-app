import styles from './NasaSpacePhoto.module.css';

import { useEffect, useState } from 'react';
const NasaSpacePhoto = () => {

    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(

                `https://api.nasa.gov/planetary/apod?api_key=j48k53Da07tcb3EZm0253QETDPn7BGMqXkZhKhvz`
            );
            const data = await res.json();
            setPhotoData(data);
        }
    }, []);

    if (!photoData) return <div />;
    return (
        <>
  
        <section className={styles['container']}>

        <h2 className={styles['nasa-title']} >Explore Space With NASA!</h2>
               <article className={styles['image-container']}>
                <img
                    src={photoData.url}
                    alt={photoData.title}
                ></img>
            </article>
    

            <article className={styles['image-info-container']}>
           
                
                <p className={styles['image-info-container-legend-title']}><strong>Photo title:</strong> {photoData.title}</p>
                <p className={styles['image-info-container-legend-description']}><strong>Photo description:</strong> {photoData.explanation}</p>
                <p className={styles['image-info-container-legend-date']}><strong>Date:</strong> {photoData.date}</p>

                
            </article>
        </section>
         
        </>
    )
}

export default NasaSpacePhoto;