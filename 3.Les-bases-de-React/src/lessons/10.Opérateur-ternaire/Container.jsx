import { useState } from "react";
import "./Container.css";

export default function Container() {
  const [validation, setValidation] = useState(false);

  return (
    <div>
      <h1>Opération ternaire</h1>
      <form>
        <label htmlFor="consent">Acceptez vous ? </label>
        <input
          type="checkbox"
          id="consent"
          onClick={() => setValidation(!validation)}
        />
        <p style={{ color: validation ? "green" : "red" }}>
          {validation? "Vous êtes connecté": "Vous devriez cocher pour accéder à la page"}
        </p>
        {validation ? <p>Vous êtes connecté</p> : <p>Vous n'êtes pas connecté</p>}
      </form>
    </div>
  );
}
