import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { useState } from "react";
import { UiModal } from "../../uikit/uiModal";
import { SignInForm } from "../AuthForms/SignInForm";
import { SignUpForm } from "../AuthForms/SignUpForm";

export const Layout = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (name) => setActiveModal(name);
  const closeModal = () => setActiveModal(null);
  return (
    <>
      <Header openModal={openModal} />
      <main>
        <Outlet context={{ openModal }} />
      </main>
      <UiModal isOpen={!!activeModal} onClose={closeModal}>
        {activeModal === "signin" && <SignInForm onClose={closeModal} />}
        {activeModal === "signup" && <SignUpForm onClose={closeModal} />}
      </UiModal>
    </>
  );
};
