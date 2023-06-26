import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'

import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'

import styles from './NavBar.module.css'

function NavBar() {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!search) return;
    
        navigate(`/search?q=${search}`);
        setSearch("");
    };

    return(
    <div className={styles.headerMovie}>
        <h2>
          <Link to='/'><BiCameraMovie /> MoviesLib</Link>
        </h2>
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                placeholder='Busque um Filme'
                onChange={(e) => setSearch(e.target.value)}
                value={search || ""}
                />
            <button type='submit'> <BiSearchAlt2 className={styles.icon}/> </button>
        </form>
    </div>
    )

}

export default NavBar