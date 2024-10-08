import { BiChevronDown } from "react-icons/bi";
import styles from "./Dropdown.module.scss";
import type { DropdownProps } from "./Dropdown.props";

const Dropdown: React.FC<DropdownProps> = ({
  label,
  name,
  options,
  dropdownValue,
  onChange,
  className,
  placeholder = "---Select Option ---",
  labelColor,
  error,
}) => {
  return (
    <div className={`${styles.select__wrapper} ${className}`}>
      {label && (
        <label
          style={{ color: labelColor }}
          htmlFor={name}
          className={` ${styles.label}`}
        >
          <div>{label}</div>
        </label>
      )}

      <select
        className={`${styles.select} ${styles.customSelect} ${className}`}
        value={dropdownValue}
        onChange={onChange}
        required
      >
        <option className=" text-xs" value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Dropdown;
