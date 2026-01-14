import { useDispatch } from "react-redux";
import { signUpThunk } from "../../redux/auth/authOperations";
import { useForm } from "react-hook-form";
import { Button } from "../ui/Button";

export const SignUpForm = ({ openModal }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(signUpThunk(data))
      .unwrap()
      .then(() => openModal({ type: "verifyEmail" }))
      .catch((err) => console.log(err));
  };

  return (
    <form className="flex flex-col max-w-md" onSubmit={handleSubmit(onSubmit)}>
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
            {...register("name", { required: "Name is required" })}
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
            {...register("email", { required: "Email is required" })}
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
            {...register("password", { required: "Password is required" })}
          />
        </li>
      </ul>

      <Button type="submit" className={"py-4"}>
        Sign Up
      </Button>
    </form>
  );
};
