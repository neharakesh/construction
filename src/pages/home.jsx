import React from 'react'
import Navbar from '../components/navbar.jsx'
import Carousel from '../components/carousel.jsx'
import HeatMap from '../components/heatmap.jsx'
import { Link } from 'react-router-dom'
import build from '../../public/images/build.jpeg'
import build2 from '../../public/images/build2.jpeg'
import mapfull from '../../public/images/mapfull.jpeg'
import amitpic from '../../public/images/amitpic.jpeg'
import saftey from '../../public/images/saftey.jpg'
import { Star } from "lucide-react";
import Footer from '../components/footer.jsx'
function Home() {
     // Icon library for clean star icons
     const reviews = [
        {
          name: "Rahul Sharma",
          review:
            "Great experience! The service was exceptional, and I highly recommend it.",
          rating: 5,
        },
        {
          name: "Priya Verma",
          review: "Good quality and friendly staff. Will definitely come back!",
          rating: 4,
        },
        {
          name: "Amit Singh",
          review:
            "Decent service but room for improvement. Overall, a positive experience.",
          rating: 3,
        },
      ];
    return (
        <>
        <div className=''>
        <Navbar/>
        <Carousel/>
        {/**who we are section */}
        <div>
            <h1 className='font-semibold font-serif text-2xl md:ml-36 mt-20 mb-8 text-gray-600 ml-4'>____Who we are?...</h1>
            <h2 className='text-4xl font-bold font-serif md:ml-36 mr-4 ml-4 '>Collaboration in construction leads</h2>
            <h2 className='text-4xl font-bold font-serif md:ml-36 mr-4 ml-4 '> to success for all.</h2>


            <div className='md:ml-36 md:mr-40 font-serif ml-4 mr-4'>
                <p className='mt-20'>At AR CONSTRUCTION, we go beyond building—we collaborate to exceed your project goals. With innovation at our core, we adapt to emerging trends, keeping you ahead in construction excellence.</p>
                <h1 className='text-l font-semibold mt-6 mb-6'>Powered by our culture of ownership</h1>

                <p className='mb-10'>we build with passion and innovation, working closely with our partners to ensure success. Our commitment to excellence drives every project forward.</p>

                <p className='mb-10'>Whether you're in Buildings, Civil, Industrial, or Special Projects, partnering with AR CONSTRUCTION means gaining a trusted and reliable team dedicated to delivering excellence in every project.</p>

                <p className='mb-20'>From advanced digital construction technologies to the cutting edge of sustainable construction, we find new ways to deliver for a more diverse mix of clients. We bring together the right teams to find the best way forward and elevate your vision of success.</p>
            </div>

        
        
        </div>
        {/** Heatmap Section */}
<div className="bg-[#36383d] md:p-32 p-8 mb-0 font-serif w-full">
  <h1 className="font-bold text-white text-center md:text-left">_____WHERE WE WORK</h1>
  
  {/** Left Section */}
  <div className="flex flex-col md:flex-row justify-between mt-10">
    <div className="text-white w-full md:w-1/2 px-4 md:px-0">
      <h1 className="text-3xl font-bold mt-10 md:ml-28">
      Building a better future, </h1>
      <h1 className="text-3xl font-bold mt-2 md:ml-28">one community at a time.</h1>
      
      <div className="flex md:flex-row md:justify-center flex-col text-xl text-white space-x-6 mt-8 cursor-pointer mb-10 flex-wrap justify-center text-center space-y-2 ">
        
        <h2 className="hover:underline text-amber-300 hover:text-yellow-600">Uttar Pradesh</h2>
        
        <h2 className="hover:underline text-amber-300 hover:text-yellow-600">Madhya Pradesh</h2>
      </div>

      <div className="rounded-lg mt-10 mr-4 w-full md:items-center justify-center flex">
        <img src={mapfull} alt="" />
      </div>
    </div>

    {/** Right Section */}
    <div className="w-full md:w-1/2 mt-10 md:mt-0 text-white px-4 md:px-0">
      <p className="mt-10">
      AR CONSTRUCTION is your trusted partner for building excellence. No matter the project, we bring the right expertise and resources to deliver quality, innovation, and exceed expectations.
      </p>

      <div className="mt-32 text-center md:text-center">
        <h1 className="text-8xl text-yellow-600 font-extrabold">20+</h1>
        <h2 className="text-white font-extrabold text-2xl">Projects Completed</h2>
      </div>

      <div className="mt-32 text-center md:text-center">
        <h1 className="text-8xl text-yellow-600 font-extrabold">4+</h1>
        <h2 className="text-white font-extrabold text-2xl">Active Projects</h2>
      </div>

      <div className="flex justify-center mt-6">
        <Link to="/office">
          <button className="px-14 py-3 mt-32 bg-white text-green-700 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition duration-300">
            View Our Office
          </button>
        </Link>
      </div>

      <p className="text-white text-sm mt-4 text-center">See the offices behind our projects</p>
    </div>
  </div>
</div>


        {/** What we do section */}
        <div className=''>
  <h1 className='font-semibold font-serif text-2xl md:ml-36 mt-20 mb-8 text-gray-600 ml-4'>
    _____What we do...
  </h1>
  <span className='text-4xl font-bold font-serif md:ml-36 mr-4 ml-4 text-center'>
    We have a vision for the future of construction.
  </span>

  <div className='flex flex-col md:flex-row'>
    {/** Left Section */}
    <div className='md:ml-36 ml-4 mr-4 w-full md:w-1/2'>
      <img className='w-full mt-16' src={build} alt="error Loading" />
    </div>
    {/** Right Section */}
    <div className='justify-center w-full md:w-1/2 mt-8 md:mt-32'>
      <h1 className='text-4xl md:text-5xl font-bold mt-8  text-center text-yellow-600 '>
      We build your Dream Home
      </h1>
      <p className='mt-6 md:mr-12 text-center md:text-center'>
      AR Construction's team of skilled professionals is dedicated to delivering excellence across a diverse range of projects, including educational, institutional, residential, and commercial developments. We bring expertise, competitive pricing, financial stability, and a strong commitment to quality, integrity, and workplace safety, ensuring the success of every project we undertake.
      </p>
    </div>
  </div>
</div>



        {/** What we build*/}
        <div className='mt-34 bg-gray-100 pt-6'>
  <h1 className='font-semibold font-serif text-2xl md:ml-36 mt-10 mb-8 text-gray-600 ml-4'>
    _____What we Build...
  </h1>
  <h1 className='text-4xl font-bold font-serif md:ml-36 mr-4 ml-4 mb-2'>
    We look beyond your immediate construction needs to develop
  </h1>
  <h1 className='text-4xl font-bold font-serif md:ml-36 mr-4 ml-4 mb-2'>
    comprehensive solutions for each project
  </h1>

  <div className='flex flex-col md:flex-row'>
    {/** Left Section */}
    <div className='justify-center w-full md:w-1/2 mt-8 md:mt-32 ml-4'>
      <h1 className='text-4xl md:text-5xl font-bold text-center md:text-center text-yellow-600'>
        Stunning structures, sustainably built
      </h1>
      <p className='mt-6 text-center md:text-center'>
        
AR Construction's experienced professionals embrace the challenges of diverse building projects, adding value to educational, institutional, residential, and commercial developments. We offer expertise, competitive pricing, financial reliability, and an unwavering commitment to quality, integrity, and workplace safety to ensure your project's success.
      </p>
    </div>
    {/** Right Section */}
    <div className='md:ml-36 ml-4 mr-4 w-full md:w-1/2 mt-16 md:mt-4'>
      <img className='w-full mt-16 md:h-auto md:mb-4' src={build2} alt="error Loading" />
    </div>
  </div>
</div>


        {/**Our Owners */}
        <div className='mb-20 px-4 md:px-0'>
      <h1 className='font-semibold font-serif text-2xl md:ml-36 mt-20 mb-8 text-gray-600 ml-4'>
        ____Our Owners
      </h1>
      
      <div className='flex flex-col md:flex-row items-center md:items-start'>
        <span className='text-3xl md:text-4xl font-bold font-serif md:ml-36 ml-4 w-full md:w-1/2 text-center md:text-left'>
          Your Vision, Our Mission..
        </span>
        <p className='md:ml-36 md:mr-40 ml-4 mr-4 mt-4 md:mt-0 text-lg md:text-base text-center md:text-left w-full md:w-1/2'>
          
At AR Construction, we take ownership of every project, ensuring accountability and a deep commitment to your success. Our experienced and innovative team is dedicated to delivering solutions that drive excellence. Your success is our success.
        </p>
      </div>

      <div className='flex justify-center items-center min-h-screen bg-white font-serif mt-12'>
        <div className='bg-gray-100 rounded-lg w-full md:w-4/5 flex flex-col md:flex-row items-center md:items-start shadow-lg p-6 md:p-12'>
          {/* Left Text Section */}
          <div className='md:w-2/3 w-full md:pl-8'>
            <h1 className='text-3xl md:text-5xl font-bold text-yellow-600 text-center md:text-left'>
              Amit Rajpoot
            </h1>
            <h2 className='text-lg md:text-xl mt-4 font-semibold text-black text-center md:text-left'>
              Founder & General Manager
            </h2>
            <p className='text-gray-600 mt-4 text-base md:text-lg leading-relaxed text-center md:text-left'>
             
AR Construction thrives under the leadership of its founder, Amit Rajpoot, whose vision and dedication drive the company's success. With a hands-on approach, Amit Rajpootoversees every aspect of the business, from strategic planning to project execution, ensuring that AR Construction consistently delivers excellence. Committed to building a strong and talented team, he prioritizes hiring top professionals and nurturing future industry leaders through continuous learning and development. Under his guidance, AR Construction upholds the highest standards of quality, integrity, and innovation in every project.

            </p>
          </div>

          {/* Right Image Section */}
          <div className='md:w-1/3 w-full flex justify-center mt-6 md:mt-0'>
            <img
              src={amitpic}
              alt='Amit Rajpoot'
              className='rounded-lg object-cover border-2 border-gray-300 shadow-md w-64 h-64 md:w-80 md:h-80'
            />
          </div>
        </div>
      </div>
    </div>  
        {/**Saftey section */}
        <div className='bg-gray-100 pt-8'>
  <div className='flex flex-col md:flex-row '>
    {/** Left section */}
    <div className='w-full md:w-1/2 flex justify-center md:ml-36 ml-4 mr-4'>
      <img className='w-full mt-10 pb-10 ' src={saftey} alt="error Loading" />
    </div>

    {/** Right section */}
    <div className='w-full md:w-1/2 flex md:text-center justify-center md:justify-start text-center '>
      <div>
        <h1 className='text-3xl md:text-5xl font-bold mt-10 md:mt-32'>
          Safety: A Way of Life
        </h1>
        <p className='mt-6 md:mr-12 md:text-center mb-10'>
          Our culture of safety is one that extends beyond the job site to ensure everyone returns home safely every day.
        </p>
      </div>
    </div>
  </div>
</div>


        {/**Testimonals*/}
        <div className='mb-20'>
        <h1 className='flex justify-center items-center text-yellow-600 text-3xl mt-20 font-bold'>Testimonials</h1>
        
        <div className="bg-white  px-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Customers Say</h2>
      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-5xl">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 w-full sm:w-1/3 transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
            <p className="text-gray-600 mt-2">{review.review}</p>
            <div className="flex mt-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={`mr-1 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

        </div>
        
        <div className=''><Footer/></div>
        

        </div>
        
        </>
    )
}

export default Home
