import {AXIOS} from './AxiosConfig'

class MoviesService {

    async getMovies() {
        const { data } = await AXIOS.get('/discover/movie');
        return data;
    }

    async getMovieById(movieId) {

        const { data } = await AXIOS.get(`/movie/${movieId}`);
        return data;
    }

}

export const movieService = new MoviesService();