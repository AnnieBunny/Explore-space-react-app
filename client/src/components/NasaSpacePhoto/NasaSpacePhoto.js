import styles from './NasaSpacePhoto.module.css';

import * as spacePhotoService from '../../services/spacePhotoService';
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

    console.log(photoData);
    return (
        <>
        <section className={styles['container']}>
               <article className={styles['image-container']}>
                <img
                    src={photoData.url}
                    alt={photoData.title}
                ></img>
            </article>

            <article className={styles['image-info-container']}>
                
            </article>
        </section>
         
        </>
    )
}

export default NasaSpacePhoto;