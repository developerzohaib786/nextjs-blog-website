import React from 'react'
import { ArrowRight, BookOpen, Users, Calendar, Star, Mail,  TrendingUp, Eye, Heart, Sun, Zap, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import matter from  'gray-matter';
import fs from 'fs';

const dirContent = fs.readdirSync('content','utf-8');

const posts = dirContent.map(file => {
  const fileContent = fs.readFileSync(`content/${file}`, 'utf-8');
  const { data,content } = matter(fileContent);
  return { ...data, content };
});






const Blog = () => {

  return (
       <section className="py-20 px-6">
           <div className="max-w-7xl mx-auto">
             <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                 Blog Posts
               </h2>
               <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                 Discover our most popular and recent content, carefully curated for developers and tech enthusiasts
               </p>
             </div>
   
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
               {posts.map((post: any, index: number) => (
               <article
                 key={post.id || index}
                 className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
                 style={{
                 animationDelay: `${index * 100}ms`
                 }}
               >
                 <div className="relative overflow-hidden">
                 <img
                   src={post.image || '/default.jpg'}
                   alt={post.title}
                   className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                 />
               
            
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
                     {post.author ? post.author.split(' ').map((n: string) => n[0]).join('') : 'AU'}
                     </span>
                   </div>
                   <div>
                     <p className="text-sm font-medium">
                     {post.author || 'Anonymous'}
                     </p>
                     <p className="text-xs text-gray-500 dark:text-gray-400">
                     {post.date || 'Unknown'} • {post.readTime || '0 min read'}
                     </p>
                   </div>
                   </div>
                   <Button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    <Link href={`/blogpost/${post.slug || index}`}>
                    Read More
                    </Link>
                   </Button>
                 </div>
                 </div>
               </article>
               ))}
             </div>
   
             <div className="text-center">
               <button className="px-8 py-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                 Lorem Ipsum
               </button>
             </div>
           </div>
         </section>
  )
}

export default Blog
