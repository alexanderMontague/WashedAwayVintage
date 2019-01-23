import React from "react";
import styles from "./Footer.scss";

import { FaInstagram, FaFacebook, FaEnvelope, FaShip } from "react-icons/fa";

const Footer = props => {
  return (
    <div className={styles.footer}>
      <span className={styles.footerItem}>
        <a
          href="https://www.instagram.com/washedawayvintage/"
          rel="noopener"
          target="_blank"
        >
          <FaInstagram />
          &nbsp; Instagram
        </a>
      </span>
      <span className={styles.footerItem}>
        <FaFacebook />
        &nbsp; Facebook
      </span>
      <span className={styles.footerItem}>
        <FaEnvelope />
        &nbsp; Email
      </span>
      <span className={styles.footerItem}>
        <FaShip />
        &nbsp; Washed Away Vintage {new Date().getFullYear()}
      </span>
    </div>
  );
};

export default Footer;
