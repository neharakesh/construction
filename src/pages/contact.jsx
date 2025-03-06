import { useState, useEffect } from "react";

import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import con1 from "/images/con1revise.jpg"
import con2 from "/images/con2.jpg"
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [openFAQ, setOpenFAQ] = useState(null);
  const contacts = [
    { icon: <Phone size={28} />, title: "Phone", detail: "+91 98765 43210" },
    { icon: <Mail size={28} />, title: "Email", detail: "contact@example.com" },
    { icon: <MapPin size={28} />, title: "Location", detail: "Banda, Uttar Pradesh" },
  ];

  const faqs = [
    { question: "How can I contact customer support?", answer: "You can contact us via email or phone provided above." },
    { question: "What are your working hours?", answer: "Our support team is available from 9 AM to 6 PM IST." },
    { question: "Do you provide construction materials ?", answer: "Yes, we provide construction materials along with all the neccessary requirements." },
  ];

  return (
    <>
      <Navbar />
      
      <div className="text-center mt-32 px-4">
        <h1 className="text-xl font-serif font-semibold">Contact us</h1>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-800 leading-tight">Get in Touch, Reach Out for</h2>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-800">Home Repair Solutions and More!</h2>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center mt-12 px-6 md:px-16 gap-12">
        {/* Contact Details */}
        <div className="flex flex-col space-y-8 w-full md:w-1/2">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex items-center p-6 shadow-xl rounded-3xl w-full md:w-96 hover:scale-105 transition-transform duration-300 border-l-8 border-amber-300"
            >
              <div className="p-5 bg-amber-300 text-white rounded-full shadow-lg">{contact.icon}</div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-900">{contact.title}</h3>
                <p className="text-gray-600 font-medium text-lg">{contact.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <form className="w-full md:w-1/2 space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input type="text" className="w-full p-4 border border-gray-300 rounded-xl" placeholder="Enter your name" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input type="email" className="w-full p-4 border border-gray-300 rounded-xl" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone</label>
            <input type="tel" className="w-full p-4 border border-gray-300 rounded-xl" placeholder="Enter your phone number" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea className="w-full p-4 border border-gray-300 rounded-xl" placeholder="Enter your message" rows="4"></textarea>
          </div>
          <button type="submit" className="w-full bg-yellow-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-yellow-700 transition">Send Message</button>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-24 px-6 md:px-16 gap-12 md:mb-40 mb-10">
      <div className="w-full md:w-1/2 flex justify-center">
          <img className="w-full max-w-md md:max-w-lg rounded-md" data-aos="fade-right" src={con1} alt="About Us" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6" data-aos="zoom-in-up">
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
        
      </div>

      < Footer />
    </>
  );
}

export default Contact;
