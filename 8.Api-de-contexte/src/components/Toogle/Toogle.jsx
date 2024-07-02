import "./Toogle.css"
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeProvider"

export default function Toogle() {
    const {toogleTheme, dark} = useContext(ThemeContext)
  return (
        <button className="toogle-btn" onClick={toogleTheme}>
            <span>Go {dark ? "Light" : "Dark"}</span>
            <img src={dark ? sun : moon} alt="sun" />
        </button>
  )
}