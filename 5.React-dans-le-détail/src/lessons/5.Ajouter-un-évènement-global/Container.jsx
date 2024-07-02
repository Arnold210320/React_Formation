import HugeContent from "./HugeContent";
import { useEffect, useState } from "react";

export default function Container() {
  const [showContent, setshowContent] = useState(false);
  return (
    <div>
      <h1>Ajouter un évènement global</h1>
      <button onClick={() => setshowContent(!showContent)}>
        {showContent ? "Cacher" : "Montrer"} le contenu
      </button>

      {showContent && <HugeContent />}
    </div>
  );
}
