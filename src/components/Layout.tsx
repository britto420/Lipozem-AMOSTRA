import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#6B8E23] py-4 px-6 flex justify-between items-center z-50">
        <Link to="/" className="flex items-center">
          <img 
            src="https://www.lipozem.com/assets/main/img/logo.png" 
            alt="Lipozem Logo" 
            className="h-8"
          />
        </Link>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 text-center mb-8">
            <Link to="/contact" className="hover:text-yellow-300 whitespace-nowrap">Contact</Link>
            <Link to="/terms" className="hover:text-yellow-300 whitespace-nowrap">Terms</Link>
            <Link to="/privacy" className="hover:text-yellow-300 whitespace-nowrap">Privacy</Link>
            <Link to="/returns" className="hover:text-yellow-300 whitespace-nowrap">Return Policy</Link>
            <Link to="/shipping" className="hover:text-yellow-300 whitespace-nowrap">Shipping</Link>
            <Link to="/disclaimer" className="hover:text-yellow-300 whitespace-nowrap">Disclaimer</Link>
            <Link to="/references" className="hover:text-yellow-300 whitespace-nowrap">References</Link>
          </div>
          
          <div className="max-w-4xl mx-auto text-center text-sm space-y-6">
            <p>
              © Lipozem Research {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}