// import type { ChangeEvent } from "react";

// interface OptionType {
//   label: string;
//   value: string;
// }

// export interface DropdownProps {
//   label?: string;
//   name?: string;
//   options: OptionType[];
//   dropdownValue: string | undefined;
//   required?: boolean;
//   className?: string;
//   placeholder?: string;
//   // onChange: (e: ChangeEvent<HTMLSelectElement
//   onChange: (value: string) => void;
// }

import type { ChangeEvent } from "react";

export interface OptionType {
  label: string;
  value: string;
}

export interface DropdownProps {
  label: string;
  labelColor?: string;
  name?: string;
  options: OptionType[];
  dropdownValue: string;
  className?: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  error?: string | false;
}
