import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import cr4 from '../../public/images/build.jpeg'
import About1 from '../../public/images/about1.jpg'
import about2 from '../../public/images/about2.jpg'
import { Mail, Phone, MapPin,ChevronDown } from "lucide-react"
import Model from '../../public/images/model.jpeg'
import { FaTools } from 'react-icons/fa' 
import { FaShieldAlt } from 'react-icons/fa'
import { FaSmile } from 'react-icons/fa'


function About() {
    return (
        <>
        <div>
        <div>
            <Navbar/>
        </div>
        <section className="md:mt-32 px-6 py-16 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/** Left side - Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            className="w-full max-w-md rounded-lg shadow-xl object-contain"
            src={About1}
            alt="About Us"
          />
        </div>
        
        {/** Right side - Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">About Us</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
          At AR Construction, we deliver excellence in residential, commercial, institutional, and infrastructure projects. Founded by <em className='font-semibold'>Amit Rajpoot </em>, our commitment to quality, integrity, and innovation drives every project.

We prioritize efficiency, safety, and client satisfaction, leveraging the latest technology and sustainable practices. More than builders, we are trusted partners, dedicated to delivering exceptional results and lasting relationships.

Let’s build the future together.
          </p>
        </div>
      </div>
      
      {/** Stats and Achievements Section */}
      <div className="container mx-auto mt-40 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/** Left side - Content */}
        <div className="md:w-1/2 text-center md:text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2">Impressive Stats and</h1>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Achievements You Can Trust</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            We take pride in our excellent service record, showcasing our commitment to innovation,
            efficiency, and customer satisfaction.
          </p>
        </div>
        
        {/** Right side - Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-1/2">
          <div className="p-8 rounded-xl shadow-lg bg-white transition-transform transform hover:scale-105 hover:bg-blue-600 hover:text-white duration-300">
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-700 hover:text-white">
            We strive to revolutionize the construction industry through innovation, precision, and customer-centric solutions, delivering excellence in every project we build.
            </p>
          </div>
          
          <div className="p-8 rounded-xl shadow-lg bg-white transition-transform transform hover:scale-105 hover:bg-green-600 hover:text-white duration-300">
            <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
            <p className="text-gray-700 hover:text-white">
            Delivering exceptional construction services with a customer-first approach, built on a foundation of quality, integrity, and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
        <div>
            <h1 className='justify-center items-center flex md:mt-28 font-semibold text-2xl'>Our Story</h1>
            <h2 className='justify-center items-center flex md:mt-2 font-semibold text-4xl text-center'>Exceptional Construction Services for Every Building Need</h2>
        </div>
        <div className="container mx-auto mt-20 flex flex-col items-center text-center md:text-left">
        <img 
          className="w-full md:w-3/4 rounded-lg shadow-xl object-cover hover:scale-105 transition-transform duration-300" 
          src={about2} 
          alt="Our Story" 
        />
        <p className="mt-8 text-lg text-white leading-relaxed w-full md:w-3/4 p-10  shadow-lg rounded-lg bg-yellow-600">
          <span className="font-semibold text-gray-900">AR Construction </span>was founded with a vision by Amit Rajpoot, who left his job to establish a company dedicated to delivering quality construction services with a professional touch. Starting in his own small town, his goal was to make expert construction solutions accessible to those who couldn’t afford professional architects. With a strong commitment to excellence, Amit expanded his team to serve nearby towns, ensuring that more people could benefit from reliable and affordable construction services. At AR Construction, we’re not just building structures—we’re building trust and enhancing communities.
        </p>
      </div>

    </section>

    <section className="mt-12 px-6 py-16 bg-gradient-to-r from-gray-100 to-gray-200">
  <div className="container mx-auto ">
    <h1 className="text-xl md:text-xl md:text-left text-center md:ml-32 font-extrabold text-gray-900 mb-8">
      WHY CHOOSE US
    </h1>
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:ml-32">
      
      {/* Left Side */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        The Best Choice for Your Construction Needs
        </h2>

        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center gap-6">
          <FaTools className="text-blue-600 text-4xl" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Experienced Professionals</h2>
            <p className="text-gray-700 text-sm">Our skilled team brings years of expertise to deliver exceptional results for every construction project.</p>
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center gap-6">
          <FaShieldAlt className="text-green-600 text-4xl" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Reliable & Trustworthy</h2>
            <p className="text-gray-700 text-sm">We uphold integrity and transparency, ensuring top-quality construction services.</p>
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center gap-6">
          <FaSmile className="text-yellow-600 text-4xl" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Customer Satisfaction</h2>
            <p className="text-gray-700 text-sm">Your satisfaction is our commitment. We go the extra mile to deliver excellence in every project.</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex flex-col  space-y-4 ">
      <p className='text-gray-700 text-sm md:mr-28'>At AR Construction, we understand that your home or business is a significant investment, and we’re committed to building it with precision and care. Here’s why we’re the best choice for all your construction needs:</p>
        <img className="w-full max-w-sm md:max-w-lg rounded-xl shadow-xl object-cover md:mr-28 mt-8 justify-center items-center flex text-center" src={About1} alt="About Us" />
      </div>

    </div>
  </div>
</section>
      {/**Our team */}
      <section className="mb-44 px-4">
  {/* Section Heading */}
  <h1 className="font-semibold text-gray-800 text-center text-3xl md:text-5xl mt-16">
    Our Team
  </h1>

  {/* Team Members */}
  <div className="flex flex-col md:flex-row md:ml-24 mt-16 gap-10 items-center md:items-start">
    
    {/* Left Team Member */}
    <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center gap-6 p-6 border border-gray-200 shadow-lg rounded-lg">
      {/* Profile Image */}
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-blue-500 shadow-md">
        <img src={Model} alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Profile Details */}
      <div className="text-center md:text-left">
        <h2 className="font-semibold text-2xl mb-2">Arshlan Ahmad</h2>
        <p className="text-gray-600">Engineer + 2D Designer</p>
        <p className="text-gray-500">AR Construction</p>

        {/* Contact Info */}
        <div className="mt-4">
          <div className="flex justify-center md:justify-start items-center gap-2 text-gray-700">
            <Phone className="text-blue-600 w-5 h-5" />
            <p className="font-semibold">+88 4063 4956</p>
          </div>
          <div className="flex justify-center md:justify-start items-center gap-2 mt-2 text-gray-700">
            <Mail className="text-blue-600 w-5 h-5" />
            <p className="font-semibold">a@gmail.com</p>
          </div>
        </div>
      </div>
    </div>

    {/* Right Team Member (Duplicate for another member) */}
    <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center gap-6 p-6 border border-gray-200 shadow-lg rounded-lg">
      {/* Profile Image */}
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-blue-500 shadow-md">
        <img src={Model} alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Profile Details */}
      <div className="text-center md:text-left">
        <h2 className="font-semibold text-2xl mb-2">Ajay Rajpoot</h2>
        <p className="text-gray-600">Supervisor </p>
        <p className="text-gray-500">AR Construction</p>

        {/* Contact Info */}
        <div className="mt-4">
          <div className="flex justify-center md:justify-start items-center gap-2 text-gray-700">
            <Phone className="text-blue-600 w-5 h-5" />
            <p className="font-semibold">+9598463517</p>
          </div>
          <div className="flex justify-center md:justify-start items-center gap-2 mt-2 text-gray-700">
            <Mail className="text-blue-600 w-5 h-5" />
            <p className="font-semibold">a@gmail.com</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

        <div className='mb-0 '>
            <Footer/>
        </div>
        </div>
        </>
    )
}

export default About
