"use client"
import { Button } from "@/components/ui/button";
import { Menu, X, Gift } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="backdrop-blur-3xl sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Gift className="h-8 w-8 text-surprise-pink" />
          <span className="font-display text-2xl gradient-text">Special Surprise</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-foreground hover:text-surprise-pink transition-colors">Home</Link>
          <Link href="/surprises" className="text-foreground hover:text-surprise-pink transition-colors">Surprises</Link>
          <Link href="/how-it-works" className="text-foreground hover:text-surprise-pink transition-colors">How It Works</Link>
          <Link href="/testimonials" className="text-foreground hover:text-surprise-pink transition-colors">Testimonials</Link>
          <Link href="/contact" className="text-foreground hover:text-surprise-pink transition-colors">Contact</Link>
          <Link href="/auth/login" className="text-foreground hover:text-surprise-pink transition-colors py-2">Login</Link>
          <Button className="text-white bg-gradient-to-r from-surprise-pink to-surprise-purple hover:opacity-90 btn-bounce">
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
              className="text-foreground hover:text-surprise-pink transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/surprises"
              className="text-foreground hover:text-surprise-pink transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Surprises
            </Link>
            <Link
              href="/how-it-works"
              className="text-foreground hover:text-surprise-pink transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/testimonials"
              className="text-foreground hover:text-surprise-pink transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-surprise-pink transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/auth/login"
              className="text-foreground hover:text-surprise-pink transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Button className="text-white font-semibold bg-gradient-to-r from-surprise-pink to-surprise-purple hover:opacity-90 w-full">
              Order Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;