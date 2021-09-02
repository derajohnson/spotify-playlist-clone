import React from 'react';
import {
  Box,
  Image,
  Flex,
  Text,
  FormControl,
  Input,
  Button,
  Center,
} from '@chakra-ui/react';

import logo from './assets/spotify-logo.png';

function App () {
  return (
    <Flex color="white" h="100vh" justifyContent="center" alignItems="center">
      <Box w={{base: '80%', sm: '60%', md: '40%'}}>
        <Center>
          <Image pb="10" w="60%" src={logo} alt="spotify-logo" />
        </Center>

        <Text
          pb="10"
          fontSize={{base: '18px', md: '24px'}}
          fontWeight="bold"
          textAlign="center"
        >
          Clone your favourite Spotify playlist
        </Text>
        <FormControl id="clone">
          <Input placeholder="Enter link ..." />
          <Center>
            <Button
              _hover={{
                bg: 'darkGreen',
              }}
              mt="10"
              bg="primary"
              type="submit"
            >
              CLONE
            </Button>
          </Center>

        </FormControl>
      </Box>
    </Flex>
  );
}

export default App;
