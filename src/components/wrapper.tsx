import React from "react";
import { Box, Flex } from "@chakra-ui/react";

type WrapperVariant = "small" | "regular";

interface WrapperProps {
  variant?: WrapperVariant;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Flex
      flexDir="column"
      mx="auto"
      maxW={variant === "regular" ? "900px" : "400px"}
      minH="100vh"
    >
      {children}
    </Flex>
  );
};

