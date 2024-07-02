import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { addToCart } from "../features/telCart";
import { createPortal } from "react-dom";
import Panier from "../components/Panier";

export default function Ajout() {
  const telephone = useSelector((state) => state.telephone);
  const dispatch = useDispatch();

  const [showPanier, setShowPanier] = useState(false);

  const telCart = useSelector((state) => state.telCart);

  const [tel, setTel] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setTel(telephone.List.find((tel) => tel.id == id));
    console.log(tel);
  }, [id, telephone.List]);

  return (
    <main className="flex p-[3rem]">
      <section className="p-[4rem] max-w-2xl mx-auto lg:max-w-5xl w-full grid grid-cols-2 ">
        <ul className=" shadow-lg gap-x-8 w-full">
          {tel && (
            <li key={tel.id} className="bg-white w-full">
              <img
                src={tel.image}
                alt={tel.name}
                className="rounded-lg w-full "
              />
            </li>
          )}
        </ul>
        <ul className="shadow-lg gap-x-8 w-full">
          {tel && (
            <li key={tel.id} className="bg-white p-2 w-full">
              <div className=" text-slate-950">
                <h2 className=" font-bold text-2xl">{tel.name}</h2>
                <p className="text-lg font-semibold rounded-full border-2 text-slate-100 p-2 mb-2 bg-black w-[35%] ">
                  {tel.price} FCFA
                </p>
              </div>
              <div>
                <span className="text-slate-950 font-semibold text-lg">
                  Couleur
                </span>
              </div>
              <div className="flex justify-between items-center p-4">
                <button className="w-[20%] h-10 rounded-full bg-slate-400 text-slate-100">
                  Noir
                </button>
                <button className="w-[20%] h-10 rounded-full bg-slate-400 text-slate-100">
                  Blanc
                </button>
                <button className="w-[20%] h-10 rounded-full bg-slate-400 text-slate-100">
                  Rouge
                </button>
                <button className="w-[20%] h-10 rounded-full bg-slate-400 text-slate-100">
                  Vert
                </button>
              </div>
              <div>
                <span className="text-slate-950 font-semibold text-lg">
                  Capacite
                </span>
              </div>
              <div className="flex justify-between p-4 ">
                <button className="w-[20%] h-10 rounded-full bg-slate-400 text-slate-100">
                  64Go
                </button>
                <button className="w-[20%] h-10 rounded-full bg-slate-400 text-slate-100">
                  128Go
                </button>
                <button className="w-[20%] h-10 rounded-full bg-slate-400 text-slate-100">
                  256Go
                </button>
                <button className="w-[20%] h-10 rounded-full bg-slate-400 text-slate-100">
                  512Go
                </button>
              </div>
              <div className="flex flex-col p-4">
                <button
                  onClick={() => {
                    dispatch(addToCart(tel));
                    setShowPanier(true);
                  }}
                  className=" bg-yellow-400 text-white rounded-full p-4"
                >
                  {showPanier &&
                    createPortal(
                      <Panier closePanier={() => setShowPanier(false)} />,
                      document.body
                    )}
                  <span className="text-center">Ajouter au panier</span>
                </button>
              </div>
            </li>
          )}
        </ul>
      </section>
    </main>
  );
}
