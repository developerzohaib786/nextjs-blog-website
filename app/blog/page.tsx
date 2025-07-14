'use client';
import React from 'react'
import { ArrowRight, BookOpen, Users, Calendar, Star, Mail,  TrendingUp, Eye, Heart, Sun, Zap, Target, Award } from 'lucide-react';
import { useState } from 'react';

 const featuredPosts = [
    {
      id: 1,
      title: "The Future of Web Development: What's Next in 2025?",
      excerpt: "Exploring the latest trends and technologies shaping the future of web development, from AI integration to advanced frameworks and beyond.",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Technology",
      views: "12.5k",
      likes: "342",
      featured: true
    },
    {
      id: 2,
      title: "Building Scalable Applications with Modern Architecture",
      excerpt: "Learn how to design and build applications that can grow with your business using microservices and cloud-native approaches.",
      author: "Michael Chen",
      date: "Dec 12, 2024",
      readTime: "12 min read",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Architecture",
      views: "8.2k",
      likes: "156"
    },
    {
      id: 3,
      title: "UI/UX Design Trends That Will Define 2025",
      excerpt: "Discover the design principles and visual trends that will shape user experiences in the coming year.",
      author: "Emily Rodriguez",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Design",
      views: "15.1k",
      likes: "428"
    },
    {
      id: 4,
      title: "Mastering TypeScript: Advanced Patterns and Best Practices",
      excerpt: "Deep dive into advanced TypeScript patterns that will make your code more robust and maintainable.",
      author: "David Kim",
      date: "Dec 8, 2024",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Programming",
      views: "9.8k",
      likes: "267"
    },
    {
      id: 5,
      title: "The Rise of AI in Software Development",
      excerpt: "How artificial intelligence is transforming the way we write, test, and deploy software applications.",
      author: "Lisa Wang",
      date: "Dec 5, 2024",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "AI",
      views: "18.3k",
      likes: "512"
    },
    {
      id: 6,
      title: "Performance Optimization Techniques for Modern Web Apps",
      excerpt: "Essential strategies to make your web applications faster and more efficient for better user experience.",
      author: "Alex Thompson",
      date: "Dec 3, 2024",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Performance",
      views: "11.7k",
      likes: "298"
    }
  ];


const Blog = () => {
    const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {featuredPosts.slice(0, 3).map((post, index) => (
                  <div
                    key={post.id}
                    className={`transform transition-all duration-1000 hover:scale-105 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h3 className="font-semibold text-sm mb-2 line-clamp-2">{post.title}</h3>
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                        <span>{post.author}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
    </div>
  )
}

export default Blog
