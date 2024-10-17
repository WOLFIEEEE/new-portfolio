import {
  Stack,
  Heading,
  Text,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  Box,
} from '@chakra-ui/react'

import Container from '../../components/Container'
import Head from 'next/head'
import Script from 'next/script'

export default function Contact() {
  return (
    <>
      <Container>
        <Head>
          <title>Contact - Abdul Rahman</title>
          <meta content="Contact Abdul Rahman" name="title" />
          <meta
            content="Get in touch with Abdul Rahman, a Software Engineer based in Indonesia."
            name="description"
          />

          <meta content="website" property="og:type" />
          <meta content="https://abdulrahman.id/contact" property="og:url" />
          <meta content="Contact - Abdul Rahman" property="og:title" />
          <meta
            content="Get in touch with Abdul Rahman, a Software Engineer based in Indonesia."
            property="og:description"
          />
          <meta
            content="https://imagizer.imageshack.com/a/img923/3917/IFUVhm.png"
            property="og:image"
          />

          <meta content="summary_large_image" property="twitter:card" />
          <meta
            content="https://abdulrahman.id/contact"
            property="twitter:url"
          />
          <meta
            content="Contact - Abdul Rahman"
            property="twitter:title"
          />
          <meta
            content="Get in touch with Abdul Rahman, a Software Engineer based in Indonesia."
            property="twitter:description"
          />
          <meta
            content="https://imagizer.imageshack.com/a/img923/3917/IFUVhm.png"
            property="twitter:image"
          />
        </Head>
        {/* Load Calendly script */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
        <Stack
          justifyContent="center"
          my={{ base: '15vh', md: '16vh' }}
          spacing={10}
        >
          <Stack spacing={5}>
            <Heading color="displayColor" fontSize={{ base: '4xl', md: '6xl' }}>
              Contact Me
            </Heading>
            <Text fontSize={{ base: '14px', md: '16px' }}>
              I'm excited to hear from you! Whether you have a question, a project in mind, or just want to say hello, feel free to reach out.
            </Text>
            {/* Contact Form */}
            <form
              action="https://getform.io/f/bolgxona"
              method="POST"
              encType="multipart/form-data"
            >
              <Stack spacing={4}>
                <FormControl id="name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </FormControl>
                <FormControl id="service" isRequired>
                  <FormLabel>Service</FormLabel>
                  <Select
                    placeholder="Select service"
                    name="service"
                    required
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
                <FormControl id="message" isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    name="message"
                    placeholder="Your message..."
                    required
                  />
                </FormControl>
                <Button type="submit" colorScheme="blue" size="lg">
                  Send Message
                </Button>
              </Stack>
            </form>
            <Divider />
          </Stack>
          {/* Schedule a Call Section */}
          <Box textAlign="center">
            <Heading size="md" mb={4}>
              Want to Schedule a Call?
            </Heading>
            <Box>
              {/* Calendly link widget using Chakra UI Button */}
              <Button
                onClick={() => {
                  if (window.Calendly) {
                    window.Calendly.initPopupWidget({ url: 'https://calendly.com/kgpkhushwant1' })
                  } else {
                    console.error('Calendly is not loaded')
                  }
                }}
                colorScheme="blue"
                size="lg"
              >
                Schedule time with me
              </Button>
            </Box>
          </Box>
        </Stack>
      </Container>
    </>
  )
}

// No getStaticProps needed as this is a static contact page
