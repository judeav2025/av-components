import { Input as AntInput } from "antd";

interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export function Input({ value, onChange, placeholder }: InputProps) {
  return (
    <AntInput value={value} onChange={onChange} placeholder={placeholder} />
  );
}
