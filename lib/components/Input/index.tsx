import { Input as AntInput } from "antd";

// Define props interface for type safety
interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

// Wrap AntD Input for customization
export function Input({ value, onChange, placeholder }: InputProps) {
  return (
    <AntInput value={value} onChange={onChange} placeholder={placeholder} />
  );
}
