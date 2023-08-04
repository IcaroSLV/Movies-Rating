import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import styles from './Movie.module.css'
import { BsStarFill, BsFillPeopleFill, BsFillClockFill } from 'react-icons/bs'


const movieDETAILS = import.meta.env.VITE_API
const apiKEY = import.meta.env.VITE_API_KEY
const movieIMG = import.meta.env.VITE_IMG
const movieLanguage = import.meta.env.VITE_LANGUAGE

function Movie() {

    const {id} = useParams()
    const [movieData, setMovieData] = useState({});

    useEffect(() => {
        fetch(`${movieDETAILS}${id}?${apiKEY}&${movieLanguage}`)
        .then((resp) => resp.json())
        .then((data) => {
            setMovieData(data)
        })
    },[])



    
    return(
        <div className={styles.movieDetailsContainer}>
            <div className={styles.movieImg}>
                <img src={movieIMG + movieData.poster_path}/>
            </div>
            <div className={styles.movieDetails}>

                <div className={styles.titleDetails}>
                    <h1>{movieData.title}</h1>
                    <div>
                        <p>Lançamento: <span>{movieData.release_date}</span></p>
                        <p> <span><BsFillClockFill/></span> Duração: <span>{movieData.runtime} minutos</span> </p>
                    </div>
                </div>

                <div className={styles.populatiryDetails}>
                    <p><span><BsStarFill/></span> {(movieData.vote_average)} / 10</p>
                    <p><span><BsFillPeopleFill/></span> {movieData.popularity}</p>
                </div>

                <div className={styles.overviewDetails}>
                    <h3>Sinopse</h3>
                    <p>{movieData.overview}</p>
                </div>

                <div className={styles.budgetDetails}>
                    <div>
                        <h3>Orçamento</h3>
                        <p>R$ {movieData && movieData.budget && movieData.budget.toLocaleString('pt-BR')}</p>
                    </div>
                    <div>
                        <h3>Receita</h3>
                        <p>R$ {movieData && movieData.revenue && movieData.revenue.toLocaleString('pt-BR')}</p>
                    </div>
                </div>

                <div className={styles.buttonContainer}>
                    <Link to='/'>Voltar</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Movie