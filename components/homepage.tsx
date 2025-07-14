import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Users, Calendar, Star, Mail,  TrendingUp, Eye, Heart, Sun, Zap, Target, Award } from 'lucide-react';

const BlogLanding: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  const stats = [
    { icon: BookOpen, label: "Articles Published", value: "500+", color: "text-blue-600" },
    { icon: Users, label: "Monthly Readers", value: "50K+", color: "text-green-600" },
    { icon: Calendar, label: "Years Active", value: "5+", color: "text-purple-600" },
    { icon: Star, label: "Average Rating", value: "4.8", color: "text-yellow-600" }
  ];

  const features = [
    {
      icon: Sun,
      title: "Fresh Content Daily",
      description: "New articles and tutorials published every day to keep you updated with the latest trends."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed and performance, ensuring the best reading experience across all devices."
    },
    {
      icon: Target,
      title: "Expert Authors",
      description: "Content written by industry professionals and thought leaders with years of experience."
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized by the tech community for quality content and innovative approach to learning."
    }
  ];

  const categories = [
    { name: "Web Development", count: 125, color: "bg-blue-500" },
    { name: "Mobile Apps", count: 89, color: "bg-green-500" },
    { name: "UI/UX Design", count: 76, color: "bg-purple-500" },
    { name: "DevOps", count: 54, color: "bg-red-500" },
    { name: "AI & ML", count: 43, color: "bg-yellow-500" },
    { name: "Cybersecurity", count: 32, color: "bg-indigo-500" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 m-0 p-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 animate-pulse">
                <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                New articles every week
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  TechBlog
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300">
                Discover insights, tutorials, and the latest trends in technology, design, and development.
                Join our community of passionate creators and learners.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <span className="flex items-center gap-2">
                    Start Reading
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
                <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-300">
                  Subscribe Newsletter
                </button>
              </div>

              {/* Floating Cards Animation */}
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
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-500 rounded-full opacity-10 animate-bounce"></div>
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-pink-500 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-green-500 rounded-full opacity-10 animate-bounce"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white dark:bg-gray-700 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl group"
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Featured Articles
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover our most popular and recent content, carefully curated for developers and tech enthusiasts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPosts.map((post, index) => (
              <article
                key={post.id}
                className="group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="flex items-center gap-1 px-2 py-1 bg-black bg-opacity-50 text-white text-xs rounded">
                      <Eye className="w-3 h-3" />
                      {post.views}
                    </span>
                    <span className="flex items-center gap-1 px-2 py-1 bg-black bg-opacity-50 text-white text-xs rounded">
                      <Heart className="w-3 h-3" />
                      {post.likes}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm mb-4 line-clamp-3 text-gray-600 dark:text-gray-400">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          {post.author}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {post.date} • {post.readTime}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Categories
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Find articles in your area of interest
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer p-6 bg-white dark:bg-gray-700 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl text-center"
              >
                <div className={`w-12 h-12 ${category.color} rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}></div>
                <h3 className="font-semibold mb-2 text-sm">{category.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{category.count} articles</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose TechBlog?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We're committed to providing the best learning experience for developers and tech enthusiasts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-white dark:bg-gray-800 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
    </div>
  );
};

export default BlogLanding;