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
    <div className="flex items-center justify-between mx-3 my-3">
      <Img path={imagePath} name="image" className="w-1/3 rounded-2xl" />
      <div>
        <P2>{itemName}</P2>
        <P2>Price: ₦{price}</P2>
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
