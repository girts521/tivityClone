import React from "react";
import styles from "./styles.module.scss";

const HowWorks: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.smHeading}>How it works?</div>
      <div className={styles.largeHeading}>
        Your global office. <span>Wherever</span> you need <br /> it,
        <span>whenever</span> you need it.
      </div>
      <div className={styles.textContainer}>
        <div className={styles.text}>
          <h2>01</h2>
          <h3>Sign Up.</h3>
           Enroll your team on our platform and onboard within
          minutes.
        </div>
        <div className={styles.text}>
          <h2>02</h2>
          <h3>Search.</h3>
          Browse our network of spaces for the exact vibe you want. Read reviews and amenities.
        </div> 
        <div className={styles.text}>
          <h2>03</h2>
          <h3>Work.</h3>
          Reserve your spot within seconds. Time to get to work.
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
