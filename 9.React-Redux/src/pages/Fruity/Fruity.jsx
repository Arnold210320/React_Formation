import FruityCart from "./FruityCart";
import { useSelector, useDispatch } from "react-redux";
import { addOne, removeOne } from "../../feature/FruitCart";

export default function Fruity() {
  const fruitsList = useSelector((state) => state.fruits);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-4xl font-bold text-slate-100">Fruity</h1>
      <p className="text-slate-200 mb-10 text-xl">
        Pick your fruits and get delivery the next day. 🍑
      </p>
      <ul className="flex gap-4 mb-4">
        {fruitsList.list.map((fruit) => (
          <li key={fruit.id} className="bg-slate-100 p-4 rounded w-full">
            <img
              className="w-full h-[250px] object-cover mb-3"
              src={fruit.url}
              alt="fruits"
            />
            <div className="flex justify-between items-baseline mb-4">
              <h2 className="text-2xl mb-2 font-semibold">{fruit.name}</h2>
              <p className="text-lg font-semibold">Per unit : {fruit.price}$</p>
            </div>
            <div className="flex justify-between items-center">
              <button
                onClick={() => dispatch(addOne(fruit))}
                className="w-full text-slate-100 bg-green-600 hover:bg-green-500 p-1 rounded"
              >
                Add one
              </button>
              <button
                onClick={() => dispatch(removeOne(fruit.id))}
                className="w-full text-slate-1000 bg-red-600 hover:bg-red-500 p-1 rounded"
              >
                Remove one
              </button>
            </div>
          </li>
        ))}
      </ul>
      <FruityCart />
    </>
  );
}