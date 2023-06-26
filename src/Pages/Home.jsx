import { useState, useEffect } from "react"

import MovieCard from "../components/MovieCard"

import styles from './Home.module.css'

const movieURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

function Home() {
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {

        const res = await fetch(url)
        const data = await res.json()
        
        setTopMovies(data.results)

    }   
    
    useEffect(() => {

        const topRatedURL = `${movieURL}top_rated?${apiKey}`

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