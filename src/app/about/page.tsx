import React from 'react'
import AboutSection from '../components/AboutSection'
import SkillSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
function About() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
    <div className="container mx-auto px-12 py-4">
      
      <AboutSection/>
      <SkillSection/>
      <ProjectsSection/>
    </div>
    </main>
  )
}

export default About
