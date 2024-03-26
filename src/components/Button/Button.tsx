import React, { useEffect } from "react";
import ButtonWrapper from "./ButtonWrapper";

const Button: React.FC = () => {
  useEffect(() => {
    import("mainApp/MainData").then((module) => {
      console.log(module);
      const mainData = module.default;
      console.log("==>", mainData);
      mainData.subscribe((data: any) => {
        console.log(data);
      });
    });
  }, []);
  return (
    <div>
      <ButtonWrapper
        type="primary"
        onClick={() => console.log("Button clicked")}
      >
        Click me
      </ButtonWrapper>
    </div>
  );
};

export default Button;
