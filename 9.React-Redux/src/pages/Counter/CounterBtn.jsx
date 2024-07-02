import { useDispatch } from "react-redux";
import { increment, decrement, reset, divide, multiply } from "../../feature/Counter";

export default function CounterBtn() {
  const dispatch = useDispatch();

  return (
    <div>
      <p className="text-slate-50 mb-2">Modify Counter</p>
      <button
        onClick={() => dispatch(increment())}
        className=" w-10 h-10 bg-blue-500 hover:bg-blue-700 text-lg font-bold mr-2 rounded"
      >
        +1
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className=" w-10 h-10 bg-blue-500 hover:bg-blue-700 text-lg font-bold mr-2 rounded"
      >
        -1
      </button>
      <button
        onClick={() => dispatch(reset())}
        className=" w-10 h-10 bg-blue-500 hover:bg-blue-700 text-lg font-bold mr-2 rounded"
      >
        Reset
      </button>
      <button
        onClick={() => dispatch(divide())}
        className=" w-10 h-10 bg-blue-500 hover:bg-blue-700 text-lg font-bold mr-2 rounded"
      >
        /10
      </button>
      <button
        onClick={() => dispatch(multiply())}
        className=" w-10 h-10 bg-blue-500 hover:bg-blue-700 text-lg font-bold mr-2 rounded"
      >
        *10
      </button>
    </div>
  );
}
