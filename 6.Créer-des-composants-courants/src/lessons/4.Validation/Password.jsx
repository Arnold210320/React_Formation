export default function Password({ inputState, setInputState, showValidation }) {
  return (
    <>
      <label htmlFor="password" className="text-slate-50 inline-block mt-5">
        Votre mot de passe : au moins un chiffre et 6 caractères
      </label>
      <input
        type="password"
        id="password"
        className="w-full p-1 mt-2 rounded"
        value={inputState.password}
        onChange={(e) => setInputState({ ...inputState, password: e.target.value })}
      />
      {showValidation.password && <p className="text-red-500">Mot de passe invalide : veuillez respecter les normes</p>}
    </>
  );
}
