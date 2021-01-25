import React, {useEffect, useState} from 'react';
import {useRouteMatch, useParams} from 'react-router-dom'
import {movieService} from "../../services";
import {FilmItem} from "../../components";

const imgBuilder = (posterPath, size = 200) => `http://image.tmdb.org/t/p/w${size}${posterPath}`


export const MovieDetails = ({}) => {

    const [movieDetails, setMovieDetails] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {id, ...rest} = useParams()

    const getMovieDetails = async() => {
        try {
            setIsLoading(true)
            const data = await movieService.getMovieById(id)
            setMovieDetails(data)
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getMovieDetails()
    }, [])


    if (isLoading && !movieDetails || isLoading === null) {
        console.log('loading')
        return (
            <h3>Loading...</h3>
        )
    }

    return (
        <div>
            {movieDetails &&

                <div style ={{
                    height: 300,
                    width: "100%",
                    backgroundImage: `url(${imgBuilder(movieDetails.poster_path)})`,
                    backgroundRepeat: 'no-repeat',
                }}>
                </div>
            }

           <h1>{movieDetails && movieDetails.original_title}</h1>
           <h3>{movieDetails && movieDetails.genres.map((el, i) => <span key={el.id}>{el.name} {i < movieDetails.genres.length -1 && '-'} </span> )}</h3>
           <p>{movieDetails && movieDetails.overview}</p>
        </div>
    )
}
