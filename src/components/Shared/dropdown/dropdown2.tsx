import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Chevron icon from react-icons

interface DropdownProps {
  options: string[];
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
  borderColor?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = "Select an option",
  onChange,
  className,
  borderColor,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div
        className="border text-xs lg:text-base border-[#fff] rounded-md flex items-center justify-between px-4 py-2 h-[45px] lg:h-[56px] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-700">
          {selectedOption ? selectedOption : placeholder}
        </span>
        <FaChevronDown className="text-[#316541]" />
      </div>

      {isOpen && (
        <ul
          className={`absolute w-full text-xs lg:text-base bg-white border border-[#316541] mt-1 rounded-md shadow-lg max-h-60 overflow-auto z-10 border-[${borderColor}]`}
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelectOption(option)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
