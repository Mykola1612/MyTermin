import { useEffect, useState } from "react";
import { Logo } from "./HeaderComponents/Logo";
import { UserRegistration } from "./HeaderComponents/UserRegistration";
import { Navigation } from "./HeaderComponents/Navigation";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/auth/authSelectors";
import { UserInfo } from "./HeaderComponents/UserInfo";
import { useLocation } from "react-router-dom";
import { HeaderPopUp } from "./HeaderComponents/HeaderPopUp";
import { Button } from "../ui/Button";

export const Header = ({ openModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handelClousePopUp = () => {
    if (isOpen !== false) {
      setIsOpen(false);
    }
  };

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
      className={`  min-h-12 flex justify-center items-center py-4 sticky top-0  z-10   ${
        isDashboard && "border-b-[#F3F3F3] border-b-2 "
      } ${scrolled ? "bg-white/30 backdrop-blur-md shadow-sm" : "bg-white"} `}
    >
      <section className=" w-[1234px] flex justify-between items-center  relative">
        <Logo />
        {isAutorized && <Navigation />}
        <div className=" flex items-center gap-x-2">
          {isAutorized ? (
            <UserInfo pouUpIsOpenFnc={setIsOpen} />
          ) : (
            <UserRegistration openModal={openModal} />
          )}
        </div>
        <HeaderPopUp isOpen={isOpen} onClouse={handelClousePopUp}>
          <div className="flex min-h-full justify-between flex-col">
            <div>
              <button className="text-white w-full">
                <div className="flex justify-between items-center">
                  <p>Edit profile</p>
                  <svg className="w-3.5 h-3.5 stroke-[#F3F3F3] fill-transparent">
                    <use href="/sprite.svg#icon-pancil"></use>
                  </svg>
                </div>
              </button>
            </div>

            <Button
              onClickFnc={() => openModal({ type: "logout" })}
              className={
                "w-full bg-[#F3F3F3] rounded-[42px] hover:text-[#F4C550] focus:text-[#F4C550]"
              }
            >
              Log out
            </Button>
          </div>
        </HeaderPopUp>
      </section>
    </header>
  );
};
