import React, { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter
import Navbar from "../Navbar/Navbar";
import Img from "../Shared/images/Image";
import Rice from "@/assets/img/jollof.jpg";
import { FaRegClock } from "react-icons/fa6";
import { H4, P, P2, P3 } from "../Shared/heading/Heading";
import { CiStar } from "react-icons/ci";
import { StaticImageData } from "next/image";
import MenuItem from "../MenuItems/MenuItems";
import OrderItem from "../Order/OrderItem";

interface MenuItemData {
  imagePath: StaticImageData;
  itemName: string;
  price: number;
  id: number;
}

interface Pack {
  id: number;
  counters: Record<number, number>;
}

const items: MenuItemData[] = [
  { id: 1, imagePath: Rice, itemName: "Jollof Rice", price: 200 },
  { id: 2, imagePath: Rice, itemName: "Jollofs Rice", price: 300 },
  { id: 3, imagePath: Rice, itemName: "Jollofss Rice", price: 400 },
  { id: 4, imagePath: Rice, itemName: "Jollofsss Rice", price: 500 },
  { id: 5, imagePath: Rice, itemName: "Jollofss Rice", price: 400 },
  { id: 6, imagePath: Rice, itemName: "Jollofsss Rice", price: 500 },
  { id: 7, imagePath: Rice, itemName: "Jollofss Rice", price: 400 },
  { id: 8, imagePath: Rice, itemName: "Jollofsss Rice", price: 500 },
  // Other items...
];

const Stores: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<"deliver" | "pickup">(
    "deliver"
  );
  const [packs, setPacks] = useState<Pack[]>([{ id: 1, counters: {} }]);
  const [currentPackId, setCurrentPackId] = useState<number>(1);
  const router = useRouter(); // Initialize useRouter

  const handleIncrement = (packId: number, itemId: number) => {
    setPacks((prevPacks) =>
      prevPacks.map((pack) =>
        pack.id === packId
          ? {
              ...pack,
              counters: {
                ...pack.counters,
                [itemId]: (pack.counters[itemId] || 0) + 1,
              },
            }
          : pack
      )
    );
  };

  const handleDecrement = (packId: number, itemId: number) => {
    setPacks((prevPacks) =>
      prevPacks.map((pack) =>
        pack.id === packId
          ? {
              ...pack,
              counters: {
                ...pack.counters,
                [itemId]: Math.max((pack.counters[itemId] || 0) - 1, 0),
              },
            }
          : pack
      )
    );
  };

  const addNewPack = () => {
    setPacks((prevPacks) => {
      const updatedPacks = prevPacks.map((pack) =>
        pack.id === currentPackId
          ? {
              ...pack,
              counters: { ...pack.counters },
            }
          : pack
      );
      return [...updatedPacks, { id: updatedPacks.length + 1, counters: {} }];
    });
    setCurrentPackId((prevId) => prevId + 1);
  };

  const resetPackSelection = (packId: number) => {
    setPacks((prevPacks) =>
      prevPacks.map((pack) =>
        pack.id === packId
          ? {
              ...pack,
              counters: {},
            }
          : pack
      )
    );
  };

  const handlePackClick = (packId: number) => {
    setCurrentPackId(packId);
  };

  const handleDuplicatePack = () => {
    setPacks((prevPacks) => {
      const currentPack = prevPacks.find((pack) => pack.id === currentPackId);
      if (!currentPack) return prevPacks;
      const newPack = {
        id: prevPacks.length + 1,
        counters: { ...currentPack.counters },
      };
      return [...prevPacks, newPack];
    });
  };

  const handleEmptyPack = () => {
    setPacks((prevPacks) =>
      prevPacks.map((pack) =>
        pack.id === currentPackId
          ? {
              ...pack,
              counters: {},
            }
          : pack
      )
    );
  };

  return (
    <div className="h-full my-20">
      <Navbar />

      <div className="mt-24">
        <div className="relative">
          <Img
            path={Rice}
            name="image"
            className="rounded-2xl w-11/12 mx-auto h-[150px]"
          />
          <div className="bg-slate-100 px-2 py-1 rounded-md absolute bottom-3 left-6 gap-2 flex flex-row">
            <FaRegClock />
            <P3>20-25min</P3>
          </div>
        </div>
        <div className="flex flex-row justify-between mx-3 mt-3">
          <H4>Jollof Rice Village</H4>
          <div className="flex flex-col">
            <div className="flex flex-row items-center justify-end">
              <P>5.0</P> <CiStar /> <P>(0)</P>
            </div>
            <P2>02.00pm - 11.59pm</P2>
          </div>
        </div>
      </div>

      <div className="flex flex-row border border-gray-700 w-5/6 rounded-xl mx-auto justify-between px-10 mt-10">
        <div
          className={`cursor-pointer ${
            selectedOption === "deliver"
              ? "bg-[#41c09e] rounded text-white px-4 my-1"
              : "my-1"
          }`}
          onClick={() => setSelectedOption("deliver")}
        >
          <P2>Deliver now</P2>
        </div>

        <div
          className={`cursor-pointer ${
            selectedOption === "pickup"
              ? "bg-[#41c09e] rounded text-white px-4 my-1"
              : "my-1"
          }`}
          onClick={() => setSelectedOption("pickup")}
        >
          <P2>Pickup</P2>
        </div>
      </div>

      <div className="relative flex">
        <div className="w-11/12 mx-auto border border-dotted rounded-md py-4 border-gray-950 mt-10 mb-20">
          {packs
            .filter((pack) => pack.id === currentPackId) // Display only the current pack
            .map((pack) => (
              <div className="flex flex-col mx-2" key={pack.id}>
                <h3 className="text-lg font-bold mb-4 ">Pack {pack.id}</h3>
                {items.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <MenuItem
                      imagePath={item.imagePath}
                      itemName={item.itemName}
                      price={item.price}
                      onIncrement={() => handleIncrement(pack.id, item.id)} // Changed from increment to onIncrement
                      onDecrement={() => handleDecrement(pack.id, item.id)}
                      count={pack.counters[item.id] || 0}
                    />
                    {index < items.length - 1 && <hr className="my-2" />}
                  </React.Fragment>
                ))}
              </div>
            ))}
        </div>
        <div className="fixed bottom-0 w-full">
          <OrderItem
            packs={packs}
            items={items}
            addNewPack={addNewPack}
            resetPackSelection={resetPackSelection}
            onPackClick={handlePackClick}
            onDuplicatePack={handleDuplicatePack}
            onEmptyPack={handleEmptyPack}
          />
        </div>
      </div>
    </div>
  );
};

export default Stores;
