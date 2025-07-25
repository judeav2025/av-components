import { Button as AntButton } from "antd";
import React from "react";
import { theme } from "antd";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "primary" | "default" | "link" | "text" | "dashed";
}

export function Button({ children, onClick, type = "primary" }: ButtonProps) {
  // const { token } = theme.useToken();

  return (
    <AntButton
      type={type}
      onClick={onClick}
      style={{ border: "2px dashed black" }}
    >
      {children}
    </AntButton>
  );
}
