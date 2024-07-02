import Card from "./card"
import { useState } from "react"

export default function Container() {
  const [showCard, setshowCard] = useState(true)

  return (
    <div>
      <h1>Cleanup function</h1>
      {showCard && <Card /> }
      <button onClick={() => setshowCard(!showCard)}> Montrer / Cacher la carte </button>
    </div>
  )
}
