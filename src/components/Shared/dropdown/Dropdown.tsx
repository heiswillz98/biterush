import { BiChevronDown } from "react-icons/bi";
import { ChangeEvent, useState } from "react"; // Import useState hook
import styles from "./Dropdown.module.scss";
import type { DropdownProps } from "./Dropdown.props";

const Dropdown: React.FC<DropdownProps> = ({
  label,
  name,
  options,
  dropdownValue,
  onChange,
  className,
  required,
}) => {
  const [isOpen, setIsOpen] = useState(false); // State for dropdown visibility

  // const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
  //   setIsOpen(false); // Close the dropdown after selection
  //   onChange(e);
  // };
  const handleSelect = (selectedValue: string) => {
    setIsOpen(false); // Close the dropdown after selection
    onChange(selectedValue); // Pass the selected value directly to onChange
  };

  return (
    <div className={`relative ${styles.select__wrapper} ${className}`}>
      {label && (
        <label htmlFor={name} className={` ${styles.label}`}>
          <div>{label}</div>
        </label>
      )}

      <div
        className={`${styles.select} ${styles.customSelect} ${
          isOpen ? styles.open : ""
        } ${className}`}
        onClick={() => setIsOpen(!isOpen)} // Toggle dropdown visibility on click
      >
        <div className={styles.selectedValue}>{dropdownValue}</div>
        <BiChevronDown className={styles.dropdownIcon} />
      </div>

      {isOpen && (
        <div className={styles.dropdownOptions}>
          <div className={styles.dropdownList} style={{ maxHeight: "10rem" }}>
            {options.map((option, index) => (
              <div
                key={index}
                className={styles.option}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
