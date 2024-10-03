import type { ChangeEvent } from "react";

export default interface CheckboxProps {
  label: string;
  value: any;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
  checked?: boolean;
  error?: string | false;
}
