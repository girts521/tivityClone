import React, { useRef, useEffect, useState } from "react";
import styles from "./styles.module.scss";

const NavBar: React.FC<{
  setMenuOpen: (menu: boolean) => void;
  menuOpen: boolean;
}> = ({ setMenuOpen, menuOpen }) => {
  const [scroll, setScroll] = useState(0);

  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    console.log(window.scrollY);
    if (window.scrollY <= 10) {
      containerRef.current?.classList.remove(styles.sticky);
    }
  }, [scroll]);

  document.addEventListener("scroll", () => {
    setScroll(window.scrollY);
    if (window.scrollY > 10) {
      containerRef.current?.classList.add(styles.sticky);
    }
  });

  const onClickHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav ref={containerRef} className={`${styles.container}`}>
      <div className={styles.innerContainer}>
        <div className={styles.logo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="139"
            height="55"
            viewBox="0 0 139 55"
            fill="none"
          >
            <path
              d="M19.35 32.65V41H15.1C7.93333 41 4.35 37.45 4.35 30.35V21.1H0.9V12.95H4.35V6.15H14.2V12.95H19.3V21.1H14.2V30.5C14.2 31.2667 14.3667 31.8167 14.7 32.15C15.0667 32.4833 15.6667 32.65 16.5 32.65H19.35ZM28.7949 10.35C27.0616 10.35 25.6616 9.88333 24.5949 8.95C23.5616 7.98333 23.0449 6.78333 23.0449 5.35C23.0449 3.88333 23.5616 2.66667 24.5949 1.7C25.6616 0.733331 27.0616 0.249997 28.7949 0.249997C30.4949 0.249997 31.8616 0.733331 32.8949 1.7C33.9616 2.66667 34.4949 3.88333 34.4949 5.35C34.4949 6.78333 33.9616 7.98333 32.8949 8.95C31.8616 9.88333 30.4949 10.35 28.7949 10.35ZM33.6449 12.95V41H23.8449V12.95H33.6449ZM52.6758 31.75L57.9258 12.95H68.3758L58.7258 41H46.5258L36.8758 12.95H47.3258L52.6758 31.75ZM76.6465 10.35C74.9132 10.35 73.5132 9.88333 72.4465 8.95C71.4132 7.98333 70.8965 6.78333 70.8965 5.35C70.8965 3.88333 71.4132 2.66667 72.4465 1.7C73.5132 0.733331 74.9132 0.249997 76.6465 0.249997C78.3465 0.249997 79.7132 0.733331 80.7465 1.7C81.8132 2.66667 82.3465 3.88333 82.3465 5.35C82.3465 6.78333 81.8132 7.98333 80.7465 8.95C79.7132 9.88333 78.3465 10.35 76.6465 10.35ZM81.4965 12.95V41H71.6965V12.95H81.4965ZM103.627 32.65V41H99.3773C92.2107 41 88.6273 37.45 88.6273 30.35V21.1H85.1773V12.95H88.6273V6.15H98.4773V12.95H103.577V21.1H98.4773V30.5C98.4773 31.2667 98.644 31.8167 98.9773 32.15C99.344 32.4833 99.944 32.65 100.777 32.65H103.627ZM138.322 12.95L120.522 54.35H109.872L116.572 39.8L105.072 12.95H115.972L121.872 28.85L127.572 12.95H138.322Z"
              fill="url(#paint0_linear_2_26)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2_26"
                x1="-2.68067"
                y1="23"
                x2="65.3177"
                y2="23.7437"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#B03DE2" />
                <stop offset="1" stop-color="#6344F7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className={styles.navBtn}>Join Discord</div>
        {!menuOpen && (
          <div onClick={onClickHandler} className={styles.burger}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="21"
              viewBox="0 0 24 21"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.799805 2.50002C0.799805 2.07568 0.968376 1.66871 1.26843 1.36865C1.56849 1.0686 1.97546 0.900024 2.3998 0.900024H21.5998C22.0242 0.900024 22.4311 1.0686 22.7312 1.36865C23.0312 1.66871 23.1998 2.07568 23.1998 2.50002C23.1998 2.92437 23.0312 3.33134 22.7312 3.6314C22.4311 3.93145 22.0242 4.10002 21.5998 4.10002H2.3998C1.97546 4.10002 1.56849 3.93145 1.26843 3.6314C0.968376 3.33134 0.799805 2.92437 0.799805 2.50002Z"
                fill="#191919"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.799805 10.5C0.799805 10.0757 0.968376 9.66871 1.26843 9.36865C1.56849 9.0686 1.97546 8.90002 2.3998 8.90002H21.5998C22.0242 8.90002 22.4311 9.0686 22.7312 9.36865C23.0312 9.66871 23.1998 10.0757 23.1998 10.5C23.1998 10.9244 23.0312 11.3313 22.7312 11.6314C22.4311 11.9315 22.0242 12.1 21.5998 12.1H2.3998C1.97546 12.1 1.56849 11.9315 1.26843 11.6314C0.968376 11.3313 0.799805 10.9244 0.799805 10.5Z"
                fill="#191919"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.3999 18.5C10.3999 18.0757 10.5685 17.6687 10.8685 17.3687C11.1686 17.0686 11.5756 16.9 11.9999 16.9H21.5999C22.0243 16.9 22.4312 17.0686 22.7313 17.3687C23.0313 17.6687 23.1999 18.0757 23.1999 18.5C23.1999 18.9244 23.0313 19.3313 22.7313 19.6314C22.4312 19.9315 22.0243 20.1 21.5999 20.1H11.9999C11.5756 20.1 11.1686 19.9315 10.8685 19.6314C10.5685 19.3313 10.3999 18.9244 10.3999 18.5Z"
                fill="#191919"
              />
            </svg>
          </div>
        )}

        {menuOpen && (
          <div onClick={onClickHandler} className={styles.burgerOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M10.8799 8.99996L16.6132 3.27996C16.8643 3.02889 17.0054 2.68836 17.0054 2.3333C17.0054 1.97823 16.8643 1.6377 16.6132 1.38663C16.3622 1.13556 16.0217 0.994507 15.6666 0.994507C15.3115 0.994507 14.971 1.13556 14.7199 1.38663L8.99992 7.11996L3.27992 1.38663C3.02885 1.13556 2.68832 0.994507 2.33325 0.994507C1.97818 0.994507 1.63766 1.13556 1.38659 1.38663C1.13551 1.6377 0.994463 1.97823 0.994463 2.3333C0.994463 2.68836 1.13551 3.02889 1.38659 3.27996L7.11992 8.99996L1.38659 14.72C1.26161 14.8439 1.16242 14.9914 1.09473 15.1539C1.02704 15.3163 0.992188 15.4906 0.992188 15.6666C0.992188 15.8426 1.02704 16.0169 1.09473 16.1794C1.16242 16.3419 1.26161 16.4893 1.38659 16.6133C1.51054 16.7383 1.658 16.8375 1.82048 16.9052C1.98296 16.9728 2.15724 17.0077 2.33325 17.0077C2.50927 17.0077 2.68354 16.9728 2.84602 16.9052C3.0085 16.8375 3.15597 16.7383 3.27992 16.6133L8.99992 10.88L14.7199 16.6133C14.8439 16.7383 14.9913 16.8375 15.1538 16.9052C15.3163 16.9728 15.4906 17.0077 15.6666 17.0077C15.8426 17.0077 16.0169 16.9728 16.1794 16.9052C16.3418 16.8375 16.4893 16.7383 16.6132 16.6133C16.7382 16.4893 16.8374 16.3419 16.9051 16.1794C16.9728 16.0169 17.0076 15.8426 17.0076 15.6666C17.0076 15.4906 16.9728 15.3163 16.9051 15.1539C16.8374 14.9914 16.7382 14.8439 16.6132 14.72L10.8799 8.99996Z"
                fill="#191919"
              />
            </svg>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
// ${styles.sticky}