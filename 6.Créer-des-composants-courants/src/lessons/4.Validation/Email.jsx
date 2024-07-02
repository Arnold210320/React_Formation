export default function Email({ inputState, setInputState, showValidation }) {
  return (
    <>
      <label htmlFor="email" className="text-slate-50 inline-block mt-5">
        Votre adresse email
      </label>
      <input
        type="email"
        id="email"
        className="w-full p-1 mt-2 rounded"
        value={inputState.email}
        onChange={(e) => setInputState({ ...inputState, email: e.target.value })}
      />
      {showValidation.email && <p className="text-red-500">Email invalide</p>}
    </>
  );
}
