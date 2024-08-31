import React from "react";
import { useRouter } from "next/router";
import { P2 } from "../Shared/heading/Heading";
import Button from "../Shared/button/Button";
import { StaticImageData } from "next/image";

interface Pack {
  id: number;
  counters: Record<number, number>;
  completed?: boolean;
}

interface MenuItemData {
  imagePath: StaticImageData;
  itemName: string;
  price: number;
  id: number;
}

interface OrderItemProps {
  packs: Pack[];
  items: MenuItemData[];
  addNewPack: () => void;
  resetPackSelection: (packId: number) => void;
  onPackClick: (packId: number) => void;
  onDuplicatePack: () => void;
  onEmptyPack: () => void;
}

const OrderItem: React.FC<OrderItemProps> = ({
  packs,
  items,
  addNewPack,
  resetPackSelection,
  onPackClick,
  onDuplicatePack,
  onEmptyPack,
}) => {
  const router = useRouter();

  const handleCheckout = () => {
    const filteredPacks = packs
      .map((pack) => ({
        ...pack,
        counters: Object.fromEntries(
          Object.entries(pack.counters).filter(([_, count]) => count > 0)
        ),
      }))
      .filter((pack) => Object.keys(pack.counters).length > 0);

    const filteredItems = items.filter((item) => {
      return filteredPacks.some((pack) => pack.counters[item.id] > 0);
    });

    // Store data in sessionStorage
    sessionStorage.setItem(
      "checkoutData",
      JSON.stringify({ packs: filteredPacks, items: filteredItems })
    );

    router.push("/showcart");
  };

  return (
    <section>
      <div className="">
        <div className="flex flex-col gap-2 bg-[#0C513F] rounded-lg text-white w-11/12 mx-auto py-4 px-3">
          {packs.map((pack) => (
            <div
              key={pack.id}
              className="flex flex-row justify-between mb-2 cursor-pointer"
              onClick={() => onPackClick(pack.id)}
            >
              <P2>
                Pack {pack.id} (
                {Object.values(pack.counters).reduce(
                  (total, count) => total + count,
                  0
                )}
                )
              </P2>
              <P2 className="">
                {" "}
                ₦
                {items
                  .reduce(
                    (total, item) =>
                      total + item.price * (pack.counters[item.id] || 0),
                    0
                  )
                  .toLocaleString()}
              </P2>
            </div>
          ))}
          <div className="flex flex-row items-center justify-center gap-8 mt-4">
            <Button color="secondary" onClick={addNewPack}>
              Add new Pack
            </Button>
            <Button onClick={onDuplicatePack}>Duplicate Pack</Button>
            <Button onClick={onEmptyPack}>Empty Pack</Button>
            <Button onClick={handleCheckout}>Checkout</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderItem;
