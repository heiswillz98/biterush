import React, { useState } from "react";
import { useRouter } from "next/router";
import Img from "../Shared/images/Image";
import { RiMotorbikeFill } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import { restaurantData } from "@/data/restaurantData";
import { P2 } from "../Shared/heading/Heading";
import Pagination from "../Pagination/Pagination";

const Restaurants: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const restaurantsPerPage = 6;
  const router = useRouter();

  // Calculate total pages
  const totalPages = Math.ceil(restaurantData.length / restaurantsPerPage);

  // Get restaurants for the current page
  const indexOfLastRestaurant = currentPage * restaurantsPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;
  const currentRestaurants = restaurantData.slice(
    indexOfFirstRestaurant,
    indexOfLastRestaurant
  );

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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-[#E9EBEE]">
      <div className="py-4">
        <div className="text-center">
          <h1 className="text-2xl py-4 font-semibold">Available Restaurants</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4">
          {currentRestaurants.map((items, index) => (
            <div
              className="flex flex-col gap-1"
              key={index}
              onClick={() => handleRestaurantClick(items.name, items.closed)}
            >
              <div className="relative">
                <Img
                  path={items.image}
                  name={""}
                  className="relative h-40 w-full rounded-lg md:rounded-[1rem]"
                />
                {items.closed && (
                  <div className="absolute inset-0 bg-black bg-opacity-80 flex bottom-24 z-10 items-center justify-center h-full  rounded-lg md:rounded-[1rem]">
                    <p className="text-white text-2xl font-semibold">CLOSED</p>
                  </div>
                )}
              </div>
              <div className="bg-[#fff] w-full py-2  relative rounded-lg md:rounded-[1rem] cursor-pointer">
                <div className="flex flex-col items-center gap-1 md:gap-2 ">
                  <div className="items-center">
                    <p className="font-bold text-center text-sm lg:text-lg lg:text-start">
                      {items.name}
                    </p>
                  </div>
                  <div className="flex gap-3 ">
                    <div className="flex flex-row items-center gap-1 md:gap-2 lg:ml-auto">
                      <CiStar /> <P2>{items.rating}</P2>
                    </div>
                    <div className="flex items-center lg:gap-2 text-[#41c09e]">
                      <RiMotorbikeFill />
                      <P2 className="text-[#111]">{items.deliveryTime}</P2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Component */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

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
