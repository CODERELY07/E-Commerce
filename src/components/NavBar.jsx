// Make this code short
import { useContext, useState } from 'react';
import {
  Search,
  ShoppingCart,

  Heart,
  Menu,
  X
} from 'lucide-react';

import MarqueeComponent from './MarqueeComponent';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from 'lucide-react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const navigationMenu = [
  {
    id:1,
    name: "Shop",
    link: "/shop",
  },
  {
    id:3,
    name: "About",
    link: "/about",
  },
  {
    id:4,
    name: "Contact",
    link: "/contact",
  },
  
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const {cart} = useContext(CartContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
     <MarqueeComponent/>
   
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl montserrat-font text-black">
              WataShop
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {
                navigationMenu.map(navigation => (
                  <a href={navigation.link} key={navigation.id} className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium">
                    {navigation.name}
                  </a>
                ))
              }
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button onClick={toggleSearch} className="p-2 text-gray-700 hover:text-black">
              <Search className="h-5 w-5" />
            </button>
            <a href="/wishlist" className="p-2 text-gray-700 hover:text-black relative">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </a>
            <Link to="/cart" className="p-2 text-gray-700 hover:text-black relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                 {cart.length}
              </span>
            </Link>
            
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleSearch} className="p-2 text-gray-700 hover:text-black mr-2">
              <Search className="h-5 w-5" />
            </button>
            <button onClick={toggleMenu} className="p-2 text-gray-700 hover:text-black">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="py-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 "
              />
              <Search className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        <AnimatePresence>
          {/* menu is open  opacity and toggle function */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-30"
              onClick={toggleMenu} 
            />
          )}

        {isMenuOpen && ( 
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }} className="fixed inset-y-0 left-0 w-full  bg-white z-40 shadow-md px-4 md:hidden flex justify-start overflow-hidden">   

            <div className="px-2 pt-2 pb-3 mt-4 space-y-1 sm:px-3 flex-1">
                <span className='mb-4 flex gap-2 items-center'>
                  WataShop
                </span>
                {navigationMenu.map(navigation => (
                    <motion.a
                      href={navigation.link}
                      whileHover={{ x: 8 }} 
                      transition={{ type: "spring", stiffness: 300 }}
                      key={navigation.id}
                      className="block px-3 py-2 rounded-md text-black font-bold text-2xl flex gap-2 sm:text-3xl hover:text-black  my-5"
                    >
                      <span>{navigation.name}</span>
                      <ArrowUpRight />
                    </motion.a>
                ))}
                
            </div>
            <div className="px-2 border-l border-gray-600  flex-none w-14 ">
               <button onClick={toggleMenu} className="p-2 pl-4 mt-2 te text-gray-700 hover:text-black">
                 <X className="h-5 w-5" />
                </button>
              <div className="flex gap-3 mt-5 flex-col items-center justify-around">
                <a href="/wishlist" className="p-2 text-gray-700 hover:text-black relative">
                  <Heart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    3
                  </span>
                </a>
                <Link to="/cart" className="p-2 text-gray-700 hover:text-black relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {cart.length}
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
          
        )}
        </AnimatePresence>
      </div>
    </nav>
    </>
  );
};

export default Navbar;