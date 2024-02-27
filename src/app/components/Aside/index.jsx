import Image from "next/image";
import styles from "./aside.modules.css";

import logo from "./logo.png";

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <Image src={logo} alt="Logo da Code Connect" />
    </aside>
  );
};
