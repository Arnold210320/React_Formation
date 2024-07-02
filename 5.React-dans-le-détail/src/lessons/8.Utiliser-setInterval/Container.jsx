import { useEffect, useState } from "react";

export default function Container() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setcount((state) => state + 1);
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <div>
      <h1>Valeur du compteur : {count}</h1>
    </div>
  );
}
