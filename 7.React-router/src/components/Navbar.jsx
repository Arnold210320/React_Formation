import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import hamburger from "./assets/hamburger.svg";
import close from "./assets/close.svg";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <nav className=" top-0 w-full flex justify-center bg-slate-200 p-4">
        <ul
          className={`${
            showMenu ? "flex" : "hidden"
          } flex-col items-center bg-slate-200 w-full top-full pb-5 sm:flex sm:relative sm:flex-row sm:pb-0 justify-center`}
        >
          {/*<li>
          <NavLink to="/" className={({isActive}) => `${isActive && "bg-slate-500 "}`}>Home</NavLink>
    </li>*/}
          <NavLink className="mx-2 text-md text-bold" to="/">
            Home
          </NavLink>
          <NavLink className="mx-2 text-md text-bold" to="/about">
            About
          </NavLink>
          <NavLink className="mx-2 text-md text-bold" to="/user/: id">
            Users
          </NavLink>
          <NavLink className="mx-2 text-md text-bold" to="/contact">
            Contact
          </NavLink>
          <NavLink className="mx-2 text-md text-bold" to="/analytics">
            Analytics
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
    </div>
  );
}
