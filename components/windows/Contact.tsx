'use client'

import { motion } from 'framer-motion'
import { Send, Mail, Phone, Linkedin, Github, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success('Message sent!', {
          description: "Thanks for reaching out. I'll get back to you soon.",
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        toast.error('Failed to send message.', {
          description: result.error || 'Please try again later.',
        })
      }
    } catch (error) {
      toast.error('An error occurred.', {
        description: 'Please check your connection and try again.',
      })
    } finally {
      setIsLoading(false)
    }
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
              <span className="text-white/90 text-sm sm:text-base break-all">girishfob5040@gmail.com</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg"
            >
              <Phone className="w-5 h-5 text-green-400" />
              <span className="text-white/90 text-sm sm:text-base">(315) 374-1153</span>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <motion.a
              href="https://www.linkedin.com/in/girish-kanjiyani/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center p-3 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5 text-blue-400" />
              <span className="ml-2 text-blue-400 sm:hidden">LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://github.com/girish-kanjiyani7"
              target="_blank"
              rel="noopener noreferrer"
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
              disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 disabled:bg-blue-500/50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
            <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
          </motion.button>
        </motion.form>
      </div>
    </div>
  )
}