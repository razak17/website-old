import * as React from "react";
import { chakra } from "@chakra-ui/react";

interface MenuProps {}

export const Menu: React.FC<MenuProps> = () => {
  return (
    <chakra.div
      display="block"
      position="relative"
      zIndex={1}
      userSelect="none"
      ml="auto"
    >
      <chakra.span textStyle="hamburger"></chakra.span>
      <chakra.span textStyle="hamburger"></chakra.span>
      <chakra.span textStyle="hamburger"></chakra.span>
    </chakra.div>
  );
};
