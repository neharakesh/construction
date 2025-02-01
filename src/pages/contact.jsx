import React from 'react'
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from '../components/navbar'
import Footer from '../components/footer'

function Contact() {
    const contacts = [
        { icon: <Phone size={28} />, title: "Phone", detail: "+91 98765 43210" },
        { icon: <Mail size={28} />, title: "Email", detail: "contact@example.com" },
        { icon: <MapPin size={28} />, title: "Location", detail: "Banda, Uttar Pradesh" },
      ];
    return (
        <>
        <div>
            <Navbar/>
        </div>
        <div>
            <div className='space-y-4'>
                <h1 className='flex justify-center text-center mt-44 font-serif font-semibold text-xl '>Contact us</h1>
                <h1 className='flex justify-center text-center md:text-5xl font-serif font-bold text-gray-800'>Get in Touch, Reach Out for </h1>
                <h1 className='flex justify-center text-center md:text-5xl font-serif font-bold text-gray-800' >Home Repair Solutions and More!</h1>
            </div>
            <div>
            <div className="flex justify-start ml-32 min-h-screen items-center   p-32">
      <div className="grid gap-12">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-200 p-8  shadow-3xl rounded-3xl w-96 hover:scale-105 transition-transform duration-300 transform hover:shadow-xl border-l-8 border-blue-600"
          >
            <div className="p-5 bg-blue-600 text-white rounded-full shadow-lg">{contact.icon}</div>
            <div className="ml-8">
              <h3 className="text-2xl font-bold text-gray-900">{contact.title}</h3>
              <p className="text-gray-600 font-medium text-lg">{contact.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
            </div>

        </div>
        <div className='mt-96'>
            <Footer/>
        </div>
        </>
    )
}

export default Contact
