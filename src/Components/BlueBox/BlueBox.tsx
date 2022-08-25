import React from "react";
import styles from "./styles.module.scss";

const BlueBox: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>For Startups</h2>
        Flexible pricing that scales with your growth. Spaces for the whole
        team, no matter where they're based.
      </div>
      <div className={styles.text}>
        <h2>For DAOs</h2>A decentralized office for your decentralized team. We
        accept Ethereum and USDC, no credit card required.
      </div>
      <div className={styles.text}>
        <h2>For Teams</h2>
        Managing a smaller team? No problem. No minimum requirements,
        onboard as few or as many teammates as you'd like.
      </div> 
    </div>
  );
};

export default BlueBox;
