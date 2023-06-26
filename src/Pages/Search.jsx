import styles from './Home.module.css'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import MovieCard from '../components/MovieCard'

const searchURL = import.meta.env.VITE_SEARCH
const apiKEY = import.meta.env.VITE_API_KEY

function Search() {
    const [searchParams] = useSearchParams()

    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")

    const getSearchMovies = async (url) => {

        const res = await fetch(url)
        const data = await res.json()
        
        setMovies(data.results)
        

    }   
    
    useEffect(() => {

        const topSearchMovie = `${searchURL}?${apiKEY}&query=${query}`

        getSearchMovies(topSearchMovie)

        console.log(topSearchMovie)

    },[query])

    return(
    <div className={styles.homeMovie}>
        <h1>Resultados para <span>{query}</span></h1>
        <div className={styles.movieList}>
            {movies && movies.map((movies) => (
                <MovieCard 
                    key={movies.id}
                    movieData={movies}
                />
            ))}
        </div>
    </div>
    )
}

export default Search