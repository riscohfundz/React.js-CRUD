import { AiOutlineUserAdd } from "react-icons/ai";
import { FaSchool } from "react-icons/fa";
import { Link } from "react-router";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="py-2 px-4 sm:px-8 flex justify-between items-center bg-amber-950 text-white">
      {/* Logo Section */}
      <div className="flex items-center space-x-3 bg-gray-300 rounded-2xl p-2 sm:p-3">
        <FaSchool className="text-blue-500 text-2xl sm:text-3xl" />
        <span className="text-black text-lg sm:text-2xl font-bold">
          Honeyland School
        </span>
      </div>

      {/* Middle Text (Hidden on mobile) */}
      <div className="hidden md:block font-semibold text-xl sm:text-2xl">
        HardCode University
      </div>

      {/* Add Student Button */}
      <div className="hidden md:block">
        <Link to="/create-student">
          <button className="flex items-center space-x-2 bg-blue-500 p-2 sm:p-3 rounded-2xl hover:bg-blue-600 transition">
            <AiOutlineUserAdd /> <span>Add Student</span>
          </button>
        </Link>
      </div>

      {/* Hamburger (Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <IoMdClose className="text-3xl" />
          ) : (
            <GiHamburgerMenu className="text-3xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 right-0 bg-amber-950 w-full text-center py-4 space-y-4 flex flex-col items-center md:hidden shadow-lg">
          <span className="font-semibold text-lg">HardCode University</span>
          <Link to="/create-student">
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center space-x-2 bg-blue-500 p-3 rounded-2xl hover:bg-blue-600"
            >
              <AiOutlineUserAdd /> <span>Add Student</span>
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
