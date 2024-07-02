import useAPIcat from "./Hook/useAPIcat";
import spinner from "./spinner.svg";

export default function Container() {
  const { catData, error, loading } = useAPIcat();

  /*let content;
  if (loading && !error) {
    content = <img src={spinner} alt="spinner" />;
  } else if (error) {
    content = <p>Une erreur est survenu</p>;
  } else if (catData) {
    <img src={catData[0].url} alt="photo d'un chat" />;
  }*/
  return (
    <div>
      <h1>Photo de chats 🐾</h1>
      {/*content*/}
      {loading && !error && <img src={spinner} alt="spinner" />}
      {error && <p>Une erreur est survenu</p>}
      {catData && <img src={catData[0].url} alt="photo d'un chat" />}
    </div>
  );
}
