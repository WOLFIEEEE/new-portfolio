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
          <title>Contact - Khushwant Parihar</title>
          <meta content="Contact Khushwant Parihar" name="title" />
          <meta
            content="Get in touch with Khushwant Parihar, a Software Engineer based in Indonesia."
            name="description"
          />

          <meta content="website" property="og:type" />
          <meta content="https://khushwantparihar.com/contact" property="og:url" />
          <meta content="Contact - Khushwant Parihar" property="og:title" />
          <meta
            content="Get in touch with Khushwant Parihar, a Software Engineer based in Indonesia."
            property="og:description"
          />
          <meta
            content="https://imagizer.imageshack.com/a/img923/3917/IFUVhm.png"
            property="og:image"
          />

          <meta content="summary_large_image" property="twitter:card" />
          <meta
            content="https://khushwantparihar.com/contact"
            property="twitter:url"
          />
          <meta
            content="Contact - Khushwant Parihar"
            property="twitter:title"
          />
          <meta
            content="Get in touch with Khushwant Parihar, a Software Engineer based in Indonesia."
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
              action="https://formspree.io/f/xayllodz"
              name="contact" method="POST" 
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
                {/* Updated FormControl for Reason for Contact */}
                <FormControl id="reason">
                  <FormLabel>Reason for Contact</FormLabel>
                  <Select
                    placeholder="Select reason (optional)"
                    name="reason"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Support">Support</option>
                    <option value="WordPress Development">WordPress Development</option>
                    <option value="WordPress Plugin Development">WordPress Plugin Development</option>
                    <option value="WordPress Theme Customization">WordPress Theme Customization</option>
                    <option value="Accessibility Remediation">Accessibility Remediation</option>
                    <option value="Accessibility Audits">Accessibility Audits</option>
                    <option value="Custom Website Development">Custom Website Development</option>
                    <option value="Accessible UI Designs">Accessible UI Designs</option>
                    <option value="Any Other Services">Any Other Services</option>
                    <option value="Other">Other</option>
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