import * as React from "react";
import { chakra, Box, Heading, Text, Button } from "@chakra-ui/react";

interface HeroProps {
  data: any;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  return (
    <chakra.section
      display="flex"
      flexDir="column"
      alignItems="flex-start"
      justifyContent="center"
      pt={{ lg: "50px" }}
      minH="100vh"
    >
      <Box>
        <Text fontSize="xl">{frontmatter.title}</Text>
      </Box>
      <Box pt="2em">
        <Heading size="4xl">My name is Razak Mo.</Heading>
      </Box>
      <Box pt="1em">
        <Heading size="4xl">I build software.</Heading>
      </Box>
      <Box>
        <Text
          pt="1em"
          fontSize="2xl"
          w="50%"
          maxw="500px"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Box>
      <Box pt="2em">
        <Button colorScheme="blue">Get in touch</Button>
      </Box>
    </chakra.section>
  );
};
