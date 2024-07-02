import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../feature/Users";
import spinner from "../../assets/spinner.svg";

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  console.log(users);

  if (!users.data && !users.loading && !users.error) {
    dispatch(getData());
  }

  let content;
  if (users.loading) {
    content = <img src={spinner} alt="loading" />;
  } else if (users.error) {
    content = <p className="text-red-500">An error has occured</p>;
  } else if (users.data) {
    content = (
      <ul>
        {users.data.map((user) => (
          <li key={user.id} className="text-xl text-slate-100">
            {user.name}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <p className="text-2xl mb-5 text-slate-100">Users</p>
      {content}
    </div>
  );
}
