"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";

export const Modal = forwardRef(({ children }, ref) => {
  const dialogRef = useRef(null);

  const closeModal = () => {
    dialogRef.current.showModal();
  };

  useImperativeHandle(ref, () => {
    return {
      closeModal,
      openModal,
    };
  });

  return (
    <dialog ref={dialogRef} className={styles.dialog}>
      <header className={styles.header}>
        <button>X</button>
      </header>
      {children}
    </dialog>
  );
});
