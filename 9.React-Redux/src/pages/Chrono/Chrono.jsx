import { useDispatch, useSelector } from "react-redux";
import { startChrono, stopChrono, resetChrono } from "../../feature/Chrono";

export default function Chrono() {
  const dispatch = useDispatch();
  const chrono = useSelector((state) => state.chrono);
  return (
    <div>
      <p className="text-2xl mb-4 text-slate-100">
        Valeur du chrono : {chrono.value}
      </p>
      <button
        onClick={() => dispatch(startChrono())}
        className="bg-slate-100 p-4 min-w-[125px] ml-3 rounded"
      >
        Start
      </button>
      <button
        onClick={() => dispatch(stopChrono())}
        className="bg-slate-100 p-4 min-w-[125px] ml-3 rounded"
      >
        Pause
      </button>
      <button
        onClick={() => dispatch(resetChrono())}
        className="bg-slate-100 p-4 min-w-[125px] ml-3 rounded"
      >
        Reset
      </button>
    </div>
  );
}
