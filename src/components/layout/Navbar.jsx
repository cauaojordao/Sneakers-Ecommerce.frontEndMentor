import logo from "../../assets/logo.svg";
import Cart from "./Cart";

import LinkButton from "./LinkButton";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <header className={styles.header__container}>
      <div className={styles.header__navigation}>
        <Link to="/">
          <img src={logo} alt="sneakers logo" />
        </Link>
        <LinkButton to="/collections" text="Collections" />
        <LinkButton to="/men" text="Men" />
        <LinkButton to="/women" text="Women" />
        <LinkButton to="/about" text="About" />
        <LinkButton to="/contact" text="Contact" />
      </div>
      <div>
        <Cart />
      </div>
    </header>
  );
}
export default Navbar;
