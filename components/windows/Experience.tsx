'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    id: 1,
    role: 'Data Scientist',
    company: 'Tech Solutions Inc.',
    location: 'Dallas, TX',
    period: '2024 - Present',
    description: 'Developing machine learning models for predictive analytics and building data pipelines to process large-scale datasets. Leading data-driven decision making initiatives.',
    achievements: [
      'Built predictive models improving business forecasting accuracy by 35%',
      'Designed and implemented ETL pipelines processing 10M+ records daily',
      'Created interactive dashboards reducing reporting time by 50%'
    ],
    tech: ['Python', 'SQL', 'TensorFlow', 'AWS', 'Tableau', 'Apache Spark']
  },
  {
    id: 2,
    role: 'Software Engineer Intern',
    company: 'DataFlow Solutions',
    location: 'Remote',
    period: '2023 - 2024',
    description: 'Developed web applications for data visualization and analytics. Collaborated with senior engineers to implement machine learning features and optimize database performance.',
    achievements: [
      'Developed React-based dashboard for real-time data monitoring',
      'Optimized database queries reducing response time by 40%',
      'Implemented automated testing increasing code coverage to 90%'
    ],
    tech: ['React', 'Python', 'PostgreSQL', 'Docker', 'FastAPI']
  },
  {
    id: 3,
    role: 'Research Assistant',
    company: 'University of Texas at Dallas',
    location: 'Dallas, TX',
    period: '2022 - 2024',
    description: 'Conducted research in machine learning and data mining. Assisted in developing algorithms for pattern recognition and published findings in academic conferences.',
    achievements: [
      'Co-authored 2 research papers on machine learning applications',
      'Developed novel algorithms for time series forecasting',
      'Presented research findings at 3 academic conferences'
    ],
    tech: ['Python', 'R', 'Scikit-learn', 'Jupyter', 'MATLAB']
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