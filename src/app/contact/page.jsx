'use client'
// import React from 'react';
// import Page from '../page';
import Image from 'next/image';
import NavbarComponent from '../../components/Navbar/NavbarComponent';
import { Send } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '../../components/ui/button';
import { Loader2Icon } from 'lucide-react';


const Page = () => {
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef();
    const sendEmail = () => {
      setIsSending(true)
    emailjs
      .sendForm(
        "service_ch9ht69",     // Replace with your EmailJS Service ID
        "template_zszinfg",    // Replace with your EmailJS Template ID
        formRef.current,
        "TzuYP-HyINk_e0Op8"      // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          toast.success(" Email sent successfully!");
          setIsSending(false);
          formRef.current.reset(); // Clears form after sending
        },
        (error) => {
          toast.error(" Failed to send: " + error.text);
          setIsSending(false);
        }
      );
  };
  return (
    <>
    <NavbarComponent />
    <div className='pt-25'> 
       <div className=" flex flex-col lg:flex-row ">
        <ToastContainer position="top-center" />

        {/* Left Side of the Hero Section */}
        <div className="relative flex-grow flex items-center justify-center p-8 lg:w-1/2 min-h-[50vh] lg:min-h-screen">
          <Image
            src="/contact image.png"
            alt="Person listening to music"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-primary opacity-60 z-10"></div>
        </div>

        {/* Right Side of the Contact Form Section */}
        <div className="flex items-center justify-center p-8 lg:w-1/2">
          <div className="w-full max-w-lg p-8 space-y-6   ">
            <form ref={formRef} className="space-y-4">
            <div className="flex justify-center items-center text-2xl font-bold ">My Contact Form</div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              name="message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            {isSending ? (
                  <Button size="lg" className="w-full" disabled>
                    <Loader2Icon className="animate-spin" />
                    Please wait...
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={sendEmail}
                    className="w-full flex items-center justify-center p-3 text-white bg-primary rounded-lg hover:bg-slate-700 transition-colors font-bold"
                  >
                    Send Mail
                  </Button>
                )}
             </form> 
          </div>

          
        </div>
    
      </div>
    </div>
    </>
  );
}

export default Page;