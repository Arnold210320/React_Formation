import Categories from "../components/Categories";
import Sort from "../components/Sort";
import SearchBar from "../components/SearchBar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Produits() {
  const params = useParams();
  const navigate = useNavigate();

  const telephone = useSelector((state) => state.telephone);
  const filtre = useSelector((state) => state.filterTel);
  return (
    <main className="flex p-[4rem]">
      <Categories />
      <Sort />
      <SearchBar />
      <section className="p-[8rem] max-w-2xl mx-auto lg:max-w-5xl ">
        <ul className=" shadow-lg rounded-lg grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-8 lg:grid-cols-3">
          {filtre.search.length > 0
            ? filtre.search.map((tel) => (
                <li
                  onClick={() => navigate(`/produits/${tel.id}`)}
                  key={tel.id}
                  className="bg-white p-4 rounded-lg w-full"
                >
                  <img
                    src={tel.image}
                    alt={tel.name}
                    className="rounded-lg w-full h-[200px] mb-4"
                  />
                  <div className="flex justify-between bg-white">
                    <h3 className="text-lg text-gray-700">{tel.name}</h3>
                    <p className="text-gray-700 m-1 ml-auto text-lg font-medium">
                      {tel.price} fcfa
                    </p>
                  </div>
                </li>
              ))
            : telephone.List.map((tel) => (
                <li
                  onClick={() => navigate(`/produits/${tel.id}`)}
                  key={tel.id}
                  className="bg-white p-4 rounded-lg w-full"
                >
                  <img
                    src={tel.image}
                    alt={tel.name}
                    className="rounded-lg w-full h-[200px] mb-4"
                  />
                  <div className="flex justify-between bg-white">
                    <h3 className="text-lg text-gray-700">{tel.name}</h3>
                    <p className="text-gray-700 m-1 ml-auto text-lg font-medium">
                      {tel.price} fcfa
                    </p>
                  </div>
                </li>
              ))}
        </ul>
      </section>
    </main>
  );
}
