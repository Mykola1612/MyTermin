import { useEffect, useState } from "react";
import { Logo } from "./HeaderComponents/Logo";
import { UserRegistration } from "./HeaderComponents/UserRegistration";
import { Navigation } from "./HeaderComponents/Navigation";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/auth/authSelectors";
import { UserInfo } from "./HeaderComponents/UserInfo";
import { useLocation } from "react-router-dom";

export const Header = ({ openModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const isAutorized = useSelector(selectToken);
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`  min-h-[48px] flex justify-center items-center py-4 sticky top-0  z-10   ${
        isDashboard && "border-b-[#F3F3F3] border-b-2 "
      } ${scrolled ? "bg-white/30 backdrop-blur-md shadow-sm" : "bg-white"} `}
    >
      <section className=" w-[1234px] flex justify-between items-center ">
        <Logo />
        {isAutorized && <Navigation />}
        <div className=" flex items-center gap-x-2">
          {isAutorized && <UserInfo />}
          <UserRegistration openModal={openModal} />
        </div>
      </section>
    </header>
  );
};
