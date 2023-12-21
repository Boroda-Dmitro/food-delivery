import React from "react";
import { LogoWrapper, IconBox, LogoTitle } from "./Logo.styled";
import { GiFullPizza } from "react-icons/gi";

export const Logo = () => {
  return (
    <LogoWrapper>
      <IconBox>
        <GiFullPizza
          style={{ width: "100%", height: "100%"}}
        />
      </IconBox>

      <LogoTitle>Food Delivery</LogoTitle>
    </LogoWrapper>
  );
};
