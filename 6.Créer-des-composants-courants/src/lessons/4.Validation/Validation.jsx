import { useState } from "react";
import Pseudo from "./Pseudo";
import Email from "./Email";
import Password from "./Password";
import Confirm from "./Confirm";

export default function Validation() {
  const [inputState, setInputState] = useState({
    pseudo: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showValidation, setShowValidation] = useState({
    pseudo: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validationCheck()) {
        console.log("Formulaire soumis");
    }
  };

  function validationCheck() {
    const areValid = {
      pseudo: false,
      email: false,
      password: false,
      confirmPassword: false,
    };

    if (
      inputState.pseudo.length < 3 || inputState.pseudo.length > 64) {
      setShowValidation(state => ({...state, pseudo: true}))
    }else {
      areValid.pseudo = true;
      setShowValidation((state) => ({ ...state, pseudo: false }));
    }

    if(inputState.password.length < 6 || !/\d/.test(inputState.password)) {
      setShowValidation(state => ({...state, password: true}))
    }else {
      areValid.password = true;
      setShowValidation((state) => ({ ...state, password: false }));
    }

    if(inputState.email.length < 6 || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputState.email)) {
      setShowValidation(state => ({...state, email: true}))
    }else {
      areValid.email = true;
      setShowValidation((state) => ({ ...state, email: false }));
    }

    if(inputState.confirmPassword !== inputState.password) {
      setShowValidation(state => ({...state, confirmPassword: true}))
    }else {
      areValid.confirmPassword = true;
      setShowValidation((state) => ({ ...state, confirmPassword: false }));
    }
    if(Object.values(areValid).every(value => value)) {
      return true;
    }
    return false;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto border p-10 rounded"
    >
      <h1 className="text-2xl font-bold mb-6 text-slate-100">
        Formulaire de validation
      </h1>
      <Pseudo
        inputState={inputState}
        setInputState={setInputState}
        showValidation={showValidation}
      />
      <Email
        inputState={inputState}
        setInputState={setInputState}
        showValidation={showValidation}
      />
      <Password
        inputState={inputState}
        setInputState={setInputState}
        showValidation={showValidation}
      />
      <Confirm
        inputState={inputState}
        setInputState={setInputState}
        showValidation={showValidation}
      />
      <button className="mt-10 bg-slate-100 px-4 py-2 min-w-[125px] rounded">
        Submit
      </button>
    </form>
  );
}
