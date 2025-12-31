import React, { useContext, useEffect, useState } from 'react';
import { FaBars, FaCode, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContextProvider';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const links = [
    { id: 1, label: 'Home', to: '/' },
    { id: 2, label: 'About', to: 'about' },
    { id: 3, label: 'Services', to: 'services' },
    { id: 4, label: 'Portfolio', to: 'portfolio' },
    { id: 5, label: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed px-4 lg:px-30 top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'py-3 bg-white/80 dark:bg-slate-950/80 lg:backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm'
          : 'py-5 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-black tracking-tighter text-slate-900 dark:text-white"
          >
            <FaCode className="text-blue-600" />
            <span>Pradeep<span className="text-blue-600"> .</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {links.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `relative text-sm font-bold uppercase tracking-widest transition-colors duration-300 hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-slate-600 dark:text-slate-400'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pl-6 border-l border-slate-200 dark:border-slate-800">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-amber-400 hover:scale-110 transition-all active:scale-95 cursor-pointer"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-600 dark:text-amber-400"
            >
              {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 text-slate-900 dark:text-white text-2xl"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>


        </nav>
      </div>



      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            // 1. Initial State (before it appears)
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            // 2. Animate State (when it's visible)
            animate={{ opacity: 1, scale: 1, y: 0 }}
            // 3. Exit State (when isMenuOpen becomes false)
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            // 4. Transition settings
            transition={{ duration: 0.4, ease: "easeOut" }}

            className="fixed inset-[90px] bg-white dark:bg-slate-950 border-2 border-slate-200 dark:border-slate-700 lg:hidden rounded-2xl z-50 shadow-2xl"
          >
            <ul className="flex flex-col items-center justify-center h-full gap-8">
              {links.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.to}
                    className="text-3xl font-black text-slate-900 dark:text-white hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>


    </header>
  );
};

export default Navbar;