import { X, ShoppingCart, Minus, Plus } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/telCart";

export default function Panier({ closePanier }) {
  const telCart = useSelector((state) => state.telCart);
  const dispatch = useDispatch();

  return (
    <main onClick={closePanier}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed inset-0 bg-slate-800/75"
      >
        <div className="absolute right-0 top-0 w-[30%] h-full bg-white/80 p-6">
          <div className="flex items-center justify-between text-stone-900">
            <h4 className="text-lg font-semibold">Panier</h4>
            <button onClick={closePanier}>
              <X color="white" />
            </button>
          </div>
          <ul className="flex flex-col gap-4">
            {telCart.cart.length > 0 &&
              telCart.cart.map((tel) => (
                <li
                  key={tel.id}
                  className="px-5 py-2 border-b-2 border-stone-200"
                >
                  <div className="flex items-center justify-between">
                    <img
                      src={tel.image}
                      alt={tel.name}
                      className="rounded-lg w-[20%] "
                    />
                    <span className="text-stone-900 rounded-full p-2">
                      {tel.name}
                    </span>
                    <span className="text-stone-900">{tel.price} FCFA</span>
                  </div>
                  <div className="relative translate-[-50%,50%] top-[50%] left-[50%] flex shadow-sm ">
                    <button
                      className="m-0 rounded-full p-2 cursor-pointer text-slate-900 bg-white/80"
                      onClick={() => dispatch(removeFromCart(tel.id))}
                    >
                      <Minus />
                    </button>
                    <input
                      className="w-10 p-2 text-center  bg-white/80 text-slate-900 font-semibold "
                      type="number"
                      min={0}
                      max={10}
                      value={tel.quantity}
                    />
                    <button
                      className="m-0 rounded-full p-2 cursor-pointer text-slate-900 bg-white/80"
                      onClick={() => dispatch(addToCart(tel))}
                    >
                      <Plus />
                    </button>
                  </div>
                </li>
              ))}
          </ul>
          <ul className="flex flex-col gap-4">
            {telCart.cart.length == 0 && (
              <div className="flex flex-col items-center justify-center mt-10 text-stone-900">
                <ShoppingCart className="w-20 h-20" />
                <p>Votre panier est vide</p>
              </div>
            )}
          </ul>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            {telCart.cart.length > 0 && (
              <div className="flex flex-col items-center">
                <div className="w-full flex justify-between">
                  <span className="text-stone-900 font-bold">Total :</span>
                  <span className="text-stone-900 font-semibold">
                    {telCart.cart.reduce(
                      (acc, tel) => acc + tel.price * tel.quantity,
                      0
                    )}{" "}
                    FCFA
                  </span>
                </div>
                <button className="mt-4 bg-yellow-400 rounded-full p-4 text-white w-full">
                  Commandez
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
