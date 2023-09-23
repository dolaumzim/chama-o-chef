interface ButtonProps {
  disabled: boolean;
  label: string;
}

const Button = ({ disabled=true, label }:ButtonProps) => {
  return <button type="submit" disabled={disabled}>{label}</button>;
};

export default Button;
