import GirlMac from "../assets/img/homePage/woman-laptop.jpg";
import GirlMac2 from "../assets/img/homePage/woman-laptop2.jpg";
import { useOutletContext } from "react-router-dom";

export const LandingPage = () => {
  const { openModal } = useOutletContext();

  return (
    <>
      <section className="mx-auto w-[1312px] pt-5">
        <div className="flex justify-between h-[530px]">
          <div className=" bg-indigo-50 w-[720px] rounded-[30px] py-24 px-16">
            <h1 className="mb-8 text-[#121417] font-medium text-[48px]">
              Unlock your productivity potential with MyTermin
            </h1>
            <p className="mb-16 text-[#121417] font-normal text-[16px]">
              Organize your tasks, track your progress, and achieve your goals
              effortlessly with MyTermin. Minimal design, maximum productivity.
            </p>
            <button
              onClick={() => openModal({ type: "signup" })}
              type="button"
              className="bg-[#F4C550] w-[267px] h-[60px] py-4 text-[18px] text-[#121417] font-black leading-[28px] hover:text-amber-50 transition-all duration-300  ease-out"
            >
              Let’s Go
            </button>
          </div>
          <img
            src={GirlMac}
            alt="Girl with MacBook"
            className="w-[568px] h-[530px]"
          />
        </div>
      </section>
      {/* <div>
          <h2>Registration</h2>
          <ul className="flex flex-col">
            <li>
              <input type="text" />
            </li>
            <li>
              <input type="email" />
            </li>
            <li>
              <input type="password" />
            </li>
          </ul>
          <button type="submit">Registration</button>
        </div> */}
    </>
  );
};
