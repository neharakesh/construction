import React,{useEffect} from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import About1 from '../../public/images/about1.jpg'
import img2 from '../../public/images/img2.jpg'
import cr2 from '../../public/images/cr2.png'
import AOS from "aos"
import "aos/dist/aos.css"

import { HardHat, Building, Truck, Wrench, Ruler, PaintRoller, Hammer, Layers } from "lucide-react";
function Service() {
  useEffect(()=>{
        AOS.init({duration:1000})
      },[])
    

const services = [
    { icon: <HardHat className="text-yellow-500 w-12 h-12" />, title: "General Construction", desc: "Providing top-quality construction services for residential & commercial projects." },
    { icon: <Building className="text-blue-500 w-12 h-12" />, title: "Architectural Design", desc: "Innovative and modern architectural designs for all types of buildings." },
    { icon: <Truck className="text-green-500 w-12 h-12" />, title: "Material Supply", desc: "Reliable supply of high-quality construction materials for your projects." },
    { icon: <Wrench className="text-red-500 w-12 h-12" />, title: "Renovation & Remodeling", desc: "Transforming old spaces into modern, functional environments." },
    { icon: <Ruler className="text-purple-500 w-12 h-12" />, title: "Site Planning", desc: "Expert site planning to optimize space, safety, and efficiency." },
    { icon: <PaintRoller className="text-orange-500 w-12 h-12" />, title: "2D Planning & 3D Elivation", desc: "Bringing your vision to life with precise 2D planning and stunning 3D elevation designs." },
    { icon: <Hammer className="text-indigo-500 w-12 h-12" />, title: "Vastu Consultant", desc: "Expert Vastu consultation for harmonious and well-balanced building and home designs." },
    { icon: <Layers className="text-pink-500 w-12 h-12" />, title: "Blueprint & Estimation", desc: "Precise blueprints and cost estimations for efficient, budget-friendly construction." }
  ];
    return (
        <>
        <div>
            <Navbar/>
        </div>
        <div>
        <div className="mt-32 px-6 py-10 bg-white">
  

    {/* Section Title */}
    <div>
    <h1 className="text-lg md:text-xl font-semibold text-gray-800 md:ml-32 border-l-4 border-gray-500 pl-4">
      Building Services
    </h1>

    <div className="flex flex-col md:flex-row items-center mt-4 gap-6 md:gap-12">

      {/* Left Side - Construction Services */}
      <div className="md:w-1/2 w-full space-y-3 text-center md:text-left md:ml-32">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight" data-aos="zoom-in-up">
          Construction Services
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed" data-aos="zoom-in-up">
          Our suite of integrated construction services ensures the highest degree of quality, 
          safety, efficiency, and innovation on your projects.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img 
          src={img2} 
          alt="Construction Services"
          className="w-full max-w-xl rounded-lg shadow-md object-cover" data-aos="fade-right"
        />
      </div>

    </div>
    </div>


    {/* Section Title */}
    <div className='mt-32'>
    <h1 className="text-lg md:text-xl font-semibold text-gray-800 md:ml-32 border-l-4 border-gray-500 pl-4">
    Service Overview
    </h1>
    <div className="flex flex-col md:flex-row items-center mt-10 gap-6 md:gap-12">

      {/* Left Side - Construction Services */}
      <div className="md:w-1/2 w-full space-y-3 text-center md:text-left md:ml-32">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight" data-aos="zoom-in-up">
        Delivering integrated construction services to build lasting success
        </h2>
        
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 w-full flex justify-center">
      <p className="text-gray-700 text-base md:text-lg leading-relaxed" data-aos="zoom-in-up">
      Delivering Comprehensive Construction Solutions for Lasting Excellence  
      Our range of construction services is designed to uphold the highest standards of quality, safety, efficiency, and innovation, ensuring exceptional results for every project.
        </p>
      </div>

    </div>
  
  </div>
</div>

{/**2nd part */}
        <div className='' data-aos="zoom-in-up">
            <img src={cr2} className='w-full mt-32' alt="" />
            <h1 className='mt-32 font-semibold md:text-5xl md:ml-40 md:mr-72 font-serif' data-aos="zoom-in-up">No matter the challenge, we build on what we know works and elevate your vision of success</h1>
        </div>

        {/**our services part */}
        <section className="py-20 px-8 md:px-20 md:mt-40 bg-white">
      <div className="container mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900">Our Construction Services</h1>
          <h2 className="text-lg text-gray-700 mt-3">Delivering Excellence with Every Project</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 " data-aos="zoom-in-up">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 bg-gray-100 shadow-lg rounded-xl border-l-4 border-yellow-600 relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-4">
                {service.icon}
                <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-700 mt-4 leading-relaxed">{service.desc}</p>

              {/* Bottom Accent Line */}
              <div className="w-full h-1 bg-yellow-600 mt-5 transition-all duration-300 group-hover:w-1/2"></div>
            </div>
          ))}
        </div>

      </div>
    </section>

            
        </div>
        <div className=''>
            <Footer/>
        </div>
        </>
    )
}

export default Service
