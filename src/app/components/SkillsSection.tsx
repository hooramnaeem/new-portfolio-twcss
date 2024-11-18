
import React from 'react'
import Image from 'next/image'
import tsimage01 from "../../../public/images/tsimage01.png"
import tailwindcssimage from "../../../public/images/tailwindcssimage.jpg"
import next2 from "../../../public/images/next2.jpg"
import jsimage from "../../../public/images/jsimage.png"
import htmlnew from "../../../public/images/htmlnew.jpg"
import cssimage from "../../../public/images/cssimage.png"
import figmaimage from "../../../public/images/figmaimage.png"

function SkillSection() {
  return (
    <div>
      {/* Skills Section */}
      <div className="border border-[#121212] p-4 rounded-lg bg-[#121212] shadow-lg mb-20">
        <span className="text-3xl font-extrabold mx-auto text-center text-purple-600 hover:text-white transition duration-300 ease-in-out border-b-2 border-purple-600 pb-2 animate-bounce mb-4 inline-block">
          Skills
        </span>
        <ul className="space-y-3 mx-auto mt-4 max-w-4xl">
          {["HTML", "CSS", "Tailwind CSS", "JavaScript", "Next.js", "Designing", "TypeScript"].map((skill, index) => (
            <li key={index} className="text-lg font-semibold text-pink-500 hover:text-white hover:bg-purple-700 hover:scale-105 transform transition duration-300 ease-in-out p-2 rounded-lg shadow-md shadow-pink-500 cursor-pointer">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 p-4 shadow-lg shadow-pink-600">
        <Image
          src={tsimage01}
          alt="TypeScript image"
          height={150}
          width={150}
          className="object-cover rounded-lg shadow-lg hover:scale-125 transition-transform duration-300"
        />
        <Image
          src={next2}
          alt="Next.js image"
          height={150}
          width={150}
          className="object-cover rounded-lg shadow-lg hover:scale-125 transition-transform duration-300"
        />
        <Image
          src={cssimage}
          alt="CSS image"
          height={150}
          width={150}
          className="object-cover rounded-lg shadow-lg hover:scale-125 transition-transform duration-300"
        />
        <Image
          src={htmlnew}
          alt="HTML image"
          height={150}
          width={150}
          className="object-cover rounded-lg shadow-lg hover:scale-125 transition-transform duration-300"
        />
        <Image
          src={jsimage}
          alt="JavaScript image"
          height={150}
          width={150}
          className="object-cover rounded-lg shadow-lg hover:scale-125 transition-transform duration-300"
        />
        <Image
          src={tailwindcssimage}
          alt="Tailwind CSS image"
          height={150}
          width={150}
          className="object-cover rounded-lg shadow-lg hover:scale-125 transition-transform duration-300"
        />
        <Image
          src={figmaimage}
          alt="Figma image"
          height={150}
          width={150}
          className="object-cover rounded-lg shadow-lg hover:scale-125 transition-transform duration-300"
        />
      </div>
    </div>
  )
}

export default SkillSection
