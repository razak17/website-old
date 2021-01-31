import * as React from "react";
import { chakra as c, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { navLinks } from "../config";
import { Link } from "gatsby";
import { Menu } from "./menu";
import IconLogo from "./icons/logo";

interface Props { }

export const Nav: React.FC<Props> = () => {
  return (
    <c.header
      display="flex"
      zIndex={11}
      position="fixed"
      top={0}
      bg="tan"
      p="0 2.5rem"
      w="100%"
      h="7rem"
      userSelect="auto"
    >
      <c.nav
        display="flex"
        justifyContent="space-between"
        zIndex={12}
        position="relative"
        w="100%"
        p="1.5rem 0"
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          letterSpacing="0.1em"
          textTransform="uppercase"
        >
          <c.div w="42px" h="46px">
            <a href="/" aria-label="home">
              <IconLogo />
            </a>
          </c.div>
        </Flex>
        <Flex alignItems="center" display={{ base: "none", lg: "flex" }}>
          <c.ul
            display="flex"
            alignItems="center"
            justifyContent="center"
            listStyle="none"
            listStyleType="none"
            textDecor="none"
            p={0}
            m={0}
          >
            {navLinks &&
              navLinks.map(({ name, url }, i) => (
                <c.li key={i} fontSize="lg" m="0 1.5rem" position="relative">
                  <Link to={url}>{name}</Link>
                </c.li>
              ))}
            <div
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "transparent",
                fontSize: "1.125rem",
                border: "1px solid black",
                borderRadius: "4px",
                marginLeft: "1.5rem"
              }}
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </c.ul>
        </Flex>
        <Menu />
      </c.nav>
    </c.header>
  );
};
