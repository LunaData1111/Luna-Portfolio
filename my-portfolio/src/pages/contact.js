import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Textarea,
    Tooltip,
    useClipboard,
    useColorModeValue,
    VStack,
    ChakraProvider
  } from '@chakra-ui/react';
  import React from 'react';
  import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
  import { MdEmail, MdOutlineEmail } from 'react-icons/md';
  
  export default function ContactFormWithSocialButtons() {
    const { hasCopied, onCopy } = useClipboard('example@example.com');
  
    return (
      <ChakraProvider>
            <VStack spacing={7} paddingTop={5}
              backgroundImage="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
              backgroundPosition="center"
              backgroundRepeat="no-repeat">
        <Box
          borderRadius="lg"
          m={{ base: 5, md: 16, lg: 10 }}
          p={{ base: 5, lg: 16 }}
          
          >
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
              <Heading
                fontSize={{
                  base: '4xl',
                  md: '5xl',
                }}
                color='white'>
                Get in Touch
              </Heading>
  
              <Stack
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: 'column', md: 'row' }}>
                <Stack
                  align="center"
                  justify="space-around"
                  direction={{ base: 'row', md: 'column' }}>
                  <Tooltip
                    label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                    closeOnClick={false}
                    hasArrow>
                    <IconButton
                      aria-label="email"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<MdEmail />}
                      _hover={{
                        bg: 'blue.500',
                        color: useColorModeValue('white', 'gray.700'),
                      }}
                      onClick={onCopy}
                      isRound
                    />
                  </Tooltip>
  
                  <Link href="https://github.com/LunaData1111">
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<FaGithub />}
                      _hover={{
                        bg: 'blue.500',
                        color: useColorModeValue('white', 'gray.700'),
                      }}
                      isRound
                    />
                  </Link>

                  <Link href="https://stackoverflow.com/users/19222238/lunadata1111">
                    <IconButton
                      aria-label="Stack Overflow"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<FaStackOverflow />}
                      _hover={{
                        bg: 'blue.500',
                        color: useColorModeValue('white', 'gray.700'),
                      }}
                      isRound
                    />
                  </Link>
  
                  <Link href="https://www.linkedin.com/in/christian-luna-9263b4240/">
                    <IconButton
                      aria-label="linkedin"
                      variant="ghost"
                      size="lg"
                      icon={<FaLinkedin size="28px" />}
                      _hover={{
                        bg: 'blue.500',
                        color: useColorModeValue('white', 'gray.700'),
                      }}
                      isRound
                    />
                  </Link>
                </Stack>
  
                <Box
                  bg={useColorModeValue('white', 'gray.700')}
                  borderRadius="lg"
                  p={8}
                  color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                  shadow="base">
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>
  
                      <InputGroup>
                        <InputLeftElement children={<BsPerson />} />
                        <Input type="text" name="name" placeholder="Your Name" />
                      </InputGroup>
                    </FormControl>
  
                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
  
                      <InputGroup>
                        <InputLeftElement children={<MdOutlineEmail />} />
                        <Input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                        />
                      </InputGroup>
                    </FormControl>
  
                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>
  
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        resize="none"
                      />
                    </FormControl>
  
                    <Button
                      colorScheme="blue"
                      bg="blue.400"
                      color="white"
                      _hover={{
                        bg: 'blue.500',
                      }}
                      isFullWidth>
                      Send Message
                    </Button>
                  </VStack>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Box>
        </VStack>
      </ChakraProvider>
    );
  }