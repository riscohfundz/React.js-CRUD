import { FaSchool } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router";
import { useState } from "react";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  console.log("Current page =", location.pathname);

  const handleNavigate = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className="py-2 px-4 sm:px-8 flex justify-between items-center bg-amber-950 text-white relative">
      {/* Logo Section */}
      <div className="flex items-center space-x-3 bg-gray-300 rounded-2xl p-2 sm:p-3">
        <FaSchool className="text-blue-500 text-2xl sm:text-3xl" />
        <span className="text-black text-lg sm:text-2xl font-bold">
          Honeyland School
        </span>
      </div>

      {/* Middle Text (hidden on mobile) */}
      <div className="hidden md:block font-semibold text-xl sm:text-2xl">
      HardCode University  
      </div>

      {/* Add Student Button (desktop only) */}
      {location.pathname !== "/create-student" && (
        <div className="hidden md:block">
          <Link to="/create-student">
            <button className="flex items-center space-x-2 bg-blue-500 p-2 sm:p-3 rounded-2xl hover:bg-blue-600 transition">
              <AiOutlineUserAdd /> <span>Add Student</span>
            </button>
          </Link>
        </div>
      )}

      {/* Hamburger Menu (mobile only) */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <IoMdClose className="text-3xl" />
          ) : (
            <GiHamburgerMenu className="text-3xl" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-20 right-0 bg-amber-950 w-full text-center py-4 space-y-4 flex flex-col items-center md:hidden shadow-lg">
          <span className="font-semibold text-lg">Best School in Lagos</span>

          {location.pathname !== "/create-student" && (
            <button
              onClick={() => handleNavigate("/create-student")}
              className="flex items-center space-x-2 bg-blue-500 p-3 rounded-2xl hover:bg-blue-600"
            >
              <AiOutlineUserAdd /> <span>Add Student</span>
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Nav;
