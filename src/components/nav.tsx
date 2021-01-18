import * as React from 'react';
import { chakra, Box, Heading, Text, Flex, Link as ChakraLink } from '@chakra-ui/react';
import { navLinks } from '../config';
import { Link } from 'gatsby';

interface Props {

}

export const Nav: React.FC<Props> = () => {
  return (
    <Flex zIndex={1} position="sticky" top={0} bg="tan" p="1.5rem 2.5rem">
      <Flex flex={1} m="auto" align="center">
        <ChakraLink as={Link} to="/">
          <Flex flexWrap="wrap" letterSpacing="0.1em" textTransform="uppercase">
            <Heading size="md">Razak Mo</Heading>
          </Flex>
        </ChakraLink>
        <Flex alignItems="center" ml={"auto"} display={{ base: "none", lg: "block" }}>
          <chakra.ol
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={0}
            m={0}
            listStyle="none"
          >
            {navLinks && navLinks.map(({ name, url }, i) => (
              <chakra.li
                key={i}
                m="0 1.5rem"
                position="relative"
              >
                <Link to={url}>{name}</Link>
              </chakra.li>
            ))}
          </chakra.ol>
        </Flex>
      </Flex>
    </Flex>
  );
}
