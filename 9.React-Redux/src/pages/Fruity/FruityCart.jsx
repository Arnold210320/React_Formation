import { useSelector } from "react-redux";
import { fruits } from "../../feature/Fruits";

export default function FruityCart() {
  const fruityCart = useSelector((state) => state.fruitCart);
  console.log(fruityCart);

  return (
    <div className="bg-slate-100 p-4 rounded">
      <p className="p-5 border-b text-2xl border-slate-400">Your fruits cart</p>
      <ul>
        {fruityCart.cart.length > 0 &&
          fruityCart.cart.map((fruit) => (
            <li className="p-5 py-2 text-xl" key={fruit.id}>
              <span className="font-bold mr-2">{fruit.name}</span>
              <span className="font-bold mr-2">{fruit.quantity}</span>
            </li>
          ))}
        {fruityCart.cart.length === 0 && (
          <li className="p-5 py-2 text-xl font-semibold">
            ... Grap one fruit !
          </li>
        )}
      </ul>
      <p className="text-xl p-5 border-t border-slate-400">
        Total price :{" "}
        {fruityCart.cart.length > 0 && (
          <span className="font-bold ml-2">
            {fruityCart.cart.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            )}
            $
          </span>
        )}
      </p>
    </div>
  );
}
