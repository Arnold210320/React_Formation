import { useSelector, useDispatch } from "react-redux";
import Shadow from "./Shadow";
import { addShadow } from "../../features/shadow";

export default function ShadowList() {
  const shadow = useSelector((state) => state.shadow);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex justify-between p-6 border-b border-gray-300">
        <p className="text-lg font-bold">Customize Shadow</p>
        <button
          onClick={() => dispatch(addShadow)}
          className="py-1 px-3 text-sm rounded bg-blue-600 focus:outline-none focus:ring-4 focus:ring-offset-2 hover:bg-blue-800 text-white"
        >
          Add Shadow
        </button>
      </div>
      <ul>
        {shadow.map((shadow, index) => (
          <Shadow key={shadow.id} shadow={shadow} panelNumber={index + 1} />
        ))}
      </ul>
    </div>
  );
}
