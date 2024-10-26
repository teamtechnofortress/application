import React, { useState } from 'react';
import Link from "next/link";
import styles from '../styles/new.module.css';

const Nav = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  

   const toggleMobileMenu = () => {
       setIsMobileMenuOpen(!isMobileMenuOpen);
   };

   return (
       <section className="container mx-auto">
           <nav className="bg-white border-gray-200 pt-8 relative z-50">
               <div className="flex items-center justify-between w-full px-4">
                   {/* Logo Section */}
                   <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                       <img src="/images/logo.png" className={`${styles['logo']}`} alt="Flowbite Logo" />
                   </a>
                   
                   {/* Toggle Button for Mobile */}
                   <button
                       type="button"
                       className={`inline-flex items-center p-2 text-sm rounded-lg md:hidden ${isMobileMenuOpen ? 'text-gray-800' : ''}`}
                       onClick={toggleMobileMenu}
                   >
                       <span className="sr-only">Open main menu</span>
                       <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                       </svg>
                   </button>
                   
                   {/* Full Menu for Desktop */}
                   <div className={`hidden md:flex w-auto`}>
                       <ul className="font-medium flex flex-row space-x-8">
                           <li><a href="#" className={`${styles['nav-item']} block text-center`}>Preise</a></li>
                           <li><a href="#" className={`${styles['nav-item']} block text-center`}>Layouts</a></li>
                           <li>
                               <Link href="/login" legacyBehavior>
                                   <a className={`${styles['nav-item']} block text-center`}>Login</a>
                               </Link>
                               <img src="/images/loginbg.png"/>
                           </li>
                       </ul>
                   </div>
               </div>

               {/* Mobile Menu - Absolute Overlay */}
               {isMobileMenuOpen && (
                   <div className="absolute top-full left-0 w-full bg-white z-50 p-4 shadow-lg">
                       <ul className="font-medium flex flex-col space-y-4">
                           <li><a href="#" className={`${styles['nav-item']} block`}>Preise</a></li>
                           <li><a href="#" className={`${styles['nav-item']} block`}>Layouts</a></li>
                           <li>
                               <Link href="/login" legacyBehavior>
                                   <a className={`${styles['nav-item']} block`}>Login</a>
                               </Link>
                           </li>
                       </ul>
                   </div>
               )}
           </nav>
       </section>
   );
}

export default Nav;
