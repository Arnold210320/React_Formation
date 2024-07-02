import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../features/filterTel";

export default function SearchBar() {
  const products = useSelector((state) => state.telephone);

  const filtre = useSelector((state) => {
    return state.filterTel;
  });

  console.log(filtre);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearch({ search: e.target.value, telephone: products }));
  };

  return (
    <form className=" lg:min-w-[500px] sm:min-w-[400px] absolute top-[20%] left-[30%]">
      <div className="relative">
        <input
          onChange={handleSearch}
          type="search"
          placeholder="Rechercher un produit"
          className="w-full p-2 bg-slate-300"
        />
      </div>
    </form>
  );
}
