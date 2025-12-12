import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Cleaning Division', path: '/cleaning' },
    { name: 'Contact', path: '/contact' },
  ];

  // Logic for text color: Transparent on Home AND Cleaning page when at top
  const isTransparentPage = location.pathname === '/' || location.pathname === '/cleaning';
  const textColorClass = scrolled || !isTransparentPage ? 'text-slate-900' : 'text-[#fefefe]';
  const logoColorClass = scrolled || !isTransparentPage ? 'text-primary' : 'text-[#fefefe]';
  const mobileMenuIconClass = scrolled || !isTransparentPage ? 'text-slate-900' : 'text-[#fefefe]';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className={`font-serif text-2xl tracking-widest font-bold flex items-center gap-2 transition-colors duration-300 ${logoColorClass}`}>
          <Building2 className="w-6 h-6 mb-1" />
          OMANI GROUP
        </Link>

        {/* Desktop Menu - Visible only on Large screens (1024px+) */}
        <div className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:text-accent ${textColorClass}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile/Tablet Menu Button - Visible on screens smaller than 1024px */}
        <button 
          className="lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={mobileMenuIconClass} />
          ) : (
            <Menu className={mobileMenuIconClass} />
          )}
        </button>
      </div>

      {/* Mobile/Tablet Menu Dropdown */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col py-8 px-6 space-y-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-primary text-sm uppercase tracking-widest font-medium hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;