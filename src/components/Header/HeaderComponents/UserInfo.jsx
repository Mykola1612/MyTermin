import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/auth/authSelectors";

export const UserInfo = ({ pouUpIsOpenFnc }) => {
  const user = useSelector(selectUser);

  const handelPopUpOpen = () => {
    pouUpIsOpenFnc((prev) => !prev);
  };

  return (
    <>
      <div>
        <button
          onClick={handelPopUpOpen}
          className="flex items-center gap-x-3.5"
        >
          {user.avatarURL ? (
            <img src={user.avatarURL} alt="" className="w-11 h-11" />
          ) : (
            <svg className="w-11 h-11 rounded-[50%]">
              <use href="/sprite.svg#icon-user" />
            </svg>
          )}
          <p>{user.name}</p>
        </button>
      </div>
    </>
  );
};
