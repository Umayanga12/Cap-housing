"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed w-full z-50 bg-white/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          photo
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-gray-600 transition-colors">
            Home
          </Link>
          <Link href="#about" className="hover:text-gray-600 transition-colors">
            About Us
          </Link>
          <Link
            href="#models"
            className="hover:text-gray-600 transition-colors"
          >
            Models
          </Link>
          <Link
            href="#features"
            className="hover:text-gray-600 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#contact"
            className="hover:text-gray-600 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
