'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Customer Segmentation Analysis',
    description: 'Utilized clustering algorithms (K-Means, DBSCAN) to segment customers, leading to a 15% increase in targeted marketing campaign engagement.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Jupyter'],
    github: 'https://github.com/girishkanjiyani',
    demo: '',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    title: 'Stock Price Prediction Model',
    description: 'Developed and trained an LSTM neural network to forecast stock prices, achieving over 90% accuracy on historical data using the Yahoo Finance API.',
    tech: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'Yahoo Finance API'],
    github: 'https://github.com/girishkanjiyani',
    demo: '',
    image: 'https://images.pexels.com/photos/7567569/pexels-photo-7567569.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    title: 'Healthcare Data Pipeline',
    description: 'Engineered an automated ETL pipeline using Apache Airflow to process and analyze patient data, ensuring data integrity for downstream analysis.',
    tech: ['Python', 'Apache Airflow', 'AWS S3', 'MongoDB', 'Docker'],
    github: 'https://github.com/girishkanjiyani',
    demo: '',
    image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=400'
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
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200"
              >
                <Github className="w-4 h-4 text-white/80" />
                <span className="text-white/80 text-sm">Code</span>
              </a>
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