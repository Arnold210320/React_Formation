import { useState } from "react"
import Cards from "./Cards"


export default function Container() {
  
const [state, setState] = useState("bonjour tous le monde")

const id = 2103

  return (
    <div>
      <p>state du container : {state}</p>
      <Cards id={id} state={state} changeState={setState} />
    </div>
  )
}
