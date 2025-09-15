"use client"
import React, { useRef } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Contact = () => {
  return (
    <div className="p-4 flex flex-col items-center text-center font-ovo max-w-4xl mx-auto">
      <h2 className="text-xl font-ovo">Connect with me</h2>
      <h1 className="font-ovo font-extralight text-5xl md:text-5xl">Get in touch</h1>
      <p className="font-ovo text-lg max-w-2xl">
        I'd love to hear from you if you have any queries, comments, or feedback. 
        Please use the form below.
      </p>

      <div className="w-full max-w-2xl mt-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="flex-1 border p-3 font-ovo rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-teal-300" 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="flex-1 border p-3 font-ovo rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-teal-300" 
          />
        </div>

        <textarea 
          placeholder="Your Message" 
          rows="8"
          className="w-full border p-4 font-ovo rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-teal-300"
        />

        <button className="mt-8 font-ovo relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
          <span className="relative px-8 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Submit
          </span>
        </button>
      </div>
    </div>
  );
};

export default Contact;