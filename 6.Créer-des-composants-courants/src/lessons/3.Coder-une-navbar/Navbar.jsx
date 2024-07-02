import { useState } from "react";
import close from "./assets/close.svg";
import hamburger from "./assets/hamburger.svg";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="fixed top-0 w-full flex justify-center bg-slate-200 p-4">
      <ul
        className={`${
          showMenu ? "flex" : "hidden"
        } flex-col items-center bg-slate-200 w-full  absolute top-full pb-5 sm:flex sm:relative sm:flex-row sm:pb-0 justify-center`}
      >
        <li>
          <a
            className="inline-block py-2 mx-4 text-lg font-bold sm:py-0"
            href="#"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="inline-block py-2 mx-4 text-lg font-bold sm:py-0"
            href="#"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="inline-block py-2 mx-4 text-lg font-bold sm:py-0"
            href="#"
          >
            tarif
          </a>
        </li>
        <li>
          <a
            className="inline-block py-2 mx-4 text-lg font-bold sm:py-0"
            href="#"
          >
            Contact
          </a>
        </li>
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
  );
}
