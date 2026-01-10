import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signInThunk } from "../../redux/auth/authOperations";
import { useNavigate } from "react-router-dom";

export const SignInForm = ({ onClose }) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(signInThunk(data)).then(() => {
      onClose();
      navigate("/dashboard");
    });
  };

  return (
    <form className="flex flex-col max-w-md" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-start text-[40px] mb-5">Sign In</h2>
      <p className="text-start mb-10">
        Welcome back! Sign in to continue working in MyTemin.
      </p>
      <ul className="flex flex-col gap-y-5 mb-10">
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
            {...register("email")}
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
            {...register("password")}
          />
        </li>
      </ul>

      <button type="submit" className="bg-[#F4C550] py-4 ">
        Sign In
      </button>
    </form>
  );
};
