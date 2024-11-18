
import React from 'react';


function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-black via-purple-900 to-pink-900 p-6">
      <div className="w-full max-w-lg p-8 bg-transparent mt-30 rounded-xl shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-orange-500">
        <h2 className="mt-20 text-4xl font-extrabold text-center text-purple-600 mb-6">
          Get In Touch
        </h2>
        <p className="text-center text-white mb-8">
          Feel free to reach out if you have any questions or just want to connect!
        </p>

        {/* Contact Form */}
        <form className="space-y-6 animate-fade-in">
          <div className="relative">
            <label className="block text-white font-semibold mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="relative">
            <label className="block text-white font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="">
            <label className="block text-white font-semibold mb-1">Message</label>
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 mt-6 text-white font-bold bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg hover:from-indigo-500 hover:to-purple-500 transform transition duration-300 hover:scale-105 focus:outline-none"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="mt-8 text-center space-y-4">
          <p className="text-white">Or reach me at:</p>

          {/* Phone Number */}
          <div>
            <span className="text-white font-semibold">Phone: </span>
            <a href="tel:+1234567890" className="text-indigo-300 hover:text-purple-500 transform transition duration-300">
              +1 (234) 567-890
            </a>
          </div>

          {/* Email */}
          <div>
            <span className="text-white font-semibold">Email: </span>
            <a href="mailto:example@example.com" className="text-indigo-300 hover:text-purple-500 transform transition duration-300">
              ismanazeer85@gmail.com
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
