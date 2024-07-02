export default function Cards({id, state, changeState}) {
console.log(id, state)

  return (
    <div>
      <p> Users : {id}</p>
      <p> State du parent : {state}</p>
      <button onClick={() => changeState("Mes salutations")}>Changer le State</button>
    </div>
  )
}

