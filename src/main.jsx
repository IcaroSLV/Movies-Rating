import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import Home from './Pages/Home'
import Movie from './Pages/Movie'
import Search from './Pages/Search'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}> 
          <Route path="/" element={<Home />}/>
          <Route path="movie/:id" element={<Movie />}/>
          <Route path="search" element={<Search />}/>
        </Route>   
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
