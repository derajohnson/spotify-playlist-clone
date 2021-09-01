import {extendTheme } from '@chakra-ui/react';


const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
  }

const theme = extendTheme ({
    config,
  colors: {
    primary: '#1DB954',
    darkGreen: '#168a3f',
  },
});

export default theme;
