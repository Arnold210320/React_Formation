import fuji from "./assets/fuji.jpg"
import triangle from "./assets/triangle.svg"


export default function Container() {

  const id = 3

  return (
    <div>
      <h1>Utiliser des images</h1>

    <p>image jpg/png/jpec/svg/etc</p>
    <img src={fuji} alt="Mont-fuji" />

    <p>utiliser les images du dossier public</p>
    <img src="/assets/forest-1.jpg" alt="forest" />

    <p>par referencement</p>
    <img src={`/assets/forest-${id}.jpg`} alt="forest" />

    <p>SVG</p>
    <img src={triangle} alt="triangle" />

    </div>
  )
}
