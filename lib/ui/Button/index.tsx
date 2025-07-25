import { Button as AntButton } from "antd";
import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "primary" | "default" | "link" | "text" | "dashed";
}

export function Button({ children, onClick, type = "link" }: ButtonProps) {
  return (
    <AntButton
      type={type}
      onClick={onClick}
      style={{ border: "1px solid purple" }}
    >
      {children}
    </AntButton>
  );
}
