import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <nav className="flex items-center gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-sm font-semibold text-black"
              : "text-sm font-medium text-gray-400 hover:text-black transition-colors"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-sm font-semibold text-black"
              : "text-sm font-medium text-gray-400 hover:text-black transition-colors"
          }
        >
          Appointments
        </NavLink>
      </nav>
    </>
  );
};
