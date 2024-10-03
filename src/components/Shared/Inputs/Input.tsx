import React, { useState } from "react";
import styles from "./Input.module.scss";
import type InputProps from "./Input.props";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons from react-icons

const Input: React.FC<InputProps> = ({
  label,
  name,
  placeholder,
  type,
  className,
  labelColor,
  error,
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const isPasswordType = type === "password";

  return (
    <div className="relative">
      <div>
        {label && (
          <label
            htmlFor={name}
            className={` ${styles.label}`}
            style={{ color: labelColor }}
          >
            <div>{label}</div>
          </label>
        )}
      </div>

      <div className={`${styles.input_container} ${className} relative`}>
        <div className="relative w-full">
          <input
            className={`${styles.input}`}
            type={isPasswordType && !isPasswordVisible ? "password" : "text"}
            id={name}
            name={name}
            placeholder={placeholder}
            {...rest}
          />

          {/* Eye icon for toggling visibility */}
          {isPasswordType && (
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          )}
        </div>

        <div>{error && <p className="text-red-500">{error}</p>}</div>
      </div>
    </div>
  );
};

export default Input;
