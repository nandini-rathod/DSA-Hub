import { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { CgDetailsMore } from "react-icons/cg";
import { PiNumberSquareThreeBold, PiIntersectThreeBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { LiaWpbeginner } from "react-icons/lia";
import { Contact } from "lucide-react";
import ThemeToggle from "../ThemeToggle"; // ✅ import toggle

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 py-5 px-4 sm:px-6 lg:px-8 backdrop-blur-md shadow-md transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex-shrink-0 text-2xl font-bold text-black dark:text-purple-500 rounded-lg ml-2 py-2 transition-all duration-300 hover:scale-110"
        >
          CodeWithNandini
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex flex-grow justify-center items-center space-x-6">
          <Link to="/" className="nav-link">
            <IoMdHome /> Home
          </Link>
          <Link to="/about" className="nav-link">
            <CgDetailsMore /> About
          </Link>
          <Link to="/Beginner" className="nav-link">
            <LiaWpbeginner /> Beginner
          </Link>
          <Link to="/Advance" className="nav-link">
            <PiIntersectThreeBold /> Advance
          </Link>
          <Link to="/All-in-one" className="nav-link">
            <PiNumberSquareThreeBold /> All-in-one
          </Link>
          <Link to="/contact" className="nav-link">
            <Contact /> Contact
          </Link>
        </div>

        {/* Right section: Login + Theme Toggle */}
        <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
          <Link
            to="/auth/login"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
          >
            Login
          </Link>
          <ThemeToggle /> {/* ✅ Dark/Light toggle */}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            id="mobile-menu-button"
            onClick={toggleMobileMenu}
            className="p-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-300 text-black hover:bg-purple-700 dark:hover:bg-indigo-600"
          >
            {isMobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 top-14 w-40 h-fit bg-purple-700 dark:bg-gray-800 shadow-lg z-50 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out rounded-2xl lg:hidden`}
        style={{ maxHeight: "80vh" }}
      >
        <div className="p-4 relative">
          <button
            onClick={closeMobileMenu}
            className="absolute top-2 right-2 text-white hover:text-purple-200 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <div className="mt-6 space-y-2">
            <Link to="/" onClick={closeMobileMenu} className="mobile-link">
              <IoMdHome /> Home
            </Link>
            <Link to="/about" onClick={closeMobileMenu} className="mobile-link">
              <CgDetailsMore /> About
            </Link>
            <Link to="/Beginner" onClick={closeMobileMenu} className="mobile-link">
              <LiaWpbeginner /> Beginner
            </Link>
            <Link to="/Advance" onClick={closeMobileMenu} className="mobile-link">
              <PiIntersectThreeBold /> Advance
            </Link>
            <Link to="/All-in-one" onClick={closeMobileMenu} className="mobile-link">
              <PiNumberSquareThreeBold /> All-in-one
            </Link>
            <Link to="/contact" onClick={closeMobileMenu} className="mobile-link">
              <Contact /> Contact
            </Link>
            <div className="mt-4 flex justify-center">
              <ThemeToggle /> {/* ✅ toggle inside mobile menu */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;