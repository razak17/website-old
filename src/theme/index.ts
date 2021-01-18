import { extendTheme } from '@chakra-ui/react'
import theme from "@chakra-ui/theme";
import { styles, breakpoints } from './global';
import { textStyles } from './textStyles';

const customTheme = {
  ...theme,
  styles,
  textStyles,
  breakpoints,
  config: {
    ...theme.config,
    useSystemColorMode: false,
  },
  components: {
    ...theme.components,
  },
}

export default extendTheme(customTheme);
