import React from 'react';
import {
  Box,
  Image,
  Flex,
  Text,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react';

import logo from '../assets/logo-spot.jpg';

const Clone = () => {
  const height = window.screen.height;
  return (
    <Flex
      fontFamily="body"
      bg="black"
      color="white"
      h={height}
      pt="40"
      justifyContent="center"
    >
      <Box w={{base: '80%', sm: '60%', md: '40%'}}>
        <Image
          pb="10"
          ml="auto"
          mr="auto"
          display="block"
          w="60%"
          src={logo}
          alt="spotify-logo"
        />
        <Text
          pb="10"
          fontSize={{base: '18px', md: '24px'}}
          fontWeight="bold"
          textAlign="center"
        >
          Music for everyone
        </Text>
        <FormControl id="clone">
          <Input placeholder="Enter link ..." />
          <Button
            w="100%"
            _hover={{
              bg: 'BtnHover',
            }}
            mt="10"
            bg="primary"
            type="submit"
          >
            CLONE
          </Button>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default Clone;
