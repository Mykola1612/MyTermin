import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutThunk } from "../../redux/auth/authOperations";

export const LogOutModal = ({ onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <p>Are you sure you want to log out?</p>
        <div>
          <button
            onClick={() =>
              dispatch(logoutThunk()).then(() => {
                navigate("/");
              })
            }
            className="py-3 px-10 bg-[#121417] text-white"
          >
            LogOut
          </button>
          <button onClick={() => onClose()}>Cancel</button>
        </div>
      </div>
    </>
  );
};
