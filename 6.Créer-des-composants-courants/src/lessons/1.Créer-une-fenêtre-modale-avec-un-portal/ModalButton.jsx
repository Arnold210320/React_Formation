import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

export default function ModalButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="block rounded mx-auto bg-slate-200 text-slate-900 px-4 py-2"
        onClick={() => setShowModal(true)}
      >
        Open modal
      </button>
      {showModal &&
        createPortal(
          <Modal close={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
