import { useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Panier from "./Panier";
import { ShoppingCart, Home, Store, Activity } from "lucide-react";
import logo from "../assets/emergence.png";

export default function Header() {
  const [showPanier, setShowPanier] = useState(false);
  const telCart = useSelector((state) => state.telCart);
  return (
    <nav className=" backdrop-blur-sm bg-white/30 fixed top-0 w-full flex justify-center p-4">
      <img className="w-[50px] h-[50px]" src={logo} alt="logo" />
      <ul className="flex-col items-center w-full top-full pb-5 sm:flex sm:relative sm:flex-row sm:pb-0 justify-center">
        <NavLink
          className=" hover:text-yellow-400 hover:underline mx-2 text-md text-bold flex"
          to="/"
        >
          <Home size={20} /> <span className="">Acceuil</span>
        </NavLink>
        <NavLink
          className=" hover:text-yellow-400 hover:underline mx-2 text-md text-bold flex"
          to="/produits"
        >
          <Store size={20} /> <span className="">Produits</span>
        </NavLink>
        <NavLink
          className=" hover:text-yellow-400 hover:underline mx-2 text-md text-bold flex"
          to="/histoire"
        >
          <Activity size={20} /> <span className="">Histoire</span>
        </NavLink>
      </ul>
      <button onClick={() => setShowPanier(true)} className="ml-auto bg-white">
        <span className=" absolute right-3 top-3 rounded-xl w-6 h-6 bg-red-500 grid place-items-center">
          {"+"}
          {telCart.cart.reduce((acc, tel) => acc + tel.quantity, 0)}
        </span>
        <ShoppingCart color="black" size={40} />{" "}
        {showPanier &&
          createPortal(
            <Panier closePanier={() => setShowPanier(false)} />,
            document.body
          )}
      </button>
    </nav>
  );
}
