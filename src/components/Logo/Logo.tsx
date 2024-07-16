import React from "react";
import { SiCodechef } from "react-icons/si";
import { useRouter } from "next/router";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  const router = useRouter();

  const handleHome = () => {
    router.push("/");
  };

  return (
    <div onClick={handleHome} className={`${className}`}>
      <div className="flex flex-row items-center text-lg md:text-xl gap-2">
        <h1 className=" whitespace-nowrap">BITE RUSH</h1>
        <div className="bg-[white] flex items-center h-9">
          <div className="text-[white] text-2xl">
            <SiCodechef style={{ color: "#41c09e" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
