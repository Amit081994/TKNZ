import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Packs from './components/Packs'
import "bootstrap/dist/css/bootstrap.min.css"

export default function App() {
  return (
    <>
       <Navbar/>
      <Header/> 
      <Packs/>
    </>
  )
}
