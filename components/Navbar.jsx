"use client"
import { Button } from "@/components/ui/button";
import { Menu, X, Gift } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="backdrop-blur-md sticky top-0 z-50 w-full border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Gift className="h-8 w-8 text-[#FF69B4]" />
          <span className="font-display font-semibold text-2xl btn-color text-transparent bg-clip-text">Special Surprise</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-[#FF69B4] transition-colors">Home</Link>
          <Link href="/surprises" className="hover:text-[#FF69B4] transition-colors">Surprises</Link>
          <Link href="/how-it-works" className="hover:text-[#FF69B4] transition-colors">How It Works</Link>
          <Link href="/testimonials" className="hover:text-[#FF69B4] transition-colors">Testimonials</Link>
          <Link href="/contact" className="hover:text-[#FF69B4] transition-colors">Contact</Link>
          <Button className="bg-gradient-to-r from-[#FF69B4] to-[#9370DB] text-white font-semibold hover:opacity-90 hover:btn-bounce">
            Order Now
          </Button>
        </div>

        {/* Mobile Navigation Trigger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full border-b border-gray-200 z-50">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-2">
            <Link
              href="/"
              className="hover:text-[#FF69B4] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/surprises"
              className="hover:text-[#FF69B4] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Surprises
            </Link>
            <Link
              href="/how-it-works"
              className="hover:text-[#FF69B4] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/testimonials"
              className="hover:text-[#FF69B4] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#FF69B4] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button className="btn-color text-white font-semibold hover:opacity-90 hover:btn-bounce w-full">
              Order Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;