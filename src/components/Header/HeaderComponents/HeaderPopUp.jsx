import { useEffect, useRef } from "react";

export const HeaderPopUp = ({ children, isOpen, onClouse }) => {
  const popUpRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        onClouse();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  const openPopUp = isOpen ? "auto" : "hidden";

  return (
    <>
      <div
        ref={popUpRef}
        className={`absolute right-0  z-30 translate-y-[82%]  w-52.5 h-40 bg-[#F4C550] rounded-2xl p-4 ${openPopUp}`}
      >
        {children}
      </div>
    </>
  );
};
