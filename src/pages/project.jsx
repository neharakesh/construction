import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

function Project() {
    return (
        <>
        <div>
            <Navbar/>
        </div>
        <div className='mt-32'>
            <h1 className='md:ml-32'>OUR WORK</h1>
            <h1 className='md:ml-32 text-5xl font-bold md:mr-96'>Building the future of the construction industry, one project at a time</h1>
        </div>
        <div className='mt-44'>
            <Footer/>
        </div>
        </>
    )
}

export default Project
