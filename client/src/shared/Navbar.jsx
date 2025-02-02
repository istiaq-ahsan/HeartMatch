import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/bridegroom.png";
import UseAuth from "../hooks/UseAuth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = UseAuth();

  // console.log(user?.email);

  const menuItems = (
    <ul className="flex flex-col lg:flex-row md:items-center gap-6 text-sm">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 transition hover:text-blue-700"
              : "text-black transition hover:text-blue-700"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/biodatas"
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 transition hover:text-blue-700"
              : "text-black transition hover:text-blue-700"
          }
        >
          Biodatas
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 transition hover:text-blue-700"
              : "text-black transition hover:text-blue-700"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactUs"
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 transition hover:text-blue-700"
              : "text-black transition hover:text-blue-700"
          }
        >
          Contact Us
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 transition hover:text-blue-700"
                : "text-black transition hover:text-blue-700"
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </ul>
  );

  return (
    <header className="bg-white shadow-xl z-50 top-0 fixed h-[68px] w-full">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/">
            <div className="flex justify-center items-center gap-5">
              <img src={logo} className="w-10 h-10" alt="" />
              <h1 className="font-bold text-lg">HeartMatch</h1>
            </div>
          </Link>

          <div className="hidden lg:block">
            <nav aria-label="Global">{menuItems}</nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              {user && user?.email ? (
                <button
                  onClick={logOut}
                  className="rounded-md bg-blue-600 hover:bg-gray-800 px-5 py-2.5 text-sm font-medium text-white shadow"
                >
                  Logout
                </button>
              ) : (
                <Link to="/login">
                  <button className="rounded-md bg-blue-600 hover:bg-gray-800 px-5 py-2.5 text-sm font-medium text-white shadow">
                    Login
                  </button>
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="block lg:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="flex justify-end">
          {isMenuOpen && (
            <div className="lg:hidden w-3/4 p-4 flex bg-white shadow-lg border border-gray-300">
              {menuItems}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
