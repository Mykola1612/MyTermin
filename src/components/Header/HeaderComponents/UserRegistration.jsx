export const UserRegistration = ({ openModal }) => {
  return (
    <>
      <div className="flex items-center gap-x-4">
        <button
          onClick={() => openModal("signin")}
          className="flex items-center gap-x-2 py-3.5"
        >
          <svg className="w-5 h-5">
            <use href="/sprite.svg#icon-login" />
          </svg>
          Log in
        </button>
        <button onClick={() => openModal("signup")} className="py-3.5">
          Registration
        </button>
      </div>
    </>
  );
};
