import styles from "./Checkbox.module.scss";
import type CheckboxProps from "./Checkbox.props";

const Checkbox = ({
  label,
  value,
  name,
  className,
  onChange,
  error,
}: CheckboxProps) => {
  return (
    <div>
      <div className={`${styles.check} ${className}`}>
        <input
          className={styles.checkbox}
          id={name || label}
          type="checkbox"
          checked={value}
          onChange={onChange}
          name={name || label}
        />
        <span className={`${styles.checkmark}`}></span>
        <label
          className={`${styles.label} cursor-pointer`}
          htmlFor={name || label}
        >
          {label}
        </label>
      </div>
      <div>{error && <p className="text-red-500">{error}</p>}</div>
    </div>
  );
};

export default Checkbox;
