import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";

export default function DynamicRef() {
  const fruitRef = useRef([]);

  const [fruits, setFruits] = useState([
    {
      id: nanoid(9),
      name: "banane",
      value: "🍌",
    },
    {
      id: nanoid(9),
      name: "mangue",
      value: "🥭",
    },
    {
      id: nanoid(9),
      name: "orange",
      value: "🍊",
    },
  ]);

  function deleteFruit(id) {
    setFruits(fruits.filter((fruit) => fruit.id !== id));
  }

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li
            key={fruit.id}
            onClick={() => deleteFruit(fruit.id)}
            ref={(element) => {
              if (element) {
                fruitRef.current.push(element);
              } else {
                fruitRef.current.shift();
              }
              console.log(fruitRef)
            }}
          >
            {fruit.name} {fruit.value}
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          setFruits([...fruits, { id: nanoid(9), name: "raisin", value: "🌰" }])
        }
      >
        ajouter
      </button>
    </div>
  );
}
