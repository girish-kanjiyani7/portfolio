'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Predictive Analytics Dashboard',
    description: 'Machine learning platform for business forecasting with real-time data visualization and predictive modeling capabilities.',
    tech: ['Python', 'Streamlit', 'Scikit-learn', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    title: 'Customer Segmentation Analysis',
    description: 'Data science project using clustering algorithms to segment customers and optimize marketing strategies.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    title: 'Stock Price Prediction Model',
    description: 'Time series forecasting model using LSTM neural networks to predict stock prices with high accuracy.',
    tech: ['Python', 'TensorFlow', 'Keras', 'Yahoo Finance API'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 4,
    title: 'Healthcare Data Pipeline',
    description: 'ETL pipeline for processing and analyzing healthcare data with automated reporting and anomaly detection.',
    tech: ['Python', 'Apache Airflow', 'AWS', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=400'
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
            className="bg-white/5 rounded-lg p-4 sm:p-6 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="aspect-video rounded-lg overflow-hidden mb-4">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
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
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <a
                href={project.github}
                className="flex items-center justify-center space-x-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200"
              >
                <Github className="w-4 h-4 text-white/80" />
                <span className="text-white/80 text-sm">Code</span>
              </a>
              <a
                href={project.demo}
                className="flex items-center justify-center space-x-2 px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4 text-blue-300" />
                <span className="text-blue-300 text-sm">Demo</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}