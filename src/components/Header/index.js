import React from "react";
import styles from "./Header.scss";

import wavLogo from "../../assets/wavlogo.png";

const Header = props => {
  return (
    <div className={styles.headerBar}>
      <img
        className={styles.logo}
        src={wavLogo}
        alt="Washed Away Vintage Logo"
      />
      Washed Away Vintage
    </div>
  );
};

export default Header;
