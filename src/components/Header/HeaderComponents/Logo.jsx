import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <>
      <nav className="flex items-center">
        <Link to="/" className="flex items-center gap-x-[8px]">
          <svg className="w-6 h-6">
            <use href="/sprite.svg#icon-ukraine" />
          </svg>
          <p className="text-[#121417] font-medium text-[20px]">MyTermin</p>
        </Link>
      </nav>
    </>
  );
};
