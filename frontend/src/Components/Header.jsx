import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import Logo from "../assets/Logo.png";
import { useAuth } from "../store/AuthContext";

function Header() {
  let { isLoggedIn } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white p-3 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-green-600 hover:text-green-800"
        >
          <img src={Logo} className="h-10 w-10" alt="AgriSmart Logo" />
          AgriSmart
        </NavLink>
        <div className="hidden lg:flex items-center space-x-6">
          <NavLink
            to="/"
            className="text-lg text-gray-700 hover:text-green-600"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-lg text-gray-700 hover:text-green-600"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={scrollFooter}
            className="text-lg text-gray-700 hover:text-green-600 focus:outline-none cursor-pointer"
          >
            Contact
          </NavLink>
        </div>
        {!isLoggedIn ? (
          <a
            className="hidden md:block px-4  py-2 bg-blue-500 text-white rounded hover:bg-blue-700 "
            href="/login"
          >
            Login
          </a>
        ) : (
          <div className="flex gap-10">
            <a className="hidden md:block px-4  py-2  rounded" href="/profile">
              <CgProfile size={30} />
            </a>
            <a
              className="hidden md:block px-4  py-2 bg-blue-500 text-white rounded hover:bg-blue-700 "
              href="/logout"
            >
              Logout
            </a>
          </div>
        )}

        <button
          onClick={toggleMenu}
          className="lg:hidden text-green-600 focus:outline-none"
        >
          <FiMenu size={30} />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-[50%] sm:w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 60 }}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-700 hover:text-red-600 focus:outline-none"
        >
          <FiX className="w-6 h-6" />
        </button>
        <ul className="flex flex-col items-center mt-16 space-y-6">
          <li>
            <NavLink
              to="/"
              className="text-lg font-medium text-gray-700 hover:text-green-600 focus:outline-none"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-lg font-medium text-gray-700 hover:text-green-600 focus:outline-none"
              onClick={toggleMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={toggleMenu}
              className="text-lg font-medium text-gray-700 hover:text-green-600 focus:outline-none"
            >
              Contact
            </NavLink>
          </li>
          {!isLoggedIn ? (
            <li>
              <NavLink
                className="text-lg font-medium text-gray-700 hover:text-green-600 focus:outline-none"
                to="/login"
                onClick={toggleMenu}
              >
                Login
              </NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink
                  className="text-lg font-medium text-gray-700 hover:text-green-600 focus:outline-none"
                  to="/profile"
                  onClick={toggleMenu}
                >
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-lg font-medium text-gray-700 hover:text-green-600 focus:outline-none"
                  to="/logout"
                  onClick={toggleMenu}
                >
                  Logout
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
}

export default Header;
