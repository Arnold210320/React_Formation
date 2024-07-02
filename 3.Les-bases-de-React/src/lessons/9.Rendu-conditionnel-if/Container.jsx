

export default function Container() {

    const isLogged = false

  if (isLogged) {
     return (
      <div>
        <h1>Rendu conditionnel avec If </h1>
        <p>Vous êtes connecté</p>
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>Rendu conditionnel avec If </h1>
        <p>Vous n'êtes pas connecté</p>
      </div>
    )
  }
}


