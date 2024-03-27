import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./Navbar.module.css";
import logo1 from '../assets/logo1.png'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className={`${styles.navbar}`}>
      <div className={`${styles.logoContainer}`}>
        <img src={logo1} alt="logo" className={`${styles.logo}`} width={120} height={50}/>
      </div>
      <ul className={`${styles.menu} ${toggleMenu ? styles.show : ""}`}>
        {["Market", "Exchange", "Tutorials", "Wallets"].map(
          (item, index) => (
            <li key={index} className={`${styles.menuItem}`}>
              {item}
            </li>
          )
        )}
        <li className={`${styles.menuItem} ${styles.login}`}>Login</li>
      </ul>
      <div className={`${styles.menuToggle}`} onClick={() => setToggleMenu(!toggleMenu)}>
        {toggleMenu ? <AiOutlineClose size={24} color="white"/> : <HiMenuAlt4 size={24} color="white"/>}
      </div>
    </nav>
  );
};

export default Navbar;
