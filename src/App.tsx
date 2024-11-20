import React from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, ChevronDown, Download } from 'lucide-react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import FluidBackground from './components/FluidBackground';

function App() {
  return (
    <div className="min-h-screen">
      <FluidBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
              <img
                src="https://avatars.githubusercontent.com/u/153064890?v=4"
                alt="Mithun Anuradha"
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Mithun Anuradha
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Web Developer & AR Specialist
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                <a
                  href="https://drive.google.com/file/d/1YHb_sfptrgQ0805k4Xosy6J0KtZ4p5Wv/view?usp=sharing"
                  download
                  className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </a>
                <div className="flex gap-4">
                  <a href="https://github.com/MithunAnuradha" className="text-gray-600 hover:text-gray-900 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="www.linkedin.com/in/mithun-anuradha" className="text-gray-600 hover:text-gray-900 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="mailto:ma.anuradh@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                    <Mail className="w-6 h-6" />
                  </a>
                  <a href="tel:+94769156995" className="text-gray-600 hover:text-gray-900 transition-colors">
                    <Phone className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <ChevronDown className="w-8 h-8 mx-auto text-gray-400 animate-bounce mt-12" />
        </div>
      </section>

      {/* Rest of the sections remain unchanged */}
      {/* About Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm" id="about">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            <p className="mb-6">
              A dynamic and versatile web developer with a robust technical skill set spanning full-stack development,
              interactive web applications, and immersive digital experiences. Specializing in creating responsive,
              user-centric web solutions with expertise in modern web technologies and development frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50/80 backdrop-blur-sm" id="skills">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard
              title="Frontend Technologies"
              skills={['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Node.js', 'Express.js']}
            />
            <SkillCard
              title="Backend & Database"
              skills={['ASP.NET', 'C#', 'SQL', 'MongoDB', 'Flask', 'Python']}
            />
            <SkillCard
              title="Development Tools"
              skills={['Git', 'GitHub Actions', 'Postman', 'Docker', 'Unity Engine']}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm" id="projects">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Signature Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="AR Sales Assistant"
              description="Enterprise mobile AR solution with interactive 3D product visualization and real-time voice interaction capabilities."
              tech={['Unity', 'Flask', 'AKS', 'Python', 'Blender', 'Docker']}
              image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80"
            />
            <ProjectCard
              title="Merch Design Website"
              description="Interactive web application for custom clothing design with real-time visualization and dynamic customization features."
              tech={['React', 'Node.js', 'MongoDB', 'Express']}
              image="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80"
            />
            <ProjectCard
              title="E-commerce Clothing Platform"
              description="Comprehensive e-commerce platform with secure payment processing and responsive design."
              tech={['C#', 'ASP.NET', 'MySQL']}
              image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
            />
            <ProjectCard
              title="E-commerce Food Website"
              description="Responsive food ordering platform with dynamic menu updates and secure order processing."
              tech={['HTML', 'CSS', 'Bootstrap', 'PHP', 'MySQL']}
              image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-50/80 backdrop-blur-sm" id="education">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Education & Certifications</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Information Technology</h3>
              <p className="text-gray-600">Institute of Technology, University of Moratuwa</p>
              <p className="text-gray-500">Expected 2025</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Recent Certifications</h3>
              <div className="space-y-2">
                <p className="flex items-center text-gray-600">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  SQL Programming Essentials (2023)
                </p>
                <p className="flex items-center text-gray-600">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  PHP for Beginners: E-commerce Store Development (2024)
                </p>
                <p className="flex items-center text-gray-600">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Meta Unity and C# Basics (2024)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center gap-4 mb-4">
            <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:ma.anuradh@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="tel:+94769156995" className="text-gray-400 hover:text-white transition-colors">
              <Phone className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400">© 2024 Mithun Anuradha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;