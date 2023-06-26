import styles from './MovieCard.module.css'

import {BsStarFill, BsFillPeopleFill} from 'react-icons/bs'

import { Link } from 'react-router-dom'

const movieIMGLINK = import.meta.env.VITE_IMG

function MovieCard({movieData, showLink = true}){

    const movieIMG = movieIMGLINK + movieData.backdrop_path

    return(
        <div className={styles.CardContainer}>
            <div className={styles.imgMovie}>
                <img src={movieIMG}></img>
            </div>
            <div className={styles.descriptionMovie}>
                <h2>{movieData.title}</h2>
                <div>
                    <p><span><BsStarFill/></span> {movieData.vote_average} / 10</p>
                    <p><span><BsFillPeopleFill/></span> {movieData.popularity.toLocaleString('pt-BR')}</p>
                </div>
            </div>
            <div className={styles.movieButton}>
                {showLink && <Link to={`/movie/${movieData.id}`}>Detalhes</Link>}
            </div>
        </div>
    )
} 

export default MovieCard