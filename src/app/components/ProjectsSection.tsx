
import React from 'react';

function ProjectsSection() {
  return (
    <div className="bg-[#121212] py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-8 animate-bounce hover:text-white"> Check Out My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 border-[#121212] shadow-lg shadow-orange-600">
        {[
          { 
            title: 'Digital Clock', 
            url: 'https://digital-clock-six-ochre.vercel.app/', 
            img: 'images/clockimage2.jpg' // Local image path for Project 1
          },
          { 
            title: 'Simple Calculator',
            url: 'https://calculator-wheat-rho-14.vercel.app/', 
            img: '/images/calculatorimage.jpg' // Local image path for Project 2
          },
          { 
            title: 'Calender App', 
            url: 'https://calender-app-three.vercel.app/' , 
            img: '/images/calenderimage.jpg' // Local image path for Project 3
          },
          { 
            title: 'Static Resume', 
            url:  'https://milestone-1-2-bay-omega.vercel.app/' , 
            img: '/images/resumeimage.jpg' // Local image path for Project 4
          },
          { 
            title: ' First Website', 
            url: 'https://website-nextjs-twcss.vercel.app/', 
            img: '/images/websiteimage2.png' // Local image path for Project 5
          },
          { 
            title: 'Figma ', 
            url: 'https://my-first-figma-assignment.vercel.app/', 
            img: '/images/figma001.png' // Local image path for Project 6
          }
        ].map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white font-bold text-lg">{project.title}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
