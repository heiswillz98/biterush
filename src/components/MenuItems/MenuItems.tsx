import React from "react";
import Img from "../Shared/images/Image";
import { P2 } from "../Shared/heading/Heading";
import Counter from "../Shared/counter/Counter";
import { StaticImageData } from "next/image";

interface MenuItemProps {
  imagePath: StaticImageData;
  itemName: string;
  price: number;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  imagePath,
  itemName,
  price,
  count,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div className="flex items-center justify-between md:mx-4 my-3 md:my-1">
      <div className="flex gap-10">
        <Img
          path={imagePath}
          name="image"
          className="w-1/3 rounded-2xl md:h-[60px] md:w-[160px]"
        />
        <div>
          <P2>{itemName}</P2>
          <P2>Price: ₦{price}</P2>
        </div>
      </div>

      <Counter
        count={count}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
      />
    </div>
  );
};

export default MenuItem;
