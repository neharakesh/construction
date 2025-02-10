import {React,useState} from 'react'
import About1 from '../../public/images/about1.jpg'
import { Mail, Phone, MapPin,ChevronDown } from "lucide-react";
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Map from '../components/heatmap.jsx'

function Contact() {
  const [openFAQ, setOpenFAQ] = useState(null);
    const contacts = [
        { icon: <Phone size={28} />, title: "Phone", detail: "+91 98765 43210" },
        { icon: <Mail size={28} />, title: "Email", detail: "contact@example.com" },
        { icon: <MapPin size={28} />, title: "Location", detail: "Banda, Uttar Pradesh" },
      ];


      const faqs = [
        { question: "How can I contact customer support?", answer: "You can contact us via email or phone provided above." },
        { question: "What are your working hours?", answer: "Our support team is available from 9 AM to 6 PM IST." },
        { question: "Do you offer home services?", answer: "Yes, we provide various home repair solutions. Contact us for more details." }
      ];


    return (
        <>
        <div>
            <Navbar/>
        </div>
        
          {/**heading section */}
            <div className='space-y-4'>
                <h1 className='flex justify-center text-center mt-44 font-serif font-semibold text-xl '>Contact us</h1>
                <h1 className='flex justify-center text-center md:text-5xl font-serif font-bold text-gray-800'>Get in Touch, Reach Out for </h1>
                <h1 className='flex justify-center text-center md:text-5xl font-serif font-bold text-gray-800' >Home Repair Solutions and More!</h1>
            </div>


            <div className='flex'>


              
            {/**card section */}
            <div>
            <div className="flex justify-start ml-32 min-h-screen items-center  p-24">
      <div className="grid gap-12">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="flex items-center p-8  shadow-3xl rounded-3xl w-96 hover:scale-105 transition-transform duration-300 transform hover:shadow-xl border-l-8 border-amber-300"
          >
            <div className="p-5 bg-amber-300 text-white rounded-full shadow-lg">{contact.icon}</div>
            <div className="ml-8">
              <h3 className="text-2xl font-bold text-gray-900">{contact.title}</h3>
              <p className="text-gray-600 font-medium text-lg">{contact.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
            </div>

        

        {/**Contact form */}
        

        <div className="pt-32 w-full mr-24 ml-0 ">
        
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700   mb-2 ml-6 font-medium ">Name</label>
            <input type="text" className="w-full p-4 border border-gray-300 rounded-4xl " placeholder="Enter your name" />
          </div>
          <div>
            <label className="block text-gray-700 ml-6 font-medium mb-2">Email</label>
            <input type="email" className="w-full p-4 border border-gray-300 rounded-4xl " placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-gray-700 ml-6 font-medium mb-2">Phone</label>
            <input type="tel" className="w-full p-4 border border-gray-300 rounded-4xl " placeholder="Enter your phone number" />
          </div>
          <div>
            <label className="block text-gray-700 ml-6 font-medium mb-2">Message</label>
            <textarea className="w-full p-4 border border-gray-300 rounded-4xl " placeholder="Enter your message" rows="4"></textarea>
          </div>
          <button type="submit" className="w-full bg-yellow-600 text-white py-4 rounded-4xl text-lg font-semibold hover:bg-yellow-700 transition">Send Message</button>
        </form>
      </div>
    
    </div>

    {/**FAQ section */}
    <div className='flex'>
    <div className="mt-36 px-6 md:px-16 w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpenFAQ(openFAQ === index ? null : index)}>
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  <ChevronDown className={`transition-transform ${openFAQ === index ? 'rotate-180' : ''}`} />
                </div>
                {openFAQ === index && <p className="mt-4 text-gray-600">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
        <div className='w-1/2'>
        <img className='w-xl mt-32' src={About1} alt="" />
        
        </div>
      </div>
    

    



        <div className='mt-32'>
            <Footer/>
        </div>
        </>
    )
}

export default Contact
