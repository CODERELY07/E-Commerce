// Make this code short
import { useContext, useEffect, useState } from 'react';
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
import { Link, useLocation, useNavigate } from 'react-router-dom';

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShopPage, setIsShopPage] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const location = useLocation();

  const navigate = useNavigate();


  const handleSearchSubmit = (e) => {
    if ((e.key === 'Enter') && searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setIsSearchOpen(false);
      setSearchTerm('');
    }
  };

  useEffect(() => {
    
      setIsShopPage(location.pathname === '/shop' || location.pathname === '/search');
   
  
    const scrollHandler = () =>{
      setIsScrolled(window.scrollY > 10);
    }

    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  })

  console.log(isShopPage)
  const {cart} = useContext(CartContext);

  const MotionLink = motion(Link);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
    <MarqueeComponent/>
    <nav className={`bg-transparent fixed w-full transition-all duration-500 ease-in-out z-50 ${isScrolled ? 'bg-white/70 shadow-lg top-0' : 'bg-transparent top-8'}`}>
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
                  <Link to={navigation.link} key={navigation.id} className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium">
                    {navigation.name}
                  </Link>
                ))
              }
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {
              isShopPage && (
                <button onClick={toggleSearch} className="p-2 text-gray-700 hover:text-black">
                  <Search className="h-5 w-5" />
                </button>
            )}
         

            <Link to="/cart" className="p-2 text-gray-700 hover:text-black relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                 {cart.length}
              </span>
            </Link>
            
          </div>

          <div className="md:hidden flex items-center">
            {
              isShopPage && (
                <button onClick={toggleSearch} className="p-2 text-gray-700 hover:text-black mr-2">
                  <Search className="h-5 w-5" />
                </button>
              )
            }
       
            <button onClick={toggleMenu} className="p-2 text-gray-700 hover:text-black">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {isSearchOpen && isShopPage && (
        <div className="py-3 bg-white max-w-[800px] mx-auto">
          <div className="flex border rounded-lg  border-gray-200 justify-between items-center px-4">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearchSubmit}
              className="w-full py-2 border-0 focus:outline-none"
            />
            <Search className="text-gray-400" />
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
                <span onClick={toggleMenu} className='mb-4 flex gap-2 items-center'>
                  WataShop
                </span>
                            
              {navigationMenu.map((navigation) => (
                <MotionLink
                  to={navigation.link}
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  key={navigation.id}
                  onClick={toggleMenu}
                  className="block px-3 py-2 rounded-md text-black font-bold text-2xl flex gap-2 sm:text-3xl hover:text-black my-5"
                >
                  <span>{navigation.name}</span>
                  <ArrowUpRight />
                </MotionLink>
                ))}
                
            </div>
            <div className="px-2 border-l border-gray-600  flex-none w-14 ">
               <button onClick={toggleMenu} className="p-2 pl-4 mt-2 te text-gray-700 hover:text-black">
                 <X className="h-5 w-5" />
                </button>
              <div className="flex gap-3 mt-5 flex-col items-center justify-around">
                <Link to="/cart" onClick={toggleMenu} className="p-2 text-gray-700 hover:text-black relative">
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