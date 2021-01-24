import React, {useEffect, useState} from 'react';
import {FilmList} from '../../components'
import {movieService} from "../../services";
import {genresService} from "../../services";
import styles from './Home.module.css'
import {useHistory} from 'react-router-dom'

export const Home = () => {

    const history = useHistory()
    const [moviesList, setMoviesList] = useState([])
    const [genres, setGenres] = useState([])
    const [isloading, setLoading] = useState(null)


    const fetchMovies = async() => {
        try {
            setLoading(true)
            const {page, results, total_pages, total_results} = await movieService.getMovies()
            return results;
        } catch(e) {
            console.log(e)
        }
    }

    const fetchGenres = async() => {

        try {
            const {genres} = await genresService.getGenres()
            return genres
        } catch (e) {
            console.log(e)
        }
    }

    const fetchMoviesData = async() => {
        const requests = [fetchMovies(), fetchGenres()]

        try {
            setLoading(true)
            const [movies, genres] = await Promise.all(requests)
            const moviesWithGenres = movies.map(movie => {
                const {genre_ids} = movie;

                const movieGenresList = genre_ids.map(genreId => genres.find(item => item.id === genreId))

                return {...movie, movieGenresList}
            })
            setMoviesList(moviesWithGenres)

        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        fetchMoviesData()
    }, [])

    const loadingIndicator = () => {
        return (<div className={styles.loading}>Loading...</div>);

    }

    const handleFilmClick = (film) => {
        history.push(`/movie/${film.id}`)
    }

    return(
        <div>
            {isloading|| isloading === null ? loadingIndicator() :
                <FilmList
                    onFilmClick={handleFilmClick}
                    items={moviesList}
                />}
        </div>
    )

}
