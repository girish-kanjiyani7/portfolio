'use client'

import { motion } from 'framer-motion'
import { Download, Eye } from 'lucide-react'

export function Resume() {
  const resumePdfUrl = '/GK_back_draft.pdf';

  return (
    <div className="p-3 sm:p-6 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white">Resume</h2>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <motion.a
            href={resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors duration-200"
          >
            <Eye className="w-4 h-4 text-blue-300" />
            <span className="text-blue-300 text-sm">Preview</span>
          </motion.a>
          <motion.a
            href={resumePdfUrl}
            download="Girish_Kanjiyani_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center space-x-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg transition-colors duration-200"
          >
            <Download className="w-4 h-4 text-green-300" />
            <span className="text-green-300 text-sm">Download</span>
          </motion.a>
        </div>
      </div>
      
      <div className="flex-1 bg-white/5 rounded-lg border border-white/10 overflow-hidden">
        <div className="w-full h-full p-4 sm:p-8 bg-white text-black overflow-y-auto">
          <div className="max-w-3xl mx-auto">
            <header className="text-center mb-8">
              <h1 className="text-2xl sm:text-4xl font-bold mb-2">Girish Kanjiyani</h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-4">Data Scientist & Software Engineer</p>
              <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                <span className="break-all">📧 girish.kanjiyani@gmail.com</span>
                <span>📱 (469) 667-9185</span>
                <a href="https://linkedin.com/in/girishkanjiyani" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/girishkanjiyani</a>
              </div>
            </header>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">Summary</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Data Scientist with a Master’s degree from the University of Texas at Dallas and a strong foundation in software engineering. Proficient in Python, SQL, and machine learning, with hands-on experience in developing predictive models, building data pipelines, and creating data-driven solutions. Passionate about leveraging data to drive business impact and innovation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">Skills</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-gray-700">
                <div><h3 className="font-bold text-black mb-1">Programming</h3><p>Python, R, SQL, Java, C++</p></div>
                <div><h3 className="font-bold text-black mb-1">Data Science & ML</h3><p>Pandas, NumPy, Scikit-learn, TensorFlow, Keras, PyTorch, NLTK</p></div>
                <div><h3 className="font-bold text-black mb-1">Big Data & Cloud</h3><p>AWS (S3, EC2, Glue, Lambda), Azure, Apache Spark, Docker</p></div>
                <div><h3 className="font-bold text-black mb-1">Databases</h3><p>PostgreSQL, MySQL, MongoDB</p></div>
                <div><h3 className="font-bold text-black mb-1">Web Development</h3><p>React, FastAPI, JavaScript, HTML/CSS</p></div>
                <div><h3 className="font-bold text-black mb-1">BI & Visualization</h3><p>Tableau, Power BI, Matplotlib, Seaborn</p></div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">Education</h2>
              <div className="mb-4">
                <h3 className="font-bold">Master of Science in Data Science</h3>
                <p className="text-gray-600 text-sm sm:text-base">University of Texas at Dallas, Richardson, TX • May 2024</p>
                <p className="text-gray-600 text-sm">GPA: 3.8/4.0</p>
              </div>
              <div>
                <h3 className="font-bold">Bachelor of Engineering in Computer Science</h3>
                <p className="text-gray-600 text-sm sm:text-base">Gujarat Technological University, India • May 2022</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}