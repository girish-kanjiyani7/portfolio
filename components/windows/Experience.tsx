'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    id: 1,
    role: 'Data Scientist',
    company: 'Tech Solutions Inc.',
    location: 'Dallas, TX',
    period: 'Jan 2024 - Present',
    description: 'Led the development of predictive models for sales forecasting, improving accuracy by 35%. Designed and implemented scalable ETL pipelines using AWS to process over 10 million records daily.',
    achievements: [
      'Improved sales forecasting accuracy by 35% with predictive models.',
      'Built ETL pipelines processing 10M+ daily records using AWS services.',
      'Created interactive Tableau dashboards, reducing reporting time by 50%.',
      'Collaborated with cross-functional teams to deliver data-driven recommendations.'
    ],
    tech: ['Python', 'SQL', 'AWS', 'Tableau', 'ETL', 'Predictive Modeling']
  },
  {
    id: 2,
    role: 'Software Engineer Intern',
    company: 'DataFlow Solutions',
    location: 'Remote',
    period: 'May 2023 - Aug 2023',
    description: 'Developed a real-time data monitoring dashboard using React and FastAPI. Optimized database queries and contributed to automated testing suites.',
    achievements: [
      'Developed a real-time data monitoring dashboard with React and FastAPI.',
      'Optimized PostgreSQL queries, reducing API response times by 40%.',
      'Increased code coverage to 90% by implementing Pytest testing suites.'
    ],
    tech: ['React', 'FastAPI', 'Python', 'PostgreSQL', 'Docker', 'Pytest']
  }
]

export function Experience() {
  return (
    <div className="p-3 sm:p-6 h-full overflow-y-auto">
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline line */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-4 sm:left-6 top-12 w-0.5 h-full bg-gradient-to-b from-blue-400 to-transparent"></div>
            )}
            
            {/* Timeline dot */}
            <div className="absolute left-2 sm:left-4 top-4 w-4 h-4 bg-blue-400 rounded-full border-2 border-blue-600 shadow-lg"></div>
            
            {/* Content */}
            <div className="ml-8 sm:ml-12 bg-white/5 rounded-lg p-4 sm:p-6 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-base sm:text-lg text-blue-300 font-medium">{exp.company}</h4>
                </div>
                <div className="flex flex-col items-start md:items-end text-sm text-white/70 mt-2 md:mt-0">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center space-x-1 mt-1">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-white/80 mb-4 leading-relaxed">{exp.description}</p>
              
              <div className="mb-4">
                <h5 className="text-white font-medium mb-2">Key Achievements:</h5>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-white/70 text-sm flex items-start space-x-2">
                      <span className="text-green-400 font-bold">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}