import { Logo } from "./HeaderComponents/Logo";
import { UserRegistration } from "./HeaderComponents/UserRegistration";

export const Header = ({ openModal }) => {
  return (
    <header className=" border-b border-slate-200 h-[48px] flex justify-center items-center ">
      <section className=" w-[1184px] flex justify-between items-center ">
        <Logo />
        <UserRegistration openModal={openModal} />
      </section>
    </header>
  );
};
