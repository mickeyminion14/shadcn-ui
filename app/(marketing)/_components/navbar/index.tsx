import { Logo } from "@/components/logo";
import styles from "./navbar.module.scss";
import NavbarRight from "./_components/navbar-right";

export const Navbar = () => {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbarInrWrapper}>
        <div className="space-x-4 flex items-center justify-between w-full">
          <Logo />
          <NavbarRight />
        </div>
      </div>
    </div>
  );
};
