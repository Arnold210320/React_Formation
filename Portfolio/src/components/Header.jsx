import logo from "../assets/Me.jpg";

import { NavLink } from "react-router-dom";
import hamburger from "../assets/hamburger.svg";
import close from "../assets/close.svg";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="backdrop-blur-sm bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-600 text-white top-0 w-full flex justify-center p-2 ">
        <img className="w-[50px] h-[50px] rounded-xl" src={logo} alt="logo" />
        <ul
          className={`${
            showMenu ? "flex" : "hidden"
          } flex-col items-center w-full top-full pb-5 sm:flex sm:relative sm:flex-row sm:pb-0 justify-center font-medium`}
        >
          <NavLink className="mx-2 text-md text-bold flex" to="/">
            <span className="">HOME</span>
          </NavLink>
          <NavLink className="mx-2 text-md text-bold flex" to="/about">
            <span className="">ABOUT</span>
          </NavLink>
          <NavLink className="mx-2 text-md text-bold flex" to="/portfolio">
            <span className="">PORTFOLIO</span>
          </NavLink>
          <NavLink className="mx-2 text-md text-bold flex" to="/blog">
            <span className="">BLOG</span>
          </NavLink>
          <NavLink className="mx-2 text-md text-bold flex" to="/services">
            <span className="">SERVICES</span>
          </NavLink>
          <NavLink className="mx-2 text-md text-bold flex" to="/contact">
            <span className="">CONTACT</span>
          </NavLink>
        </ul>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="ml-auto sm:hidden"
        >
          <img
            className="w-6"
            src={showMenu ? close : hamburger}
            alt="hamburger"
          />
        </button>
      </nav>
    </>
  );
}
