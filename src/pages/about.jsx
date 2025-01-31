import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import cr4 from '../../public/images/build.jpeg'
import About1 from '../../public/images/about1.jpg'
import about2 from '../../public/images/about2.jpg'

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
            Discover a comprehensive range of professional home repair solutions
            tailored to meet your needs with unmatched quality and reliability.
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
              We aim to redefine home repair services with innovation, efficiency, and
              customer satisfaction at the forefront.
            </p>
          </div>
          
          <div className="p-8 rounded-xl shadow-lg bg-white transition-transform transform hover:scale-105 hover:bg-green-600 hover:text-white duration-300">
            <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
            <p className="text-gray-700 hover:text-white">
              Ensuring top-notch services with a customer-centric approach, driven by
              quality, integrity, and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
        <div>
            <h1 className='justify-center items-center flex md:mt-28 font-semibold text-2xl'>Our Story</h1>
            <h2 className='justify-center items-center flex md:mt-2 font-semibold text-4xl text-center'>Quality Services for All Your Home Repair Needs</h2>
        </div>
        <div className="container mx-auto mt-20 flex flex-col items-center text-center md:text-left">
        <img 
          className="w-full md:w-3/4 rounded-lg shadow-xl object-cover hover:scale-105 transition-transform duration-300" 
          src={about2} 
          alt="Our Story" 
        />
        <p className="mt-8 text-lg text-white leading-relaxed w-full md:w-3/4 p-10  shadow-lg rounded-lg bg-yellow-600">
          <span className="font-semibold text-gray-900">Fixit Handyman Services</span> started as a small idea in the heart of our founder, Jack Peterson. As we look to the future, Fixit remains committed to its founding principles. We continue to invest in training for our team, ensuring that they are equipped with the latest skills and knowledge. Our goal is to keep evolving and improving, always finding new ways to serve our customers better. At Fixit Handyman Services, we’re not just about fixing things—we’re about building relationships and enhancing the quality of life for our clients.
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
          The Best Choice for Your Handyman Needs
        </h2>

        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center gap-6">
          <FaTools className="text-blue-600 text-4xl" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Experienced Professionals</h2>
            <p className="text-gray-700 text-sm">Our experts bring years of experience to deliver outstanding results for every repair and project.</p>
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center gap-6">
          <FaShieldAlt className="text-green-600 text-4xl" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Reliable & Trustworthy</h2>
            <p className="text-gray-700 text-sm">We prioritize integrity and transparency, ensuring quality home repairs.</p>
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center gap-6">
          <FaSmile className="text-yellow-600 text-4xl" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Customer Satisfaction</h2>
            <p className="text-gray-700 text-sm">Your satisfaction is our priority. We go the extra mile to ensure excellence.</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex flex-col  space-y-4 ">
      <p className='text-gray-700 text-sm md:mr-28'>At Fixit, we understand that your home is your sanctuary, and we’re committed to keeping it in top shape. Here’s why we’re the best choice for all your handyman needs:</p>
        <img className="w-full max-w-sm md:max-w-lg rounded-xl shadow-xl object-cover md:mr-28 mt-8 justify-center items-center flex text-center" src={About1} alt="About Us" />
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
