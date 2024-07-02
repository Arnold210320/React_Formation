import {useParams} from "react-router-dom";

export default function UserProfile() {
    const params = useParams();
    console.log(params);


  return (
    <div>
        <p className="text-4xl font-bold text-center pt-10">User Profile {params.id} </p>
    </div>
  )
}