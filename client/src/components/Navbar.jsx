import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* <img src="/sampleImages/logo.png" alt="Struxzora Logo" className="h-auto w-20" /> */}
        <h1 className="text-xl font-bold">Struxzora Constructions</h1>



        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li>
            <a href="#about" className="hover:text-yellow-400">About</a>
          </li>
          <li>
            <a href="#products" className="hover:text-yellow-400">Products</a>
          </li>
          <li>
            <a href="#whyus" className="hover:text-yellow-400">Why Us</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 bg-gray-800 text-center py-4 px-6 mt-2 rounded">
          <li>
            <a href="#about" onClick={closeMenu} className="hover:text-yellow-400">About</a>
          </li>
          <li>
            <a href="#products" onClick={closeMenu} className="hover:text-yellow-400">Products</a>
          </li>
          <li>
            <a href="#whyus" onClick={closeMenu} className="hover:text-yellow-400">Why Us</a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu} className="hover:text-yellow-400">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
