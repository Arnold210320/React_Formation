import { Link } from "react-router-dom"


export default function NotFound() {
  return (
    <div>
        <p className="text-4xl font-bold text-center pt-10"> Page Not Found 404 🤖</p>
        <div className="flex justify-center items-center h-screen">
            <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Home
            </Link>
        </div>
    </div>
  )
}