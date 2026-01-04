import { use, useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");

export const UiModal = ({ children, isOpen, onClose }) => {
  const handleClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };
  const handlePressEsc = (e) => {
    console.log(e.code);
  };
  useEffect(() => {
    const handleNoScroll = () => {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    };
    handleNoScroll();
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      onClick={handleClick}
      className="fixed inset-0  backdrop-blur pt-10 pb-10 top-0 left-0  bg-black/50 flex overflow-x-hidden overflow-y-auto"
    >
      <div className="relative mx-auto z-[1000] max-h-[90vh] min-w-[335px]  bg-white  rounded-[24px] py-10 px-10">
        <button
          className="absolute top-3 right-3 p-0  outline-none focus:outline-none"
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
