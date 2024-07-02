import { useState, useRef, useEffect } from "react";

export default function Static() {
  const inputRef = useRef([]);

  function Static(el) {
    if (el && !inputRef.current.includes(el)) {
      inputRef.current.push(el);
    }
    console.log(inputRef);
  }

  return (
    <>
      <h1>Sélectionner un tableau d'éléments</h1>
      <div>
        <input type="text" name="" id="" ref={Static} />
        <input type="text" name="" id="" ref={Static} />
        <input type="text" name="" id="" ref={Static} />
      </div>
    </>
  );
}
