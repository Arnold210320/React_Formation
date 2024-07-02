import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <nav className="w-[200px] absolute flex flex-col p-[1rem] ">
      <h2 className="text-stone-950 mt-[1rem] ">Catégories</h2>
      <ul className="mt-2">
        <li className="mt-2 hover:underline">
          <Link to="/produits">ALL</Link>
        </li>
        <li className="mt-2 hover:underline">
          <Link to="/">Iphone</Link>
        </li>
        <li className="mt-2 hover:underline">
          <Link to="/produits">Samsung</Link>
        </li>
      </ul>
    </nav>
  );
}
