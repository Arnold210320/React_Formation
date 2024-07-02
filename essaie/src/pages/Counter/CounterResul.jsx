import { useSelector } from "react-redux";

export default function CounterResult() {
  const counter = useSelector(state => state.counter);
  return (
    <>
      <h1 className="text-2xl font-bold text-slate-100">
        Counter value : {counter.value}
      </h1>
    </>
  );
}
