import { Link, useLocation } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton,SignInButton } from "@clerk/clerk-react";
import { useState, useEffect } from 'react';
import { FaQuoteRight, FaBible, FaBars, FaTimes, FaHome } from 'react-icons/fa';
import { useUser } from '@clerk/clerk-react';


export default function NavBar() {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes.
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/Home', label: 'Home', icon: <FaHome /> },
    // { path: '/Story', label: 'Stories', icon: <FaBook /> },
    { path: '/Proverbs', label: 'Proverbs', icon: <FaQuoteRight /> },
    { path: '/Biblical', label: 'Biblical Stories', icon: <FaBible /> },
  ];

  // ???????
  const isActivePath = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };
  // ???????
  const isAdmin = user?.publicMetadata?.User === 'Admin';

  return (
    <nav 
      className={`fixed top-0 w-full left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            onClick={() => setIsOpen(false)}
          >
            <img 
              src="/BabyStoryLogo.png" 
              alt="IsoMere Logo" 
              className="h-8 w-auto transform group-hover:scale-105 transition-transform" 
            />
            <span className="text-xl font-bold text-gray-900 hidden sm:inline">
              IsoMere
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map(({ path, label, icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  isActivePath(path)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <span className="text-lg">{icon}</span>
                <span>{label}</span>
              </Link>
            ))}
          </div>

          {/* User Menu */}
          <div className="flex items-center">
            <SignedIn>
              <div className="hidden sm:flex items-center space-x-4 mr-4">
                {/* condition about the me */}
                {isAdmin && (
                <Link
                  to="/Setting"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                   Upload
                </Link>
     )}
              </div>
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-blue-100 hover:border-blue-200 transition-colors"
                  }
                }}
              />
            </SignedIn>

            <SignedOut>
            <nav className="md:flex items-center space-x-2 sm:space-x-4 hidden">
              <SignInButton mode='modal' redirectUrl='/Home'>
                <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Sign In
                </button>
              </SignInButton>
              <SignInButton mode='modal' redirectUrl='/Home'>
                <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Create Account
                </button>
              </SignInButton>
            </nav>

            </SignedOut>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden ml-4 p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-[calc(100vh-4rem)] opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        <div className="px-4 py-2 bg-white shadow-lg divide-y divide-gray-100">
          <div className="py-2 space-y-1">
            {navLinks.map(({ path, label, icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                  isActivePath(path)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <span className="text-lg">{icon}</span>
                <span>{label}</span>
              </Link>
            ))}
          </div>

          <div className="py-2 space-y-1">
            <SignedIn>
              <Link
                to="/FormStory"
                className="flex items-center space-x-2 p-3 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <span>Share Story</span>
              </Link>
            </SignedIn>

            <SignedOut>
            <nav className="flex flex-col space-x-2 sm:space-x-4 w-full">
              <SignInButton mode='modal' redirectUrl='/Home'>
                <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Sign In
                </button>
              </SignInButton>
              <SignInButton mode='modal' redirectUrl='/Home'>
                <button className=" w-full px-3  py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Create Account
                </button>
              </SignInButton>
            </nav>
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
}
