import React from "react";
import styles from "./styles.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footerMain}>
        <h3>tldr;</h3>
        <h2>We are designing work for the new era.</h2>
        <div className={styles.footerBtn}>Join Waitlist</div>
      </div>

    <div className={styles.footerLower}>
    <h3>tivity</h3>
      <p>
        Made with ❤️ in San Francisco. <br /> © 2022 Tivity Labs, Inc
      </p>
    </div>
    </footer>
  );
};

export default Footer;
