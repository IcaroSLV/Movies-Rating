import { useState, useEffect } from "react"

import MovieCard from "../components/MovieCard"

import styles from './Home.module.css'

const movieURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY
const movieLanguage = import.meta.env.VITE_LANGUAGE

function Home() {
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {

        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)
    }   

    useEffect(() => {

        const topRatedURL = `${movieURL}top_rated?${apiKey}&${movieLanguage}`

        getTopRatedMovies(topRatedURL)

    },[])

    return(
    <div className={styles.homeMovie}>
        <h1>Melhores Filmes</h1>
        <div className={styles.movieList}>
        {topMovies && topMovies.map((movies) => (
            <MovieCard 
                key={movies.id}
                movieData={movies}
            />
        ))}
        </div>
    </div>
    )
}

export default Home