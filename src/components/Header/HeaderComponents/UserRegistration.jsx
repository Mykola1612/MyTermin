// import { useDispatch, useSelector } from "react-redux";
// import { logoutThunk } from "../../../redux/auth/authOperations";
// import { selectToken } from "../../../redux/auth/authSelectors";
// import { useNavigate } from "react-router-dom";

export const UserRegistration = ({ openModal }) => {
  return (
    <>
      <div className="flex items-center gap-x-4">
        <button
          onClick={() => openModal({ type: "signin" })}
          className="flex items-center gap-x-2 py-3"
        >
          <svg className="w-5 h-5">
            <use href="/sprite.svg#icon-login" />
          </svg>
          Log in
        </button>
        <button
          onClick={() => openModal({ type: "signup" })}
          className="py-3 px-10 bg-[#121417] text-white"
        >
          Registration
        </button>
      </div>
    </>
  );
};

// const navigate = useNavigate();
// const isAutorized = useSelector(selectToken);
// const dispatch = useDispatch();

// <div>
//   <button
//     onClick={() =>
//       dispatch(logoutThunk()).then(() => {
//         navigate("/");
//       })
//     }
//     className="py-3 px-10 bg-[#121417] text-white"
//   >
//     LogOut
//   </button>
// </div>;
