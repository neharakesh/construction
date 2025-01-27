import React from 'react'
import { Route,Routes } from 'react-router-dom'



import About from "./pages/about.jsx"
import Contact from "./pages/contact.jsx"
import Home from "./pages/home.jsx"
import Project from "./pages/project.jsx"
import Service from "./pages/service.jsx"



function App() {
  

  return (
    <>
    <div className=''>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/service" element={<Service/>} />
      </Routes>
    </div>

    </>
  )
}

export default App
