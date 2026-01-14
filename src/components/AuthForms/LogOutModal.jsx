import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutThunk } from "../../redux/auth/authOperations";
import { Button } from "../ui/Button";

export const LogOutModal = ({ onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <div className="p-2">
        <p className="text-[14px] leading-[1.29] md:text-[18px] md:leading-[1.33] mb-[25px] md:mb-[37px] text-center">
          Are you sure you want to log out?
        </p>
        <div className="flex gap-x-2">
          <Button
            onClickFnc={() =>
              dispatch(logoutThunk()).then((res) => {
                if (res.meta.requestStatus === "fulfilled") {
                  navigate("/");
                }
              })
            }
            className={
              "rounded-[200px] bg-[#121417] text-amber-50  hover:text-[#F4C550]  xs:w-[120px]  sm:w-[140px] md:w-[195px] focus:text-[#F4C550]"
            }
          >
            Log Out
          </Button>
          <Button
            onClickFnc={() => onClose()}
            className={
              "rounded-[200px] xs:w-[120px]  sm:w-[140px] md:w-[195px] "
            }
          >
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
};
