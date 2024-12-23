import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { UserCircle } from 'lucide-react';

const Navbar = () => {
  const isLoggedIn = false; // This will be replaced with actual auth state later

  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-600">Qirb</span>
          </Link>

          <div className="hidden sm:flex items-center space-x-8">
            <Link to="/discover" className="text-gray-600 hover:text-gray-900">
              Discover
            </Link>
            <Link to="/events" className="text-gray-600 hover:text-gray-900">
              Events
            </Link>
            {isLoggedIn ? (
              <Link to="/profile">
                <UserCircle className="h-8 w-8 text-gray-600 hover:text-gray-900" />
              </Link>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/signin">
                  <Button variant="ghost">Sign In</Button>
                </Link>
                <Link to="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;