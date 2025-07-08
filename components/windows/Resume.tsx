'use client'

import { motion } from 'framer-motion'
import { Download, Eye } from 'lucide-react'

export function Resume() {
  return (
    <div className="p-3 sm:p-6 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white">Resume</h2>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors duration-200"
          >
            <Eye className="w-4 h-4 text-blue-300" />
            <span className="text-blue-300 text-sm">Preview</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center space-x-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg transition-colors duration-200"
          >
            <Download className="w-4 h-4 text-green-300" />
            <span className="text-green-300 text-sm">Download</span>
          </motion.button>
        </div>
      </div>
      
      <div className="flex-1 bg-white/5 rounded-lg border border-white/10 overflow-hidden">
        <div className="w-full h-full p-4 sm:p-8 bg-white text-black overflow-y-auto">
          <div className="max-w-2xl mx-auto">
            <header className="text-center mb-8">
              <h1 className="text-2xl sm:text-4xl font-bold mb-2">Girish Kanjiyani</h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-4">Data Scientist & Software Engineer</p>
              <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                <span className="break-all">📧 girish.kanjiyani@gmail.com</span>
                <span>📱 +1 (469) 667-9185</span>
                <span className="break-all">🌐 linkedin.com/in/girishkanjiyani</span>
              </div>
            </header>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">Summary</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Data Scientist and Software Engineer with expertise in machine learning, data analysis, and full-stack development. 
                Experienced in building scalable data pipelines, developing predictive models, and creating data-driven solutions. 
                Strong background in Python, SQL, and cloud technologies with a passion for turning data into actionable insights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold mb-2">Programming Languages</h3>
                  <p className="text-sm text-gray-700">Python, R, SQL, JavaScript, Java, C++</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Data Science & ML</h3>
                  <p className="text-sm text-gray-700">Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Databases & Tools</h3>
                  <p className="text-sm text-gray-700">PostgreSQL, MongoDB, Tableau, Power BI, Git</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Cloud & Web</h3>
                  <p className="text-sm text-gray-700">AWS, Azure, Docker, React, Node.js, FastAPI</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">Education</h2>
              <div className="mb-4">
                <h3 className="font-bold">Master of Science in Data Science</h3>
                <p className="text-gray-600 text-sm sm:text-base">University of Texas at Dallas • 2022 - 2024 • GPA: 3.9/4.0</p>
              </div>
              <div className="mb-4">
                <h3 className="font-bold">Bachelor of Engineering in Computer Science</h3>
                <p className="text-gray-600 text-sm sm:text-base">Gujarat Technological University • 2018 - 2022 • GPA: 3.7/4.0</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}