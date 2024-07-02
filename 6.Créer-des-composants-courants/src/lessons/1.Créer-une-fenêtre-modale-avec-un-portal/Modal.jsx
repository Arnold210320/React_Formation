export default function Modal({ close }) {
  return (
    <div
      onClick={close}
      className="fixed inset-0 bg-slate-800/75 flex items-center justify-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-slate-300 text-slate-900 p-10 rounded relative mb-[10vh]"
      >
        <button
          className="absolute top-1 right-1 w-7 h-7 bg-slate-100 rounded justify-center items-center"
          onClick={close}
        >
          x
        </button>
        <p>La modal</p>
      </div>
    </div>
  );
}
