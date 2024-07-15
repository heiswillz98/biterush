import React from "react";
import Img from "../Shared/images/Image";
import { RiMotorbikeFill } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import { restaurantData } from "@/data/restaurantData";

// interface RestaurantCardProps {
//   image: string;
//   name: string;
//   meals: string;
//   deliveryTime: string;
//   rating: string;
//   closed: boolean;
// }

const Restaurants = () => {
  return (
    <div className="bg-[#E9EBEE]">
      <div className="py-4">
        <div className="text-center">
          <h1 className="text-2xl py-4 font-semibold ">
            Available Restaurants
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4">
          {restaurantData.map((items, index) => {
            return (
              <div className="" key={index}>
                <div className="bg-[#fff] w-full pb-2 relative rounded-lg md:rounded-[1rem]">
                  {items.closed && ( // Check if the restaurant is closed
                    <div className="absolute inset-0 bg-black bg-opacity-80 flex bottom-24 z-10 items-center justify-center h-[20vh] md:h-[16vh] lg:h-[20vh] xl:h-[18.3vh] rounded-lg md:rounded-[1rem]">
                      <p className="text-white text-2xl font-semibold">
                        CLOSED
                      </p>
                    </div>
                  )}
                  <Img
                    path={items.image}
                    name={""}
                    className=" h-40 w-full rounded-lg md:rounded-[1rem]"
                  />
                  <div className="flex flex-col gap-1 md:gap-2  my-4 mx-1">
                    <div className="flex flex-row gap-2 items-center">
                      <p className="font-medium text-lg text-start">
                        {items.name}
                      </p>
                      <div className="flex flex-row items-center gap-1 md:gap-2 ml-auto ">
                        <CiStar /> <p>{items.rating}</p>
                      </div>
                    </div>
                    <div className="flex flex-row items-center">
                      {/* <p>{items.meals}</p> */}
                      <div className="flex flex-row items-center gap-2 text-[#41c09e]">
                        <RiMotorbikeFill />{" "}
                        <p className="text-[#111]">{items.deliveryTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
