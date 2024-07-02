import { useState, useRef } from "react"
import "./Container.css"

export default function Container() {
  const [state, setState] = useState("")

  function handleInput(e) {
    setState(e.target.value)
  }

  const emailRef = useRef()

  function handleSubmit(e){
    e.preventDefault()

    console.log(emailRef.current.value)
  }

  return (
    <div>
      <h1>Composants "controlled" et "uncontrolled"</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">votre nom</label>
        <input onChange={handleInput} value={state} type="text" name="name" id="name" />
        <label htmlFor="email">Votre email</label>
        <input ref={emailRef} type="email" name="" id="email" />
        <button>Envoyer</button>
      </form>
      <p>Votre nom est : {state} </p>
    </div>
  )
}
