import { useLocation } from "react-router-dom"



export default function Conctact() {
    const location = useLocation()
    console.log(location)

    
  return (
    <div>
        <p className="text-4xl font-bold text-center pt-10">Contact us </p>
    </div>
  )
}