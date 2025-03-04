import React,{useEffect} from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import img1 from '../../public/images/about1.jpg'
import pro1 from '../../public/images/pro1.jpg'
import pro2 from '../../public/images/pro2.jpg'
import pro3 from '../../public/images/pro3.jpg'
import pro4 from '../../public/images/pro4.jpg'

import AOS from "aos"
import "aos/dist/aos.css"
function Project() {
  useEffect(()=>{
          AOS.init({duration:1000})
        },[])

    const projects = [
        {
          id: 1,
          title: "Hotel Tejas-Mahoba",

          description: "Hotel Tejas, Mahoba ,A Landmark Project by AR Construction  We proudly designed the 3D elevation and interior of Hotel Tejas, Mahoba, blending modern aesthetics with functionality. Our interior design ensures a luxurious yet comfortable ambiance, enhancing the guest experience. This project reflects our commitment to excellence in architectural innovation and design.",
          image:`${pro1}` ,
        },
        {
          id: 2,
          title: "House Design & Planning-Rath Panvari",
          description: "Rath Panvari – House Design & Planning by AR Construction We meticulously planned and designed a modern house in Rath Panvari, ensuring a perfect blend of functionality and aesthetics. Our expert 2D planning and 3D elevation brought the homeowner's vision to life, creating a comfortable and stylish living space.",
          image:`${pro2}`,
        },
        {
          id: 3,
          title: "Home Design-Mauranipur",
          description: "Mauranipur – Thoughtfully Designed Home by AR Construction At AR Construction, we designed a detailed 2D floor plan and a captivating 3D elevation for a stunning home in Mauranipur. Our approach combines smart space utilization, modern aesthetics, and comfort, bringing the homeowner’s dream to life with precision and creativity.",
          image:`${pro4}`,
        },
        {
          id: 4,
          title: "Petrol Pump & CNG Structure – A Project by AB Construction, Jhansi",
          description: "Petrol Pump & CNG Structure – A Project by AB Construction, Jhansi At AB Construction, Jhansi, we designed and developed a robust Petrol Pump & CNG structure, ensuring durability, safety, and efficient space utilization.Expert planning and structural design meet industry standards, providing a seamless blend of functionality and modern aesthetics.",
          image:`${pro3}`,
        },
      ];

    return (
        <>
        <div>
            <Navbar/>
        </div>
        <div className='mt-32'>
            <h1 className='md:ml-32 ml-8'>OUR WORK</h1>
            <h1 className='md:ml-32 md:text-5xl text-3xl font-bold md:mr-96 ml-8' data-aos="zoom-in-up">Building the future of the construction industry, one project at a time</h1>
        </div>

        <div>
        <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6" data-aos="zoom-in-up" >
        {projects.map((project) => (
          <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition hover:bg-yellow-500 hover:text-white">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold hover:text-white">{project.title}</h3>
              <p className="text-gray-600 mt-2 hover:text-white">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

        </div>

        <div className='mt-44'>
            <Footer/>
        </div>
        </>
    )
}

export default Project
