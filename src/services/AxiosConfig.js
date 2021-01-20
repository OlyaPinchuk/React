import axios from 'axios'


export const AXIOS = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWExZGUzZWFhN2I1MjI0Yzk1NzVlYzdmYThhNTI3NSIsInN1YiI6IjYwMDRkYTkyY2IzMDg0MDAzZGRjODEzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mnMXCEVM4uSHKnObAmXWTMBvdTVSQbjD3zfg_m2qlzI'
        }
})