import * as React from "react";
import {
  chakra as c,
  Link,
  useDisclosure,
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
} from "@chakra-ui/react";
import { navLinks } from "../config";

interface MenuProps { }

export const Menu: React.FC<MenuProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box display={{ base: "flex", lg: "none" }}>
      <c.button
        onClick={onOpen}
        display={{ base: "flex", lg: "none" }}
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex={1}
        userSelect="none"
      >
        <c.div>
          <c.span textStyle="hamburger"></c.span>
          <c.span textStyle="hamburger"></c.span>
          <c.span textStyle="hamburger"></c.span>
        </c.div>
      </c.button>
      <Drawer size="xs" isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <c.nav
                display="flex"
                textAlign="center"
                justifyContent="space-between"
                flexDir="column"
                w="100%"
              >
                <c.ul
                  listStyle="none"
                  listStyleType="none"
                  textDecor="none"
                  w="100%"
                  p={0}
                  m={0}
                >
                  {navLinks &&
                    navLinks.map(({ name, url }, i) => (
                      <c.li
                        key={i}
                        fontSize="lg"
                        m="0 auto 1.5rem"
                        position="relative"
                      >
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
                      marginLeft: "1.5rem",
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
              </c.nav>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};
