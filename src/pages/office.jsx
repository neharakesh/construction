import React from 'react'
import Navbar from '../components/navbar.jsx'
import Footer from '../components/footer.jsx'
import HeatMap from '../components/heatmap.jsx'

const office = () => {
  return (
    <>
    <div>
        <Navbar/>
    </div>

    <section className='mt-32'>
        <div className='mt-10 md:text-5xl text-3xl font-semibold flex justify-center text-center '>Our Office</div>
        <div className='flex '>
            {/**left */}
            <div className='w-1/2'>
                <h1 className='md:ml-32 ml-8 font-medium text-2xl mt-8'>AR Construction Office </h1>
                <p className='md:ml-32 ml-8 mt-8'>Located at Chaddar Pull, near Puran Opticals, Mauranipur, UP, AR Construction is your go-to for structural design, 2D & 3D planning, and quality construction. Visit us to bring your vision to life! </p>
            </div>
            {/**right */}
            <div className='w-1/2'> 
            <HeatMap/>
            </div>

        </div>
    </section>

    <div className='mt-32'>
        <Footer/>
    </div>
    </>
  )
}

export default office
