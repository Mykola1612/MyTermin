import { Button } from "../../ui/Button";

export const UserRegistration = ({ openModal }) => {
  return (
    <>
      <div className="flex items-center gap-x-4">
        <Button
          onClickFnc={() => openModal({ type: "signin" })}
          className={
            "flex items-center gap-x-2 bg-transparent hover:text-[#F4C550] focus:text-[#F4C550] focus:ring-offset-0"
          }
        >
          <svg className="w-5 h-5">
            <use href="/sprite.svg#icon-login" />
          </svg>
          Log in
        </Button>
        <Button
          onClickFnc={() => openModal({ type: "signup" })}
          className={
            "bg-[#121417] text-amber-50 px-10 hover:text-[#F4C550] focus:text-[#F4C550]"
          }
        >
          Registration
        </Button>
      </div>
    </>
  );
};
