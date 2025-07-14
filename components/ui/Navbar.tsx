'use client';
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeBtn } from "./theme-btn";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-white/10 dark:border-white/10 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-black dark:text-white">ZohaibBlog</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="/" className="text-black dark:text-white hover:font-bold">Home</a>
          <a href="/about" className="text-black dark:text-white hover:font-bold">About</a>
          <a href="/blog" className="text-black dark:text-white hover:font-bold">Blog</a>
          <button className="px-4 py-2 border rounded-md text-sm text-black dark:text-white border-black dark:border-white hover:bg-black/10 dark:hover:bg-white/10">
            Login
          </button>
          <button className="px-4 py-2 rounded-md text-sm bg-black text-white dark:bg-white dark:text-black hover:opacity-80">
            Signup
          </button>
          <ThemeBtn />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white/60 dark:bg-black/60 backdrop-blur-md">
          <a href="#" className="block text-black dark:text-white hover:underline">Home</a>
          <a href="#" className="block text-black dark:text-white hover:underline">About</a>
          <a href="#" className="block text-black dark:text-white hover:underline">Blog</a>
          <button className="w-full px-4 py-2 border rounded-md text-sm text-black dark:text-white border-black dark:border-white hover:bg-black/10 dark:hover:bg-white/10">
            Login
          </button>
          <button className="w-full px-4 py-2 rounded-md text-sm bg-black text-white dark:bg-white dark:text-black hover:opacity-80">
            Signup
          </button>
          <ThemeBtn />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
