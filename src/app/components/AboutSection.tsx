import React from 'react';
import Image from 'next/image';
import portfolioa1 from '../../../public/images/portfolioa1.jpg';

const AboutSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-[#121212] p-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Side: Image */}
        <div className="lg:w-1/2 w-full flex justify-center mb-8 lg:mb-0">
        <Image
            src={portfolioa1}  // Replace with your importfolioage path
            alt="About page"
            height={250}
            width={250}
            className="w-96 h-80 rounded-10 object-cover rounded-lg shadow-blue-400 shadow-lg"
          />

        </div>

        {/* Right Side: Text Content */}
        <div className="lg:w-1/2 w-full lg:pl-12">
          <h1 className="text-3xl font-extrabold text-indigo-800 animate-bounce mb-4">About Me</h1>
          <p className="text-slate-400 mb-4">
            Hello! I am Asma Nazeer, a teacher, developer, and designer passionate about creating impactful projects. My background in teaching helps me bring patience and clarity to my work, making it easier for others to understand complex topics.
          </p>
          <p className="text-slate-400  mb-4">
            I specialize in front-end development, with expertise in <span className='font-bold text-xl text-orange-600'>H</span>TML5, <span className='font-bold text-xl text-orange-600'>C</span>SS3, <span className='font-bold text-xl text-orange-600'>J</span>avaScript, <span className='font-bold text-xl text-orange-600'>T</span>ypeScript, and <span className='font-bold text-xl text-orange-600'>N</span>ext.js. I aim to design visually appealing and user-friendly applications.
          </p>
          <p className="text-slate-400 ">
            Currently, I am learning Generative AI and  Web 3.0 at<span className='font-bold text-xl text-orange-600'> GIAIC</span>. My goal is to continue growing as a developer and make a positive impact in the tech world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
