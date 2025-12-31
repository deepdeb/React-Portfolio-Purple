import React, { useContext, useEffect, useState } from 'react';
import { FaBars, FaCode, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContextProvider';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState('hero')


  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  const links = [
    { id: 1, label: 'Hero', to: 'hero' },
    { id: 2, label: 'About', to: 'about' },
    { id: 3, label: 'Services', to: 'services' },
    { id: 4, label: 'Portfolio', to: 'portfolio' },
    { id: 5, label: 'Contact', to: 'contact' },
  ];


  // Smooth scroll handler
  const handleScrollTo = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }


  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);




  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150 // navbar offset

      let current = 'hero'

      links.forEach((link) => {
        const section = document.getElementById(link.to)
        if (section && section.offsetTop <= scrollPosition) {
          current = link.to
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // run once on load

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])




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
          <button
            onClick={() => handleScrollTo('hero')}
            className="flex items-center gap-2 text-2xl font-black tracking-tighter text-slate-900 dark:text-white"
          >
            <FaCode className="text-blue-600" />
            <span>Pradeep<span className="text-blue-600"> .</span></span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollTo(link.to)}
                    className={`relative text-sm font-bold uppercase tracking-widest transition-colors duration-300 hover:text-blue-600 ${activeSection === link.to ? 'text-blue-600' : 'text-slate-600 dark:text-slate-400'
                      }`}
                  >
                    {link.label}
                  </button>
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
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}

            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-950 border-2 border-slate-200 dark:border-slate-700 rounded-2xl z-50 shadow-2xl py-20 px-20 lg:hidden"
          >
            <ul className="flex flex-col items-center justify-center h-full gap-8">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollTo(link.to)}
                    className={`text-3xl font-black transition-colors ${activeSection === link.to ? 'text-blue-600' : 'text-slate-900 dark:text-white hover:text-blue-600'}`}
                  >
                    {link.label}
                  </button>
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