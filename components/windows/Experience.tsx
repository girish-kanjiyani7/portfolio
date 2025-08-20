'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    id: 1,
    role: 'SDE',
    company: 'JMA Wireless',
    location: 'Syracuse, NY',
    period: 'June 2024 - Present',
    description: 'Engineered a modular FastAPI service to classify and transform over 25K event feedback logs. Built RESTful APIs to power internal dashboards for analyzing sentiment data across more than 1M annual attendees.',
    achievements: [
      'Engineered a modular FastAPI service in Python to handle classification and transformation of 25K+ event feedback logs from 9 different categories.',
      'Built RESTful APIs and protected endpoints using FastAPI’s routing and dependency injection, powering internal dashboards used for analyzing sentiment data across 1M+ annual attendees.',
      'Embedded a RoBERTa-based sentiment classification model into a Python service to analyze feedback logs and return structured outputs.',
      'Structured sentiment data using PostgreSQL with indexed lookups to support real-time analytics queries.',
      'Automated unit and integration tests using Pytest, and configured CI pipelines with GitHub Actions to ensure test coverage and deployment readiness.',
      'Partnered with product and frontend teams to define API contracts and enable smooth integration across systems.'
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'RoBERTa', 'Pytest', 'GitHub Actions', 'Docker', 'AWS']
  },
  {
    id: 2,
    role: 'Research Assistant, Data Engineering Lab',
    company: 'Syracuse University',
    location: 'Syracuse, NY',
    period: 'Jan 2024 - Apr 2024',
    description: 'Designed and implemented scalable data ingestion and preprocessing pipelines for 2.1TB of genomic data. Discovered novel genomic patterns, improving research accuracy by over 20%.',
    achievements: [
      'Designed scalable data ingestion and preprocessing pipelines using Python and R, transforming 2.1TB of genomic data into structured formats.',
      'Constructed modular backend scripts for variant calling, and data validation, improving processing speed by 30%.',
      'Discovered 2 novel genomic patterns, contributing to 20%+ improvement in research accuracy.',
      'Delivered reproducible backend tooling for data pipelines shared across 3 interdisciplinary research teams.'
    ],
    tech: ['Python', 'R', 'Data Pipelines', 'Genomic Data', 'Data Validation']
  },
  {
    id: 3,
    role: 'SDE Intern',
    company: 'WaytoWeb Pvt Ltd.',
    location: 'Gujarat, India',
    period: 'Apr 2022 - Jul 2023',
    description: 'Developed and maintained backend APIs for internal dashboards using Django and MySQL. Optimized database performance by refactoring ORM queries and introducing indexing, reducing API latency by over 500ms.',
    achievements: [
      'Developed and maintained backend APIs for internal dashboards using Django and MySQL, implementing role-based access for multiple user groups.',
      'Refactored ORM queries and introduced MySQL indexing, reducing API latency by over 500ms during peak usage.',
      'Implemented backend features for refund approvals and stock reservations, integrated with frontend workflows.',
      'Engaged in Agile ceremonies, contributing to user story breakdowns and task estimations across 6+ sprints.'
    ],
    tech: ['Python', 'Django', 'MySQL', 'REST APIs', 'Agile', 'Scrum']
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