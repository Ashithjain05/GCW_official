import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { FaSearch, FaTimes, FaAngleDown } from 'react-icons/fa';

const Header = ({ searchQuery, setSearchQuery, setView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setIsProductsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300 py-1">
      <div className="container flex justify-between items-center">
        <div className="logo flex items-center gap-4 cursor-pointer" onClick={() => { setView('home'); closeAllMenus(); }}>
          <img src={logo} alt="GEW Logo" className="h-20 w-auto" />
          <div>
            <h1 className="text-lg font-extrabold tracking-tighter leading-none" style={{ color: 'var(--primary)' }}>GENERAL ENGINEERING WORKS</h1>
            <p className="text-[10px] font-bold tracking-[3px] text-accent mt-1 uppercase">Since 1979</p>
          </div>
        </div>

        <div className="hidden md:flex items-center font-bold text-[10px] uppercase tracking-[3px] ml-auto gap-8" style={{ color: 'var(--text-main)' }}>
          <a href="#home" onClick={() => { setView('home'); closeAllMenus(); }} className="hover:text-accent transition-colors">Home</a>
          <a href="#about" onClick={() => { setView('home'); closeAllMenus(); }} className="hover:text-accent transition-colors">About</a>

          <div className="relative">
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); setIsServicesOpen(!isServicesOpen); setIsProductsOpen(false); }}
              className={`hover:text-accent font-bold text-[10px] uppercase tracking-[3px] flex items-center gap-1 transition-all cursor-pointer ${isServicesOpen ? 'text-accent' : 'text-text-main'}`}
            >
              Services <span className={`text-[8px] transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}>▼</span>
            </a>

            {/* Services Dropdown */}
            {isServicesOpen && (
              <div className="absolute top-[calc(100%+20px)] left-0 w-72 bg-white border border-grey-100 shadow-2xl z-[100] animate-in fade-in slide-in-from-top-2 duration-300">
                <ul className="py-2">
                  <li>
                    <a
                      href="#service-list"
                      onClick={(e) => { e.preventDefault(); setView('service-list'); closeAllMenus(); }}
                      className="block px-8 py-4 text-[9px] text-text-muted hover:text-accent hover:bg-bg-soft transition-all border-b border-grey-50 font-extrabold flex justify-between items-center group"
                    >
                      Borewell Machine Service List
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#service-list"
                      onClick={(e) => { e.preventDefault(); setView('service-list'); closeAllMenus(); }}
                      className="block px-8 py-4 text-[9px] text-text-muted hover:text-accent hover:bg-bg-soft transition-all border-b border-grey-50 font-extrabold flex justify-between items-center group"
                    >
                      Air Compressor Brands
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      onClick={(e) => { e.preventDefault(); setView('home'); closeAllMenus(); }}
                      className="block px-8 py-4 text-[9px] text-text-muted hover:text-accent hover:bg-bg-soft transition-all font-extrabold flex justify-between items-center group"
                    >
                      Comprehensive Maintenance
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="relative">
            <a
              href="#products"
              onClick={(e) => { e.preventDefault(); setIsProductsOpen(!isProductsOpen); setIsServicesOpen(false); }}
              className={`hover:text-accent font-bold text-[10px] uppercase tracking-[3px] flex items-center gap-1 transition-all cursor-pointer ${isProductsOpen ? 'text-accent' : 'text-text-main'}`}
            >
              Products <span className={`text-[8px] transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`}>▼</span>
            </a>

            {/* Products Dropdown */}
            {isProductsOpen && (
              <div className="absolute top-[calc(100%+20px)] left-0 w-72 bg-white border border-grey-100 shadow-2xl z-[100] animate-in fade-in slide-in-from-top-2 duration-300">
                <ul className="py-2">
                  <li>
                    <a
                      href="#air-compressor"
                      onClick={(e) => { e.preventDefault(); setView('compressor-gallery'); closeAllMenus(); }}
                      className="block px-8 py-4 text-[9px] text-text-muted hover:text-accent hover:bg-bg-soft transition-all border-b border-grey-50 font-extrabold flex justify-between items-center group"
                    >
                      Air Compressor
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#borewell-compressor"
                      onClick={(e) => { e.preventDefault(); setView('compressor-list'); closeAllMenus(); }}
                      className="block px-8 py-4 text-[9px] text-text-muted hover:text-accent hover:bg-bg-soft transition-all border-b border-grey-50 font-extrabold flex justify-between items-center group"
                    >
                      Borewell Compressor
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#common-type-compressor"
                      onClick={(e) => { e.preventDefault(); setView('home'); closeAllMenus(); }}
                      className="block px-8 py-4 text-[9px] text-text-muted hover:text-accent hover:bg-bg-soft transition-all font-extrabold flex justify-between items-center group"
                    >
                      Common Type Compressor
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <a href="#contact" onClick={() => { setView('home'); closeAllMenus(); }} className="hover:text-accent transition-colors">Contact</a>

          {/* Standard Search Bar */}
          <div className="flex items-center gap-2 bg-grey-100 border border-grey-200 rounded-full px-4 py-1 ml-4 focus-within:border-accent transition-all">
            <FaSearch className="text-grey-400" />
            <input
              type="text"
              placeholder="search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent w-[150px] text-[11px] font-medium py-1 px-1 appearance-none"
              style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="hover:text-accent transition-colors p-1"
                aria-label="Clear Search"
              >
                <FaTimes className="text-[10px]" />
              </button>
            )}
          </div>

          <a href="#booking" className="btn btn-accent px-8 py-3 text-[10px]">Enquiry</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
