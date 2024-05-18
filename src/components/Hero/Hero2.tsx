import React, { ReactNode } from "react";
import { MdPayment } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { VscGoToSearch } from "react-icons/vsc";

interface Hero2CardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const Hero2Card: React.FC<Hero2CardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="text-6xl text-[#41c09e]">{icon}</div>

      <h1 className="text-[#000000] text-lg font-medium lg:text-2xl">
        {title}
      </h1>
      <p className="text-center text-base lg:text-lg text-[#666666] w-11/12 md:w-full">
        {description}
      </p>
    </div>
  );
};

const Hero2 = () => {
  return (
    <section className="my-6 md:my-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold my-4 text-center md:text-3xl md:ml-2">
          How it Works
        </h1>
        <div className="flex flex-col items-center justify-center gap-4 md:gap-1 md:flex-row md:mx-3 md:mr-8 lg:mx-20 lg:mr-40">
          <Hero2Card
            icon={<VscGoToSearch />}
            title={"1. Search"}
            description={
              " Search for restaurants, cuisines with the automatic advance location detection search option."
            }
          />
          <Hero2Card
            icon={<MdPayment />}
            title={"2. Order & Pay"}
            description={
              " Order delicious meal & Pay with Card or Bank transfer through our secure Payment Gateway"
            }
          />
          <Hero2Card
            icon={<TbTruckDelivery />}
            title={"3. Delivery or Pick-up"}
            description={
              " Have your meal delivered Hot & Fast or Self-pick. Enjoy your meal!"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
