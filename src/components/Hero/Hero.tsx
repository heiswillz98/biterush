import React, { ChangeEvent, useState } from "react";
import food2 from "@/assets/img/Hero.svg";
import Img from "../Shared/images/Image";
import Dropdown from "../Shared/dropdown/Dropdown";
import { H1, H3, H6 } from "../Shared/heading/Heading";

const Hero = () => {
  const options = [
    { label: "Futa", value: "futa" },
    { label: "Funaab", value: "funaab" },
    { label: "Eksu", value: "eksu" },
    { label: "OAU", value: "oau" },
    { label: "Unilag", value: "unilag" },
  ];

  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleDropdownChange = (value: string) => {
    setSelectedOption(value);
  };
  return (
    <div className=" bg-[#41c09e] overflow-x-hidden h-[24rem] md:h-[28rem] lg:h-[38rem]">
      <div className="flex flex-col mx-2 md:flex-row  md:mx-20">
        <div className="flex flex-col items-start pt-40 ">
          <H3 className="text-white whitespace-nowrap ">
            Journey Through Taste 😋
          </H3>
          {/* <H3 className="text-white whitespace-nowrap ">
            Journey Through Taste 😋
          </H3> */}
          <H6 className="text-white hidden md:block w-4/6 lg:w-full mt-2">
            Your Flavorful Journey Awaits! Explore global flavors delivered
            fast, convenient, and delicious to your doorstep
          </H6>

          <div className=" flex flex-col gap-4 w-[60%] md:w-[40%] lg:w-5/6  bg-[#41c09e]  h-40 rounded-sm">
            <h1 className="text-white">Not in FUTA? Change Location</h1>
            <Dropdown
              label=""
              options={options}
              dropdownValue={selectedOption}
              onChange={() => handleDropdownChange}
              className=""
            />
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
