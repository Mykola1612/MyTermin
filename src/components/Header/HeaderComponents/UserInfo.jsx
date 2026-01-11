import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/auth/authSelectors";

export const UserInfo = () => {
  const user = useSelector(selectUser);
  console.log("user: ", user);

  return (
    <>
      <div>
        <button className="flex items-center gap-x-3.5">
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
