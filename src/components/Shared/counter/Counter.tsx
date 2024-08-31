import React from "react";
import { P } from "../heading/Heading";

interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Counter: React.FC<CounterProps> = ({
  count,
  onDecrement,
  onIncrement,
}) => {
  return (
    <div className="flex flex-row gap-3 items-center">
      <P
        className="bg-[#eb3232] text-white px-3 py-2 rounded-sm cursor-pointer"
        onClick={onDecrement}
      >
        -
      </P>
      <P>{count}</P>
      <P
        className="bg-[#4ee189] text-white px-3 py-2 rounded-sm cursor-pointer"
        onClick={onIncrement}
      >
        +
      </P>
    </div>
  );
};

export default Counter;
