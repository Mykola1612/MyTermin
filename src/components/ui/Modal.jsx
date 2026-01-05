import { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root") ?? document.body;

export const UiModal = ({ children, isOpen, onClose }) => {
  const handleClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handlePressEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handlePressEsc);
    return () => {
      window.removeEventListener("keydown", handlePressEsc);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      onClick={handleClick}
      className=" z-40 text-center fixed inset-0 backdrop-blur pt-10 pb-10 bg-black/50 overflow-x-hidden overflow-y-auto "
    >
      <div className="inline-block relative max-w-[90vw] min-w-[335px] z-50 bg-white rounded-[24px] py-12 px-12 ">
        <button
          className="absolute top-5 right-5 p-0  outline-none focus:outline-none"
          onClick={() => onClose()}
        >
          <svg className="stroke-[#121417] w-6 h-6 md:w-7 md:h-7 hover:stroke-[#121417]/50 transition-colors pointer-events-none">
            <use href="/sprite.svg#icon-cross"></use>
          </svg>
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
