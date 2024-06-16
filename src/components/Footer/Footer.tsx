import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiCodechef } from "react-icons/si";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <section className="">
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.bite}>
            <h1 className=" whitespace-nowrap">BITE RUSH</h1>
            <div className={styles.icon}>
              <div className="color-[#fff] text-2xl">
                <SiCodechef style={{ color: "#41c09e" }} />
              </div>
            </div>
          </div>
          <div className={styles.base}>
            <div className={styles.cont}>
              <h1 className="text-[#E9EBEE]">INFORMATION</h1>
              <p>Who we are</p>
              <p>Our Blog</p>
              <p>Faq</p>
            </div>

            <div className={styles.cont}>
              <h1 className="text-[#E9EBEE]">FOR RESTAURANTS</h1>
              <p>Add Restaurant</p>
              <p>Join the community</p>
              <p>Contact Us</p>
              <p>Partner/Invest</p>
            </div>

            <div className={styles.cont}>
              <h1 className="text-[#E9EBEE]">SOCIAL LINKS</h1>
              <div className="flex flex-row gap-3">
                {" "}
                <p>
                  <FaFacebook />
                </p>
                <p>
                  <FaXTwitter />
                </p>
                <p>
                  <FaInstagram />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10  ">
          <div className={styles.line}></div>
          <p className="text-center">
            2024 © BITE RUSH Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
