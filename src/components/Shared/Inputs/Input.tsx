import styles from "./Input.module.scss";
import type InputProps from "./Input.props";

const Input: React.FC<InputProps> = ({
  label,
  name,
  placeholder,
  type,
  className,

  ...rest
}) => {
  return (
    <div className="relative">
      <div>
        {label && (
          <label htmlFor={name} className={` ${styles.label}`}>
            <div>{label}</div>
          </label>
        )}
      </div>

      <div className={`${styles.input_container} ${className}`}>
        <input
          className={`${styles.input}`}
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </div>
  );
};

export default Input;
