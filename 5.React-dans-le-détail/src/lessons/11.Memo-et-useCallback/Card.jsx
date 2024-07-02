import { memo } from "react";

export default memo(function Card({ txt }) {
  console.log("render");
  return (
    <div>
      <h2>Carte de visite</h2>
      <p>{txt}</p>
    </div>
  );
});
