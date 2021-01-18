import * as React from "react";
import { Flex } from "@chakra-ui/react";

interface Props {}

export const Footer: React.FC<Props> = () => {
  return (
    <Flex
      position="absolute"
      bg="tan"
      minH="2.5rem"
      h="auto"
      w="100%"
      bottom={0}
      p={4}
    >
      <Flex
        textAlign="center"
        justifyContent="center"
        flex={1}
        alignItems="center"
      >
        <a href="https://github.com/razak17">
          <div>Razak Mo - {new Date().getFullYear()}</div>
        </a>
      </Flex>
    </Flex>
  );
};
