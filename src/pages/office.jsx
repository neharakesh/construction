import React from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import HeatMap from '../components/heatmap.jsx';
import Office from '../../public/images/office.jpeg';

const OfficePage = () => {
  return (
    <>
      <Navbar />

      <section className="mt-24 px-6 md:px-16">
        <div className="text-center text-3xl md:text-5xl font-semibold mt-10">
          Our Office
        </div>

        {/* Office Details Section */}
        <div className="flex flex-col md:flex-row items-center mt-10 gap-8 md:gap-16">
          {/* Left Side */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl font-medium md:ml-10">AR Construction Office</h1>
            <p className="mt-4 md:ml-10 text-gray-700 leading-relaxed">
              Located at Chaddar Pull, near Puran Opticals, Mauranipur, UP, AR Construction is your go-to for structural design, 2D & 3D planning, and quality construction. Visit us to bring your vision to life!
            </p>
          </div>

          {/* Right Side (Image) */}
          <div className="md:w-1/2 flex justify-center">
            <img
              className="w-full max-w-md rounded-xl shadow-lg"
              src={Office}
              alt="AR Construction Office"
            />
          </div>
        </div>

        {/* HeatMap Section */}
        <div className="mt-10 md:mt-16 rounded-lg overflow-hidden shadow-md border border-gray-300">
          <HeatMap />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default OfficePage;

