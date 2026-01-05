import { useEffect, useState } from "react";
import { Logo } from "./HeaderComponents/Logo";
import { UserRegistration } from "./HeaderComponents/UserRegistration";

export const Header = ({ openModal }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`  min-h-[48px] flex justify-center items-center py-4 sticky top-0  z-10    ${
        scrolled ? "bg-white/30 backdrop-blur-md shadow-sm" : "bg-white"
      } `}
    >
      <section className=" w-[1232px] flex justify-between items-center ">
        <Logo />
        <UserRegistration openModal={openModal} />
      </section>
    </header>
  );
};
