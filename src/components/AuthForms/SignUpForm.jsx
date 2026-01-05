export const SignUpForm = () => {
  return (
    <form className="flex flex-col max-w-md">
      <h2 className="text-start text-[40px] mb-5">Sign Up</h2>
      <p className="text-start mb-10">
        Welcome to MyTemin. To start managing your tasks and deadlines, please
        complete the registration form below.
      </p>
      <ul className="flex flex-col gap-y-5 mb-10">
        <li className="relative">
          <label
            htmlFor="name"
            className="absolute  left-4  top-1/2  -translate-y-1/2"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            className="pl-18  pr-6 w-full border border-[#121417]/30 h-14 rounded-2xl"
          />
        </li>
        <li className="relative">
          <label
            htmlFor="email"
            className="absolute  left-4  top-1/2  -translate-y-1/2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="pl-18  pr-6 w-full border border-[#121417]/30 h-14 rounded-2xl"
          />
        </li>
        <li className="relative">
          <label
            htmlFor="password"
            className="absolute  left-4  top-1/2  -translate-y-1/2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="pl-24  pr-6 w-full border border-[#121417]/30 h-14 rounded-2xl"
          />
        </li>
      </ul>

      <button type="submit" className="bg-[#F4C550] py-4 ">
        Sign Up
      </button>
    </form>
  );
};
