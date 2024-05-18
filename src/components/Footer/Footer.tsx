import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiCodechef } from "react-icons/si";

const Footer = () => {
  return (
    <section className="my-6">
      <div className="bg-[#41c09e] text-white">
        <div className="flex flex-col gap-5  mx-20">
          <div className="flex flex-row items-center text-lg md:text-xl gap-2 mb-4">
            <h1 className=" whitespace-nowrap">BITE RUSH</h1>
            <div className="bg-[white] flex items-center h-9">
              <div className="color-[#fff] text-2xl">
                <SiCodechef style={{ color: "#41c09e" }} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:gap-10">
            <div className="flex flex-col gap-2">
              <h1 className="text-[#E9EBEE]">INFORMATION</h1>
              <p>Who we are</p>
              <p>Our Blog</p>
              <p>Faq</p>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-[#E9EBEE]">FOR RESTAURANTS</h1>
              <p>Add Restaurant</p>
              <p>Join the community</p>
              <p>Contact Us</p>
              <p>Partner/Invest</p>
            </div>

            <div className="flex flex-col gap-2">
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
        <div>
          <div className="border border-white w-full "></div>
          <p className="text-center">
            2024 © BITE RUSH Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
