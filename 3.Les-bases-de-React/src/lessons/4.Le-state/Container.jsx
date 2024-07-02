import { useState } from "react"

export default function Container() {

  const [count, setCount] = useState(0)
  console.log ('Mise a jour du state')

  function handleClick() {
   // setCount(count + 1)

    setCount(count => count + 1)
    setCount(count => count + 1)
    setCount(count => count + 1)
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
    </div>
  )
}
