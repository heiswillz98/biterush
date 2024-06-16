import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { BsBag } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaTimesSolid } from "react-icons/lia";
import { SiCodechef } from "react-icons/si";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { text: "Restaurants", link: "" },
    { text: "Login", link: "" },
    { text: "Create Account", link: "" },
  ];

  return (
    <div className={styles.Container}>
      <div className={styles.ContainerH}>
        <p className={styles.ContainerP}>
          Need help with your order? Please Call 0700 4000 100 {">>>"}
        </p>
      </div>
      <div className={styles.Header}>
        <div className={styles.HeaderH}>
          <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
            {/* Hamburger icon */}
            <div
              className={`${
                isMenuOpen ? "hidden" : "block"
              } text-[22px] cursor-pointer`}
            >
              <GiHamburgerMenu />
            </div>
            {isMenuOpen && (
              <div className={styles.Lia} onClick={closeMenu}>
                <LiaTimesSolid />
              </div>
            )}
          </div>
          <div className={styles.Bottom}>
            <div className={styles.BottomP}>
              <h1 className=" whitespace-nowrap">BITE RUSH</h1>
              <div className={styles.Si}>
                <div className={styles.SiC}>
                  <SiCodechef style={{ color: "#41c09e" }} />
                </div>
              </div>
            </div>

            <div className={styles.Navs}>
              {navItems.map((item, index) => (
                <Link href={item.link} key={index}>
                  <h1 className={styles.nav_links}>{item.text}</h1>
                </Link>
              ))}
            </div>
            <div className={styles.BsBag}>
              <BsBag />
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE SCREEN */}
      {isMenuOpen && (
        <div className={styles.MobileNav}>
          {navItems.map((item, index) => (
            <div key={index}>
              <Link href={item.link}>
                <h1 className={styles.nav_links}>{item.text}</h1>
              </Link>
              <hr className="my-2 border-gray-300" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
