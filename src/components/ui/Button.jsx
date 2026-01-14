import { twMerge } from "tailwind-merge";

export const Button = ({
  className,
  onClickFnc,
  children,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClickFnc}
      className={twMerge(
        "font-semibold py-3 px-4 cursor-pointer leading-[28px] rounded-2xl text-[#121417] bg-[#F4C550] text-center  text-[16px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 hover:text-amber-50 focus:text-amber-50  transition-colors ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-500 focus:transition-none focus:duration-0",
        className
      )}
    >
      {children}
    </button>
  );
};
