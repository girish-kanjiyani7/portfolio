'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'LeetHub-3.0 (Open-Source Contribution)',
    description: 'Created a timestamp-based filename versioning feature using JavaScript & Chrome APIs, allowing users to save multiple accepted submissions. Collaborated with the maintainer to improve reliability for 10,000+ active users.',
    tech: ['JavaScript', 'Chrome Extension', 'GitHub API', 'Open Source'],
    github: 'https://github.com/girish-kanjiyani7/LeetHub-3.0',
    demo: '',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    title: 'Trending Media Analytics Platform',
    description: 'Assembled backend services using Appwrite and TMDB APIs to support real-time movie search and trending rankings, with search counts tracked to surface top 5 movies dynamically.',
    tech: ['Appwrite', 'TMDB API', 'React.js', 'Vercel', 'Analytics'],
    github: '',
    demo: 'https://movie-maxxing.vercel.app/',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    title: 'Image Ingestion & Vision API Integration',
    description: 'Programmed a Flask backend for image ingestion and calorie estimation using Gemini Vision API, deployed on Railway with 99%+ uptime and optimized for sub-3-second response times.',
    tech: ['Python', 'Flask', 'Gemini Vision API', 'Railway', 'Backend'],
    github: '',
    demo: 'https://fanum-taxxing.up.railway.app/',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
]

export function Projects() {
  return (
    <div className="p-3 sm:p-6 h-full overflow-y-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 rounded-lg p-4 sm:p-6 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group flex flex-col"
          >
            <div className="aspect-video rounded-lg overflow-hidden mb-4">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="flex-grow">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-white/70 text-sm mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200"
                >
                  <Github className="w-4 h-4 text-white/80" />
                  <span className="text-white/80 text-sm">Code</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4 text-blue-300" />
                  <span className="text-blue-300 text-sm">Demo</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}