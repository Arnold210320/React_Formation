export default function Pseudo({ inputState, setInputState, showValidation }) {
  return (
    <>
      <label htmlFor="Username" className="text-slate-50">Votre Pseudo (3-60 caractères)</label>
      <input
        type="text"
        id="Username"
        className="w-full p-1 mt-2 rounded"
        value={inputState.pseudo}
        onChange={(e) => setInputState({ ...inputState, pseudo: e.target.value })}
      />
      {showValidation.pseudo && <p className="text-red-500">Pseudo invalide : veuillez respecter les normes</p>}
    </>
  );
}
