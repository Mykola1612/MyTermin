export const HeaderPopUp = ({ children, isOpen }) => {
  const handleOverlayClick = (e) => {
    if (e.target) {
      return;
    }
  };

  const openPopUp = isOpen ? "auto" : "hidden";
  console.log("openPopUp: ", openPopUp);

  return (
    <>
      <div
        onClick={() => handleOverlayClick()}
        className={`absolute right-0  z-30 translate-y-[82%]  w-[210px] h-[160px] bg-[#F4C550] rounded-2xl p-4 ${openPopUp}`}
      >
        {children}
      </div>
    </>
  );
};
