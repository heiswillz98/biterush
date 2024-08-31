// import React from "react";
// import Img from "../Shared/images/Image";
// import { RiMotorbikeFill } from "react-icons/ri";
// import { CiStar } from "react-icons/ci";
// import { restaurantData } from "@/data/restaurantData";

// const Restaurants = () => {
//   return (
//     <div className="bg-[#E9EBEE]">
//       <div className="py-4">
//         <div className="text-center">
//           <h1 className="text-2xl py-4 font-semibold ">
//             Available Restaurants
//           </h1>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4">
//           {restaurantData.map((items, index) => {
//             return (
//               <div className="" key={index}>
//                 <div className="bg-[#fff] w-full pb-2 relative rounded-lg md:rounded-[1rem]">
//                   {items.closed && (
//                     <div className="absolute inset-0 bg-black bg-opacity-80 flex bottom-24 z-10 items-center justify-center h-[17vh] md:h-[16vh] lg:h-[20vh] xl:h-[18.3vh] rounded-lg md:rounded-[1rem]">
//                       <p className="text-white text-2xl font-semibold">
//                         CLOSED
//                       </p>
//                     </div>
//                   )}
//                   <Img
//                     path={items.image}
//                     name={""}
//                     className=" h-40 w-full rounded-lg md:rounded-[1rem]"
//                   />
//                   <div className="flex flex-col gap-1 md:gap-2  my-4 mx-1">
//                     <div className="flex flex-row gap-2 items-center">
//                       <p className="font-medium text-lg text-start">
//                         {items.name}
//                       </p>
//                       <div className="flex flex-row items-center gap-1 md:gap-2 ml-auto ">
//                         <CiStar /> <p>{items.rating}</p>
//                       </div>
//                     </div>
//                     <div className="flex flex-row items-center">
//                       {/* <p>{items.meals}</p> */}
//                       <div className="flex flex-row items-center gap-2 text-[#41c09e]">
//                         <RiMotorbikeFill />{" "}
//                         <p className="text-[#111]">{items.deliveryTime}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Restaurants;
import React, { useState } from "react";
import { useRouter } from "next/router";
import Img from "../Shared/images/Image";
import { RiMotorbikeFill } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import { restaurantData } from "@/data/restaurantData";

const Restaurants: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(
    null
  );
  const router = useRouter();

  const handleRestaurantClick = (name: string, closed: boolean) => {
    if (closed) {
      setSelectedRestaurant(name);
      setIsModalOpen(true);
    } else {
      router.push(`/store`);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRestaurant(null);
  };

  return (
    <div className="bg-[#E9EBEE]">
      <div className="py-4">
        <div className="text-center">
          <h1 className="text-2xl py-4 font-semibold">Available Restaurants</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4">
          {restaurantData.map((items, index) => (
            <div
              className=""
              key={index}
              onClick={() => handleRestaurantClick(items.name, items.closed)}
            >
              <div className="bg-[#fff] w-full pb-2 relative rounded-lg md:rounded-[1rem] cursor-pointer">
                {items.closed && (
                  <div className="absolute inset-0 bg-black bg-opacity-80 flex bottom-24 z-10 items-center justify-center h-[17vh] md:h-[16vh] lg:h-[20vh] xl:h-[18.3vh] rounded-lg md:rounded-[1rem]">
                    <p className="text-white text-2xl font-semibold">CLOSED</p>
                  </div>
                )}
                <Img
                  path={items.image}
                  name={""}
                  className="h-40 w-full rounded-lg md:rounded-[1rem]"
                />
                <div className="flex flex-col gap-1 md:gap-2 my-4 mx-1">
                  <div className="flex flex-row gap-2 items-center">
                    <p className="font-medium text-lg text-start">
                      {items.name}
                    </p>
                    <div className="flex flex-row items-center gap-1 md:gap-2 ml-auto">
                      <CiStar /> <p>{items.rating}</p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <div className="flex flex-row items-center gap-2 text-[#41c09e]">
                      <RiMotorbikeFill />
                      <p className="text-[#111]">{items.deliveryTime}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <p className="text-xl font-semibold mb-4">
                {selectedRestaurant} is currently closed.
              </p>
              <button
                onClick={closeModal}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Restaurants;
