import React from 'react'
import { Github, Twitter, Linkedin} from 'lucide-react';

const Footer = () => {
  return (
    <div>
             <footer className="py-16 bg-gray-900 dark:bg-black text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid pb-3 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                TechBlog
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Empowering developers and tech enthusiasts with knowledge, insights, and the latest 
                industry trends. Join our growing community of learners and creators.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-gray-800 hover:bg-blue-600 rounded-xl transition-all duration-300 hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-gray-800 hover:bg-blue-600 rounded-xl transition-all duration-300 hover:scale-110">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-gray-800 hover:bg-blue-600 rounded-xl transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Articles</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Categories</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 TechBlog. All rights reserved. Made with ❤️ for developers.</p>
          </div>
        </div>
      </footer>     
    </div>
  )
}

export default Footer
