// components/ContactMe.js

import {
  Button,
  chakra,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Stack,
  Textarea,
  Text,
  SimpleGrid,
  Select,
} from '@chakra-ui/react';
import { useState } from 'react';
import ReactGA from 'react-ga4';
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      w="100%"
      spacing={10}
      p={8}
      bg="black"
      color="white"
      minH="100vh"
    >
      <SlideUpWhenVisible>
        <Heading
          fontSize={{ base: '4xl', md: '5xl' }}
          textAlign="center"
          color="teal.300"
        >
          Get in Touch
        </Heading>
      </SlideUpWhenVisible>

      <SlideUpWhenVisible>
        <Text
          color="gray.300"
          fontSize="lg"
          textAlign="center"
          maxW="600px"
          mx="auto"
        >
          I would love to hear from you! If you have any questions or need any service, 
          please fill out the form below and I'll get back to you as soon as possible.
        </Text>
      </SlideUpWhenVisible>

      <SlideUpWhenVisible>
        <chakra.form
          // Use 100% width, but cap at 1200px, and center it
          w="100%"
          maxW="1200px"
          mx="auto"
          p={6}
          bg="gray.900"
          borderRadius="lg"
          boxShadow="lg"
          action="https://getform.io/f/bolgxona"
          method="POST"
        >
          <Stack spacing={8}>
            {/* Name and Email in the same row */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
              <FormControl isRequired>
                <FormLabel htmlFor="name" fontWeight="bold" color="teal.200">
                  Name
                </FormLabel>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  size="lg"
                  bg="gray.800"
                  borderColor="gray.700"
                  focusBorderColor="teal.400"
                  color="white"
                  _placeholder={{ color: 'gray.500' }}
                  w="100%"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="email" fontWeight="bold" color="teal.200">
                  Email
                </FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  size="lg"
                  bg="gray.800"
                  borderColor="gray.700"
                  focusBorderColor="teal.400"
                  color="white"
                  _placeholder={{ color: 'gray.500' }}
                  w="100%"
                />
              </FormControl>
            </SimpleGrid>

            {/* Service Dropdown */}
            <FormControl isRequired>
              <FormLabel htmlFor="service" fontWeight="bold" color="teal.200">
                What service do you need help with?
              </FormLabel>
              <Select
                id="service"
                name="service"
                placeholder="Select a service"
                value={formData.service}
                onChange={handleChange}
                size="lg"
                bg="gray.800"
                borderColor="gray.700"
                focusBorderColor="teal.400"
                color="white"
                _placeholder={{ color: 'gray.500' }}
                w="100%"
              >
                <option value="WordPress Development">WordPress Development</option>
                <option value="WordPress Plugin Development">WordPress Plugin Development</option>
                <option value="WordPress Theme Customization">WordPress Theme Customization</option>
                <option value="Accessibility Remediation">Accessibility Remediation</option>
                <option value="Accessibility Audits">Accessibility Audits</option>
                <option value="Custom Website Development">Custom Website Development</option>
                <option value="Accessible UI Designs">Accessible UI Designs</option>
                <option value="Any Other Services">Any Other Services</option>
                <option value="Want to schedule a Meet">Want to Schedule a Meet</option>
                <option value="Consultation on Web Technologies">Consultation on Web Technologies</option>
                <option value="General Inquiry">General Inquiry</option>
              </Select>
            </FormControl>

            {/* Message field */}
            <FormControl isRequired>
              <FormLabel htmlFor="message" fontWeight="bold" color="teal.200">
                Message
              </FormLabel>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message"
                resize="vertical"
                size="lg"
                bg="gray.800"
                borderColor="gray.700"
                focusBorderColor="teal.400"
                color="white"
                _placeholder={{ color: 'gray.500' }}
                w="100%"
              />
            </FormControl>

            {/* Send Button */}
            <Button
              colorScheme="teal"
              size="lg"
              type="submit"
              w="full"
              transition="background 0.3s ease-in-out"
              _hover={{ backgroundColor: 'teal.500' }}
            >
              Send Now
            </Button>
          </Stack>
        </chakra.form>
      </SlideUpWhenVisible>
    </Stack>
  );
}