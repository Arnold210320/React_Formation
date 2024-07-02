export default function Sort() {
  return (
    <nav className="w-[200px] absolute flex flex-col p-[1rem] right-0">
      <h2 className="text-stone-950 mt-[1rem]">Trier par</h2>
      <ul className="mt-2">
        <li
          className="cursor-pointer text-stone-950"
          onClick={() => handleSort("name ASC")}
        >
          name ASC
        </li>
        <li
          className="cursor-pointer text-stone-950"
          onClick={() => handleSort("name DESC")}
        >
          name DESC
        </li>
        <li
          className="cursor-pointer text-stone-950"
          onClick={() => handleSort("price ASC")}
        >
          price ASC
        </li>
        <li
          className="cursor-pointer text-stone-950"
          onClick={() => handleSort("price DESC")}
        >
          price DESC
        </li>
      </ul>
    </nav>
  );
}
