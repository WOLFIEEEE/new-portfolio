// pages/privacy-policy.js

import { Box, Container, Heading, Text, VStack, Link, UnorderedList, ListItem } from '@chakra-ui/react';
import Head from 'next/head';
import HeadContainer from '../../components/Container';

export default function PrivacyPolicy() {
  return (
    <>
      <HeadContainer>
        <Head>
          <title>Privacy Policy | Khushwant Parihar</title>
          <meta name="description" content="Privacy Policy for Khushwant Parihar's portfolio website." />
        </Head>
        <Container
          maxW="container.md"
          py={10}
          // Add top padding to prevent overlap with the fixed navbar
          pt={{ base: '80px', md: '80px' }} // Adjust '80px' based on your navbar's height
        >
          <VStack align="start" spacing={6}>
            <Heading as="h1" size="xl">
              Privacy Policy
            </Heading>
            <Text>
              <strong>Last Updated:</strong> October 18, 2024
            </Text>

            {/* Introduction */}
            <Box>
              <Heading as="h2" size="md" mb={2}>
                1. Introduction
              </Heading>
              <Text mb={4}>
                Welcome to{' '}
                <Link href="https://khushwantparihar.com" isExternal color="blue.500">
                  khushwantparihar.com
                </Link>{' '}
                ("we," "us," "our"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website (the "Site"). Please read this policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Site.
              </Text>
            </Box>

            {/* Information We Collect */}
            <Box>
              <Heading as="h2" size="md" mb={2}>
                2. Information We Collect
              </Heading>
              <Text mb={2}>
                <strong>a. Personal Data</strong>
              </Text>
              <Text mb={4}>
                Personally identifiable information, such as your:
                <UnorderedList>
                  <ListItem>Name</ListItem>
                  <ListItem>Email Address</ListItem>
                  <ListItem>Phone Number</ListItem>
                  <ListItem>Mailing Address</ListItem>
                </UnorderedList>
              </Text>

              <Text mb={2}>
                <strong>b. Usage Data</strong>
              </Text>
              <Text mb={4}>
                Information automatically collected when you access or use the Site, such as:
                <UnorderedList>
                  <ListItem>IP Address</ListItem>
                  <ListItem>Browser Type</ListItem>
                  <ListItem>Operating System</ListItem>
                  <ListItem>Pages Visited</ListItem>
                  <ListItem>Time and Date of Visit</ListItem>
                </UnorderedList>
              </Text>

              <Text mb={2}>
                <strong>c. Cookies and Tracking Technologies</strong>
              </Text>
              <Text mb={4}>
                We use cookies and similar tracking technologies to:
                <UnorderedList>
                  <ListItem>
                    <strong>Enhance User Experience:</strong> Remembering your preferences and settings.
                  </ListItem>
                  <ListItem>
                    <strong>Analyze Usage:</strong> Understanding how visitors use our Site to improve functionality and content.
                  </ListItem>
                  <ListItem>
                    <strong>Marketing Purposes:</strong> Delivering personalized content and advertisements.
                  </ListItem>
                </UnorderedList>
                <br />
                <strong>
                  You can manage your cookie preferences through your browser settings. However, disabling cookies may affect the functionality of our Site.
                </strong>
              </Text>
            </Box>

            {/* How We Use Your Information */}
            <Box>
              <Heading as="h2" size="md" mb={2}>
                3. How We Use Your Information
              </Heading>
              <Text mb={4}>
                We use the information we collect in the following ways:
                <UnorderedList>
                  <ListItem>
                    <strong>To Provide and Maintain Our Services:</strong> Including responding to inquiries, providing customer support, and delivering requested information.
                  </ListItem>
                  <ListItem>
                    <strong>To Improve Our Site:</strong> Understanding how users interact with our Site to enhance user experience.
                  </ListItem>
                  <ListItem>
                    <strong>To Communicate with You:</strong> Sending updates, newsletters, or promotional materials, if you have opted in to receive them.
                  </ListItem>
                  <ListItem>
                    <strong>To Ensure Security:</strong> Monitoring and protecting against unauthorized access or breaches.
                  </ListItem>
                </UnorderedList>
              </Text>
            </Box>

            {/* Disclosure of Your Information */}
            <Box>
              <Heading as="h2" size="md" mb={2}>
                4. Disclosure of Your Information
              </Heading>
              <Text mb={4}>
                We may share your information in the following situations:
                <UnorderedList>
                  <ListItem>
                    <strong>With Service Providers:</strong> Third-party vendors who perform services on our behalf, such as hosting, data analysis, and email delivery.
                  </ListItem>
                  <ListItem>
                    <strong>For Legal Reasons:</strong> When required by law or to protect our rights, safety, or property.
                  </ListItem>
                  <ListItem>
                    <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets.
                  </ListItem>
                </UnorderedList>
              </Text>
            </Box>

            {/* Third-Party Services */}
            <Box>
              <Heading as="h2" size="md" mb={2}>
                5. Third-Party Services
              </Heading>
              <Text mb={4}>
                Our Site may contain links to third-party websites and services that are not operated by us. <strong>We are not responsible for the privacy practices or content of these third parties.</strong> We encourage you to review the privacy policies of any third-party sites you visit.
              </Text>
            </Box>

            {/* Data Security */}
            <Box>
              <Heading as="h2" size="md" mb={2}>
                6. Data Security
              </Heading>
              <Text mb={4}>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </Text>
            </Box>

            {/* Your Data Protection Rights */}
            <Box>
              <Heading as="h2" size="md" mb={2}>
                7. Your Data Protection Rights
              </Heading>
              <Text mb={4}>
                Depending on your location, you may have the following rights regarding your personal data:
                <UnorderedList>
                  <ListItem><strong>Access:</strong> Request copies of your personal data.</ListItem>
                  <ListItem><strong>Rectification:</strong> Request correction of any inaccurate or incomplete data.</ListItem>
                  <ListItem><strong>Erasure:</strong> Request deletion of your personal data.</ListItem>
                  <ListItem><strong>Restriction of Processing:</strong> Request the limitation of processing your data.</ListItem>
                  <ListItem><strong>Data Portability:</strong> Request transfer of your data to another organization.</ListItem>
                  <ListItem><strong>Object:</strong> Object to the processing of your data under certain conditions.</ListItem>
                </UnorderedList>
                <br />
                To exercise these rights, please contact us at{' '}
                <Link href="mailto:contact@khushwantparihar.com" color="blue.500">
                  contact@khushwantparihar.com
                </Link>.
              </Text>
            </Box>

            {/* Children's Privacy */}
            <Box>
              <Heading as="h2" size="md" mb={2}>
                8. Children's Privacy
              </Heading>
              <Text mb={4}>
                Our Site is not intended for individuals under the age of 13. <strong>We do not knowingly collect personal information from children under 13.</strong> If you become aware that a child has provided us with personal data, please contact us immediately, and we will take steps to remove such information.
              </Text>
            </Box>

            {/* Changes to This Privacy Policy */}
            <Box>
              <Heading as="h2" size="md" mb={2}>
                9. Changes to This Privacy Policy
              </Heading>
              <Text mb={4}>
                We may update our Privacy Policy from time to time. <strong>We will notify you of any changes by posting the new Privacy Policy on this page.</strong> You are advised to review this Privacy Policy periodically for any changes. Changes are effective immediately upon posting.
              </Text>
            </Box>

            {/* Contact Us */}
            <Box>
              <Heading as="h2" size="md" mb={2}>
                10. Contact Us
              </Heading>
              <Text>
                If you have any questions about this Privacy Policy, please contact us:
              </Text>
              <Text>
                <strong>By Email:</strong>{' '}
                <Link href="mailto:contact@khushwantparihar.com" color="blue.500">
                  contact@khushwantparihar.com
                </Link>
              </Text>
              <Text>
                <strong>By Visiting This Page on Our Website:</strong>{' '}
                <Link href="https://khushwantparihar.com/contact" color="blue.500">
                  https://khushwantparihar.com/contact
                </Link>
              </Text>
            </Box>
          </VStack>
        </Container>
      </HeadContainer>
    </>
  );
}
