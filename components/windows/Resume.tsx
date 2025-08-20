'use client'

import { motion } from 'framer-motion'
import { Download, Eye, Mail, Phone, Linkedin, Github, MapPin, Briefcase, Code, GraduationCap, Star, Link } from 'lucide-react'

const resumeData = {
  name: 'GIRISH KANJIYANI',
  contact: {
    phone: '(315)374-1153',
    email: 'girishfob5040@gmail.com',
    linkedin: 'https://www.linkedin.com/in/girish-kanjiyani/',
    github: 'https://github.com/girish-kanjiyani7'
  },
  skills: [
    { category: 'Languages', items: 'Python, JavaScript (ES6+), Java, C++, C, R' },
    { category: 'Frameworks & Libraries', items: 'FastAPI, Django, Flask, React.js, Vue.js, Tailwind CSS, Semantic HTML, Modern CSS' },
    { category: 'Databases', items: 'MySQL, MongoDB (NoSQL), DynamoDB, PostgreSQL' },
    { category: 'Cloud & DevOps', items: 'AWS (Lambda, ECS, S3), Docker, GitHub Actions' },
    { category: 'Software Engineering Practices', items: 'Object-oriented Programming, Design Patterns, TDD (Test-Driven Development), Agile/Scrum, SDLC.' }
  ],
  experience: [
    {
      role: 'SDE',
      company: 'JMA Wireless',
      location: 'Syracuse, NY',
      period: 'June 2024 -- May 2025',
      points: [
        'Engineered a modular FastAPI service in Python to handle classification and transformation of 25K+ event feedback logs from 9 different categories, transforming raw inputs into structured data for sentiment classification.',
        'Built RESTful APIs and protected endpoints using FastAPI’s routing and dependency injection, powering internal dashboards used for analyzing sentiment data across 1M+ annual attendees.',
        'Embedded a RoBERTa-based sentiment classification model into a Python service to analyze feedback logs and return structured outputs for storage and dashboard visualization.',
        'Structured sentiment data using PostgreSQL with indexed lookups to support real-time analytics queries.',
        'Automated unit and integration tests using Pytest, and configured CI pipelines with GitHub Actions to ensure test coverage and deployment readiness.',
        'Partnered with product and frontend teams to define API contracts and enable smooth integration across systems.'
      ]
    },
    {
      role: 'Research Assistant, Data Engineering Lab',
      company: 'Syracuse University',
      location: 'Syracuse, NY',
      period: 'January 2024 -- April 2024',
      points: [
        'Designed scalable data ingestion and preprocessing pipelines using Python and R, transforming 2.1TB of genomic data into structured formats',
        'Constructed modular backend scripts for variant calling, and data validation, improving processing speed by 30%.',
        'Discovered 2 novel genomic patterns, contributing to 20%+ improvement in research accuracy',
        'Delivered to reproducible backend tooling for data pipelines shared across 3 interdisciplinary research teams'
      ]
    },
    {
      role: 'SDE Intern',
      company: 'WaytoWeb Pvt Ltd.',
      location: 'Gujarat, India',
      period: 'April 2022 -- July 2023',
      points: [
        'Developed and maintained backend APIs for internal dashboards using Django and MySQL, implementing role-based access with Django’s built-in auth and group permission system for operations, finance, and admin users.',
        'Refactored ORM queries and introduced MySQL indexing, reducing API latency by over 500ms during peak usage',
        'Implemented backend features for refund approvals and stock reservations, integrated with frontend workflows via shared staging environments',
        'Engaged in Agile ceremonies (sprint planning, standups) and contributed to user story breakdowns and task estimations across 6+ sprints.'
      ]
    }
  ],
  projects: [
    {
      name: 'LeetHub-3.0 (Open-Source Contribution)',
      link: 'https://github.com/girish-kanjiyani7/LeetHub-3.0',
      points: [
        'Created a timestamp-based filename versioning feature using JavaScript, Chrome Extension APIs, and GitHub OAuth2 integration, allowing users to save multiple accepted submissions per problem.',
        'Collaborated with maintainer through 10+ review comments and 3 code iterations to ensure seamless upstream integration, improving reliability and daily workflow for 10,000+ active users.'
      ]
    },
    {
      name: 'Trending Media Analytics Platform',
      link: 'https://movie-maxxing.vercel.app/',
      points: [
        'Assembled backend services using Appwrite and TMDB APIs to support real-time movie search and trending rankings, with search counts tracked to surface top 5 movies dynamically.'
      ]
    },
    {
      name: 'Image Ingestion & Vision API Integration',
      link: 'https://fanum-taxxing.up.railway.app/',
      points: [
        'Programmed a Flask backend for image ingestion and calorie estimation using Gemini Vision API, deployed on Railway with 99%+ observed uptime, and optimized for sub-3-second response times with async processing and structured responses.'
      ]
    }
  ],
  education: [
    {
      institution: 'Syracuse University',
      location: 'Syracuse, NY',
      degree: 'Master of Science in Computer Science',
      period: 'Aug. 2023 -- May 2025',
      details: []
    }
  ]
};

const Section = ({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="mb-6"
  >
    <h2 className="flex items-center text-xl sm:text-2xl font-bold text-blue-300 mb-4 border-b-2 border-blue-300/20 pb-2">
      {icon}
      <span className="ml-3">{title}</span>
    </h2>
    {children}
  </motion.div>
);

export function Resume() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const resumePdfUrl = `${basePath}/GK_back_draft.pdf`;

  return (
    <div className="h-full flex flex-col bg-gray-900/50 text-white">
      <div className="flex-shrink-0 p-3 sm:p-4 border-b border-white/10 bg-black/20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h2 className="text-lg sm:text-xl font-bold text-white">Resume</h2>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <motion.a href={resumePdfUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center justify-center space-x-2 px-3 py-1.5 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors duration-200">
              <Eye className="w-4 h-4 text-blue-300" />
              <span className="text-blue-300 text-xs sm:text-sm">Preview</span>
            </motion.a>
            <motion.a href={resumePdfUrl} download="Girish_Kanjiyani_Resume.pdf" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center justify-center space-x-2 px-3 py-1.5 bg-green-500/20 hover:bg-green-500/30 rounded-lg transition-colors duration-200">
              <Download className="w-4 h-4 text-green-300" />
              <span className="text-green-300 text-xs sm:text-sm">Download</span>
            </motion.a>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-wider text-white">{resumeData.name}</h1>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mt-3 text-xs sm:text-sm text-white/80">
            <a href={`tel:${resumeData.contact.phone}`} className="flex items-center hover:text-blue-300"><Phone className="w-4 h-4 mr-1.5 text-blue-400"/>{resumeData.contact.phone}</a>
            <a href={`mailto:${resumeData.contact.email}`} className="flex items-center hover:text-blue-300"><Mail className="w-4 h-4 mr-1.5 text-blue-400"/>{resumeData.contact.email}</a>
            <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-300"><Linkedin className="w-4 h-4 mr-1.5 text-blue-400"/>LinkedIn</a>
            <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-300"><Github className="w-4 h-4 mr-1.5 text-blue-400"/>GitHub</a>
          </div>
        </header>

        {/* Skills */}
        <Section title="Technical Skills" icon={<Star />}>
          <div className="space-y-2 text-sm">
            {resumeData.skills.map((skill, i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                <strong className="col-span-1 text-white/90">{skill.category}:</strong>
                <p className="col-span-3 text-white/80">{skill.items}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section title="Professional Experience" icon={<Briefcase />}>
          {resumeData.experience.map((exp, i) => (
            <div key={i} className="mb-5">
              <div className="flex flex-col sm:flex-row justify-between">
                <h3 className="text-md sm:text-lg font-semibold text-white">{exp.role} at {exp.company}</h3>
                <p className="text-sm text-white/70">{exp.location}</p>
              </div>
              <p className="text-sm text-white/70 mb-2">{exp.period}</p>
              <ul className="space-y-1.5 text-sm text-white/80 list-disc list-inside">
                {exp.points.map((point, j) => <li key={j}>{point}</li>)}
              </ul>
            </div>
          ))}
        </Section>

        {/* Projects */}
        <Section title="Projects" icon={<Code />}>
          {resumeData.projects.map((proj, i) => (
            <div key={i} className="mb-5">
              <h3 className="text-md sm:text-lg font-semibold text-white flex items-center gap-2">
                {proj.name}
                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                    <Link className="w-4 h-4" />
                  </a>
                )}
              </h3>
              <ul className="space-y-1.5 text-sm text-white/80 list-disc list-inside mt-2">
                {proj.points.map((point, j) => <li key={j}>{point}</li>)}
              </ul>
            </div>
          ))}
        </Section>

        {/* Education */}
        <Section title="Education" icon={<GraduationCap />}>
          {resumeData.education.map((edu, i) => (
            <div key={i} className="mb-4">
              <div className="flex flex-col sm:flex-row justify-between">
                <h3 className="text-md sm:text-lg font-semibold text-white">{edu.institution}</h3>
                <p className="text-sm text-white/70">{edu.location}</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between text-sm text-white/90">
                <p className="italic">{edu.degree}</p>
                <p className="text-white/70">{edu.period}</p>
              </div>
              {edu.details.length > 0 && (
                <ul className="mt-2 space-y-1 text-sm text-white/70 list-disc list-inside">
                  {edu.details.map((detail, j) => <li key={j}>{detail}</li>)}
                </ul>
              )}
            </div>
          ))}
        </Section>
      </div>
    </div>
  )
}