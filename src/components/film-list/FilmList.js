import React from "react";
import {FilmItem} from "../film-item";
import styles from './FilmList.module.css'

export const FilmList = ({items, onFilmClick}) => {


    return (
        <div className={styles.listWrapper} >
            {items.map(i =>(
                <div key={i.id} className={styles.itemWrapper}
                    onClick={() => onFilmClick(i)}>

                    <FilmItem key = {i.id} item = {i}/>
                </div>

                ))}
        </div>
    )
}
