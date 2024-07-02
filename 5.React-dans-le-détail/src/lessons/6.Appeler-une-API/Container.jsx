import { useState, useEffect } from "react";
import "./Container.css";
import spinner from "./spinner.svg";

export default function Container() {
  const [ApiState, setApiState] = useState({
    loading: false,
    error: false,
    data: undefined,
  });

  useEffect(() => {
    setApiState({ ...ApiState, loading: true });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        setApiState({ loading: false, error: false, data: data });
      })
      .catch(() => {
        setApiState({ loading: false, error: true, data: undefined });
      });
  }, []);

  let content;
  if (ApiState.loading)
    content = <img src={spinner} alt="Icone de chargement" />;
  else if (ApiState.error) content = <p>Une erreur est survenue</p>;
  else if (ApiState.data?.length > 0) {
    content = (
      <ul>
        {ApiState.data.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{item.email}</span>
            <span>{item.phone}</span>
          </li>
        ))}
      </ul>
    );
  } else if (ApiState.data?.length === 0) {
    content = <p>Votre requete ne correspond a aucune donnee</p>;
  }

  return (
    <div>
      <h1>Appeler une API</h1>
      {content}
    </div>
  );
}
