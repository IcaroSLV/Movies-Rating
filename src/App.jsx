import { useState } from 'react'
import './App.css'

import {Link, Outlet} from 'react-router-dom'

import NavBar from './components/NavBar'

function App() {

  return (
    <div>
      
      <NavBar/>

      <Outlet/>
      
    </div>
  )
}

export default App
