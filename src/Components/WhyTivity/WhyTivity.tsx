import React from "react";
import styles from "./styles.module.scss";

const WhyTivity: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.smHeading}>Why Tivity?</div>
      <div className={styles.largeHeading}>
        A decentralized approach to your <br /> workforce.
      </div>
      <div className={styles.textContainer}>
        <div className={styles.text}>
         <h2> No commitments. </h2>
          Don't get tied down to a year-long office lease. We
          provide you with the flexibility to work out of any coworking space
          across the world. Cancel anytime.
        </div>
        <div className={styles.text}>
         <h2> Flexibility & Distribution.</h2>
            We power your remote team by providing a
          distributed spaces. Save yourself the stress of moving your team to a
          central location.
        </div>
        <div className={styles.text}>
          <h2> Remote. </h2>
           Office spaces are expensive and buying different coworking
          subscriptions for different employees can get tedious. We're offering 
          one plan for everything.
        </div>
      </div>
    </div>
  );
};

export default WhyTivity;
