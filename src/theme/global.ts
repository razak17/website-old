import { createBreakpoints } from '@chakra-ui/theme-tools'
import theme from "@chakra-ui/theme";
import { mode, Styles } from "@chakra-ui/theme-tools";

export const styles: Styles = {
  ...theme.styles,
  global: (props) => ({
    body: {
      ...theme.styles.global,
      bg: mode("gray.100", "gray.800")(props),
      color: mode("gray.800", "whiteAlpha.900")(props),
      fontFamily: "body",
      lineHeight: "base",
    },
    a: {
      color: "teal.500",
      textDecoration: "none",
      _hover: {
        textDecoration: "none",
      },
    },
    "*::placeholder": {
      color: mode("gray.400", "whiteAlpha.400")(props),
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "whiteAlpha.300")(props),
      wordWrap: "break-word",
    },
    fontFeatureSettings: `"pnum"`,
    fontVariantNumeric: "proportional-nums",
  }),
}

export const layerStyles = {
  base: {
    bg: "gray.50",
    border: "2px solid",
    borderColor: "gray.500",
  },
  selected: {
    bg: "teal.500",
    color: "teal.700",
    borderColor: "orange.500",
  },
}


export const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
});
