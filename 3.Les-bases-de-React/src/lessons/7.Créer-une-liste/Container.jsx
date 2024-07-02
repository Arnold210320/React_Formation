export default function Container() {

  const data = [
    {id: 1, name: "John"},
    {id: 2, name: "Jane"},
    {id: 3, name: "Jim"},
    {id: 4, name: "Joe"},
  ]

  return (
    <div>
      <h1>Créer une liste d'éléments avec React</h1>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  )
}