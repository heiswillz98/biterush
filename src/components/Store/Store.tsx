import React from "react";
import Navbar from "../Navbar/Navbar";
import Img from "../Shared/images/Image";
import Rice from "@/assets/img/jollof.jpg";
import { FaRegClock } from "react-icons/fa6";
import { H4, P, P2, P3 } from "../Shared/heading/Heading";
import { CiStar } from "react-icons/ci";

const Store = () => {
  return (
    <div>
      <Navbar />

      <div className="mt-4">
        <div className="relative">
          <Img path={Rice} name="image" className="rounded-2xl" />
          <div className="bg-slate-100 px-2 py-1 rounded-md absolute bottom-3 left-1 gap-2 flex flex-row">
            <FaRegClock />
            <P3>20-25min</P3>
          </div>
        </div>
        <div className="flex flex-row justify-between mx-3 mt-3">
          <H4>Jollof Rice Village</H4>
          <div className="flex flex-col">
            <P2>02.00pm - 11.59pm</P2>
            <div className="flex flex-row items-center justify-end">
              <P>5.0</P> <CiStar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
