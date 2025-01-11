// components/Footer.js

import {
    Box,
    Flex,
    Stack,
    Text,
    Link,
    Icon,
    useColorModeValue,
    VStack,
    HStack,
    Tooltip,
    SimpleGrid,
    useBreakpointValue,
    Input,
  } from '@chakra-ui/react';
  import NextLink from 'next/link';
  import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
  import styled from '@emotion/styled';
  
  const Bracket = styled.span`
    color: #8f9094;
    font-weight: 600;
  `;
  
  export default function Footer() {
    // Determine if the screen is small to adjust layout accordingly
    const isSmallScreen = useBreakpointValue({ base: true, md: false });
  
    return (
      <Box
        bg="black"
        color="gray.300"
        py={10}
        px={5}
        borderTop="1px solid"
        borderColor="gray.700"
      >
        <Flex
          maxW="6xl"
          mx="auto"
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'flex-start', md: 'center' }}
          mb={8}
        >
          {/* Branding and Description */}
          <VStack align="flex-start" mb={{ base: 8, md: 0 }}>
            <NextLink passHref href="/">
              <Text
                color="displayColor"
                fontSize="24px"
                fontWeight="bold"
                cursor="pointer"
                _hover={{ color: 'blue.500' }}
                transition="color 0.3s ease"
              >
                <Bracket>&#123;</Bracket>K<Bracket>&#125;</Bracket>
              </Text>
            </NextLink>
            <Text fontSize="sm" maxW="400px">
              Software Engineer based in India. Passionate about building
              accessible and user-friendly applications.
            </Text>
          </VStack>
  
          {/* Navigation Links Divided into Two Columns */}
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={6}
            mb={{ base: 8, md: 0 }}
          >
            <Stack spacing={4}>
              <Text fontWeight="bold" mb={2}>
                Quick Links
              </Text>
              <SimpleGrid columns={{ base: 1, sm: 2 }} columnGap={20} rowGap={3}>
                <NextLink passHref href="/services">
                    <Link
                    fontSize="sm"
                    _hover={{ textDecoration: 'underline', color: 'blue.500' }}
                    transition="color 0.3s ease"
                    >
                    Services
                    </Link>
                </NextLink>
                <NextLink passHref href="/work">
                    <Link
                    fontSize="sm"
                    _hover={{ textDecoration: 'underline', color: 'blue.500' }}
                    transition="color 0.3s ease"
                    >
                    Work
                    </Link>
                </NextLink>
                <NextLink passHref href="/blog">
                    <Link
                    fontSize="sm"
                    _hover={{ textDecoration: 'underline', color: 'blue.500' }}
                    transition="color 0.3s ease"
                    >
                    Blog
                    </Link>
                </NextLink>
                <NextLink passHref href="/contact">
                    <Link
                    fontSize="sm"
                    _hover={{ textDecoration: 'underline', color: 'blue.500' }}
                    transition="color 0.3s ease"
                    >
                    Contact
                    </Link>
                </NextLink>
                </SimpleGrid>

            </Stack>
          </Stack>
  
          {/* Social Media and Contact */}
          <VStack align="flex-start" spacing={4}>
            <Text fontWeight="bold">Connect with me</Text>
            <HStack spacing={4}>
              <Tooltip label="LinkedIn" aria-label="LinkedIn">
                <Link href="https://linkedin.com/in/khushwantparihar" isExternal>
                  <Icon
                    as={FaLinkedin}
                    w={6}
                    h={6}
                    color="gray.300"
                    _hover={{ color: 'blue.500' }}
                    transition="color 0.3s ease"
                  />
                </Link>
              </Tooltip>
              <Tooltip label="GitHub" aria-label="GitHub">
                <Link href="https://github.com/wolfieeee" isExternal>
                  <Icon
                    as={FaGithub}
                    w={6}
                    h={6}
                    color="gray.300"
                    _hover={{ color: 'gray.500' }}
                    transition="color 0.3s ease"
                  />
                </Link>
              </Tooltip>
              <Tooltip label="Email" aria-label="Email">
                <Link href="mailto:kgpkhushwant1@gmail.com" isExternal>
                  <Icon
                    as={FaEnvelope}
                    w={6}
                    h={6}
                    color="gray.300"
                    _hover={{ color: 'red.400' }}
                    transition="color 0.3s ease"
                  />
                </Link>
              </Tooltip>
            </HStack>
          </VStack>
        </Flex>
  
        <Box
          borderTop="1px solid"
          borderColor="gray.700"
          pt={4}
        >
          <Flex
            maxW="6xl"
            mx="auto"
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align="center"
          >
            <Text fontSize="sm" textAlign={{ base: 'center', md: 'left' }}>
              &copy; {new Date().getFullYear()} Khushwant Parihar. All rights reserved.
            </Text>
            <HStack spacing={4} mt={{ base: 4, md: 0 }}>
              <Text fontSize="sm">Made with ❤️ using Next.js and Chakra UI.</Text>
              <NextLink passHref href="/privacy-policy">
                <Link
                  fontSize="sm"
                  _hover={{ textDecoration: 'underline', color: 'blue.500' }}
                  transition="color 0.3s ease"
                >
                  Privacy Policy
                </Link>
              </NextLink>
              <NextLink passHref href="/terms-of-service">
                <Link
                  fontSize="sm"
                  _hover={{ textDecoration: 'underline', color: 'blue.500' }}
                  transition="color 0.3s ease"
                >
                  Terms of Service
                </Link>
              </NextLink>
            </HStack>
          </Flex>
        </Box>
      </Box>
    );
  }
  