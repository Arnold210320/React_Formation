import { useState } from "react"

import "./Container.css"

export default function Container() {
  const [darkMode, setDarkMode] = useState(false)


  return (
    <div className={`full-container ${darkMode && "dark-mode"}`}>
      <h1>Toggle une classe</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque optio dolorum distinctio voluptates ex veniam a temporibus, dolores quaerat iste corporis eum nisi tempore incidunt.</p>
      <button onClick={() => setDarkMode(!darkMode)}>Activer  le {darkMode ? "light mode" : "Dark mode"} </button>
    </div>
  )
}
