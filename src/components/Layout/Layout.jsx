import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { useState } from "react";
import { UiModal } from "../ui/Modal";
import { SignInForm } from "../AuthForms/SignInForm";
import { SignUpForm } from "../AuthForms/SignUpForm";
import { TerminModal } from "../TerminModal/TerminModal";
import { CreateTaskForm } from "../CreateTaskForm/CreateTaskForm";

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
        {activeModal?.type === "signin" && <SignInForm onClose={closeModal} />}
        {activeModal?.type === "signup" && <SignUpForm onClose={closeModal} />}
        {activeModal?.type === "termin" && (
          <TerminModal taskId={activeModal.taskId} onClose={closeModal} />
        )}
        {activeModal?.type === "createtermin" && (
          <CreateTaskForm onClose={closeModal} />
        )}
      </UiModal>
    </>
  );
};
