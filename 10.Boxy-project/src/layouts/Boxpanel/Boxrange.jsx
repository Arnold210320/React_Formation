import { useDispatch } from "react-redux";
import { updateBoxValue } from "../../features/boxProperty";

export default function Boxrange({ inputData }) {
  const dispatch = useDispatch();

  function handleInput(e) {
    dispatch(
      updateBoxValue({
        inputNumber: inputData.inputNumber,
        value: e.target.value,
      })
    );
  }

  return (
    <div className="my-8">
      <div className="flex  justify-between">
        <p>{inputData.name}</p>

        <div className="flex items-baseline mb-2">
          <input
            value={inputData.value}
            onChange={handleInput}
            type="number"
            className="w-14 h-8 mr-2 border border-gray-200 text-center"
          />
          <p>px</p>
        </div>
      </div>
      <div className="relative z-0 w-full flex items-center">
        <input
          value={inputData.value}
          onChange={handleInput}
          min={inputData.minMax[0]}
          max={inputData.minMax[1]}
          type="range"
          className="w-full h-[2px] bg-gray-300 rounded-lg cursor-pointer"
        />
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-10 bg-gray-300 rounded cursor-pointer"></div>
      </div>
    </div>
  );
}
