export default function Confirm({ inputState, setInputState, showValidation }) {
  return (
    <>
      <label htmlFor="confirm" className="text-slate-50 inline-block mt-5">
        Confirmer votre mot de passe
      </label>
      <input
        type="password"
        id="confirm"
        className="w-full p-1 mt-2 rounded"
        value={inputState.confirmPassword}
        onChange={(e) => setInputState({ ...inputState, confirmPassword: e.target.value })}
      />
      {showValidation.confirmPassword && <p className="text-red-500">Les mots de passe ne sont pas identique</p>}
    </>
  );
}
