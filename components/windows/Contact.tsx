'use client'

import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="p-3 sm:p-6 h-full overflow-y-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-white/70 leading-relaxed text-sm sm:text-base">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and innovation.
            </p>
          </div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg"
            >
              <Mail className="w-5 h-5 text-blue-400" />
              <span className="text-white/90 text-sm sm:text-base break-all">girish.kanjiyani@gmail.com</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg"
            >
              <Phone className="w-5 h-5 text-green-400" />
              <span className="text-white/90 text-sm sm:text-base">+1 (469) 667-9185</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg"
            >
              <MapPin className="w-5 h-5 text-red-400" />
              <span className="text-white/90 text-sm sm:text-base">Dallas, TX</span>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <motion.a
              href="https://linkedin.com/in/girishkanjiyani"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center p-3 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5 text-blue-400" />
              <span className="ml-2 text-blue-400 sm:hidden">LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://github.com/girishkanjiyani"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200"
            >
              <Github className="w-5 h-5 text-white/80" />
              <span className="ml-2 text-white/80 sm:hidden">GitHub</span>
            </motion.a>
          </div>
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-white/90 text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors duration-200"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white/90 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors duration-200"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-white/90 text-sm font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors duration-200"
              placeholder="What's this about?"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-white/90 text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors duration-200 resize-none"
              placeholder="Tell me about your project or just say hello!"
              required
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200"
          >
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </motion.button>
        </motion.form>
      </div>
    </div>
  )
}