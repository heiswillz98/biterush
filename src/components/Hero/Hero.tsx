import React, { ChangeEvent, useState } from "react";
import food from "@/assets/img/food2.jpg";
import food2 from "@/assets/img/Hero.svg";
import Link from "next/link";
import Img from "../Shared/images/Image";
import Input from "../Shared/Inputs/Input";
import Dropdown from "../Shared/dropdown/Dropdown";

const Hero = () => {
  const options = [
    { label: "Futa", value: "futa" },
    { label: "Funaab", value: "funaab" },
    { label: "Eksu", value: "eksu" },
    { label: "OAU", value: "oau" },
    { label: "Unilag", value: "unilag" },
  ];

  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );

  const handleDropdownChange = (value: string) => {
    setSelectedOption(value);
  };
  return (
    <div className=" bg-[#41c09e] overflow-x-hidden h-[24rem] md:h-[28rem] lg:h-[38rem]">
      <div className="flex flex-col md:flex-row items-center justify-center md:mx-20">
        <div className="flex flex-col pt-40 ">
          <h1 className="text-white text-[2rem]">Journey Through Taste 😋</h1>
          <h1 className="text-white text-[1rem] hidden md:block w-4/6 lg:w-full">
            Your Flavorful Journey Awaits! Explore global flavors delivered
            fast, convenient, and delicious to your doorstep
          </h1>

          <div className=" flex flex-col gap-4 w-[60%] lg:w-5/6  bg-[#41c09e]  h-40 rounded-sm">
            <h1 className="text-white">Not in FUTA? Change Location</h1>
            {/* <Dropdown
              options={options}
              dropdownValue={selectedOption}
              onChange={handleDropdownChange}
              className=""
            /> */}
          </div>
        </div>
        <div className="absolute top-32 left-44 md:top-28 md:left-[27rem] lg:relative xl:top-0 lg:left-0 lg:z-20">
          <Img
            path={food2}
            name={""}
            className=" mt-24 h-[11rem]  md:h-[16rem] lg:h-[20rem] lg:mt-32 lg:w-auto xl:h-[30rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
