import { useEffect, useState } from "react";
import "./Card.css"

export default function Card () {
    const [state, setState] = useState(0)

    useEffect (
        () => { console.log ("avant")
            return () => console.log("fonction de netoyage")
        }
    )

    return(
        <div className="card">
            <p>Voici la carte et son state {state}</p>
            <button onClick={() => setState(state+1)}>Incrementation</button>
        </div>
        
    )
}