import * as React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import customTheme from '../theme';
import { Footer } from './footer';
import { Head } from './head';
import { Wrapper } from './wrapper';
import { Nav } from './nav';

interface Props {

}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head />
      <div id="root">
        <ChakraProvider theme={customTheme}>
          <CSSReset />
          <div>
            <Nav />

            <Wrapper>
              {children}
            </Wrapper>
            <Footer />
          </div>
        </ChakraProvider>
      </div>
    </>
  );
}
