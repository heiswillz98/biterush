import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { MdOutlinePerson } from "react-icons/md";
import { BsBag } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaTimesSolid } from "react-icons/lia";
import { SiCodechef } from "react-icons/si";
// import { Button } from "react-bootstrap";

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
    { text: "Create Account", link: "/register" },
  ];

  return (
    <div className="fixed top-0 w-full bg-white z-50">
      <div className="bg-[#41c09e] h-8 md:h-12">
        <p className="font-[900] text-white text-xs md:text-sm flex items-center justify-center pt-2">
          Need help with your order? Please Call 0700 4000 100 {">>>"}
        </p>
      </div>
      <div className="flex h-[2rem] gap-8 items-center justify-center mx-8 mt-8">
        <div className="flex mb-6 items-center">
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
              <div
                className="left-[3rem] text-[22px] bottom-[44rem] cursor-pointer "
                onClick={closeMenu}
              >
                <LiaTimesSolid />
              </div>
            )}
          </div>
          <div className="flex gap-6 mx-[2rem] items-center lg:w-[1340px]">
            <div className="flex flex-row items-center text-lg md:text-xl gap-2">
              <h1 className=" whitespace-nowrap">BITE RUSH</h1>
              <div className="bg-[white] flex items-center h-9">
                <div className="color-[#fff] text-2xl">
                  <SiCodechef style={{ color: "#41c09e" }} />
                </div>
              </div>
            </div>

            <div className="hidden mx-[23rem] lg:flex flex-row gap-8">
              {navItems.map((item, index) => (
                <Link href={item.link} key={index}>
                  <h1 className={styles.nav_links}>{item.text}</h1>
                </Link>
              ))}
            </div>
            <div className="flex flex-row gap-4 text-[20px]  ml-auto">
              <BsBag />
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE SCREEN */}
      {isMenuOpen && (
        <div className="lg:hidden absolute bg-[white] flex flex-col gap-6 h-[100rem] w-[400px] pt-[2rem] pl-6  border-r-2 z-50">
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
