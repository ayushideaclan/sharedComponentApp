import React from "react";
import { Button, ButtonProps } from "antd";

interface ButtonWrapperProps extends ButtonProps {
  // Additional props if needed
}

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({ children, ...rest }) => {
  return (
    <Button size="large" {...rest}>
      {children}
    </Button>
  );
};

export default ButtonWrapper;
