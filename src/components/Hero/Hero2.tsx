import React, { ReactNode } from "react";
import { MdPayment } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { VscGoToSearch } from "react-icons/vsc";
import { H11, H4, P } from "../Shared/heading/Heading";

interface Hero2CardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const Hero2Card: React.FC<Hero2CardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 ">
      <div className="text-4xl md:text-6xl text-[#41c09e]">{icon}</div>
      <div className=" flex flex-col gap-2">
        <H4 className="text-center font-medium">{title}</H4>
        <P className="text-base text-center lg:text-lg text-[#666666] w-11/12 md:w-full">
          {description}
        </P>
      </div>
    </div>
  );
};

const Hero2 = () => {
  return (
    <section className=" my-6 md:my-10">
      <div className="flex flex-col justify-center items-center">
        <H11 className="text-2xl  text-center md:text-3xl md:ml-2">
          How it Works
        </H11>
        <div className="flex flex-col items-center justify-center gap-4 lg:gap-1 md:flex-row md:mx-3 md:mr-8 lg:mx-20 lg:mr-40">
          <Hero2Card
            icon={<VscGoToSearch />}
            title={"1. Search"}
            description={
              " Search for restaurants easily with our location-based search"
            }
          />
          <Hero2Card
            icon={<MdPayment />}
            title={"2. Order "}
            description={
              "Order a delicious meal and enjoy a seamless dining experience"
            }
          />
          <Hero2Card
            icon={<TbTruckDelivery />}
            title={"3. Delivery"}
            description={" Get your meal delivered hot and fast, or self-pick."}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
