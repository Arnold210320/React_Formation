import Card from "./Card";
import { useState } from "react";

export default function Container() {
  const [Count, setCount] = useState(0);

  return (
    <div>
      <h1>Memo et useCallback</h1>
      <Card txt={"Vacances"} />
      <button onClick={() => setCount(Count + 1)}>incrementer</button>
    </div>
  );
}
