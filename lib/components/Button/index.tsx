import { Button as AntButton } from "antd";
import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "primary" | "default";
}

export function Button({ children, onClick, type = "default" }: ButtonProps) {
  return (
    <AntButton type={type} onClick={onClick}>
      {children}
    </AntButton>
  );
}
