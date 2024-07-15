export default interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  borderRadius?: string;
  labelColor?: string;
}
