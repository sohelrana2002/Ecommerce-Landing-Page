import Logo from "../../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import css from "./headerStyle.module.css";
import { useState } from "react";
const Header = () => {
  const [navBar, setNavBar] = useState(false);

  const handleNavBar = () => {
    setNavBar((prev) => !prev);
  };

  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="logo" />
        <span>amazon</span>
      </div>

      <div className={css.right_header}>
        <div className={css.navBar} onClick={handleNavBar}>
          {navBar ? <AiOutlineClose /> : <FaBars />}
        </div>
        <ul className={`css.menu `}>
          <li>Collections</li>
          <li>Brands</li>
          <li>New</li>
          <li>Sales</li>
          <li>ENG</li>
        </ul>
        <input type="text" placeholder="search" className={css.search_bar} />
        <FaShoppingCart className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
