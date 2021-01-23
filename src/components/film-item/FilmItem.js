import React from "react";
import styles from './FilmItem.module.css'

const imgBuilder = (posterPath, size = 200) => `http://image.tmdb.org/t/p/w${size}${posterPath}`

export const FilmItem = ({item}) => {


    return (
        <div  className={styles.filmItem}>

            <div style ={{
                height: 200,
                width: "100%",
                backgroundImage: `url(${imgBuilder(item.poster_path)})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '90%',
                backgroundPosition: 'top'
            }}>
            </div>
            <div>
                <h4>{item.original_title}</h4>

                <p>{item.overview}</p>
                <span>Release date: {item.release_date}</span>

            </div>

        </div>
    )
}
