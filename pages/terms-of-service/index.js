// pages/terms-of-service.js

import { Box, Container, Heading, Text, VStack, Link, UnorderedList, ListItem } from '@chakra-ui/react';
import Head from 'next/head';
import HeadContainer from '../../components/Container';

export default function TermsOfService() {
  return (
    <>
      <HeadContainer>
        <Head>
          <title>Terms of Service | Khushwant Parihar</title>
          <meta name="description" content="Terms of Service for Khushwant Parihar's portfolio website." />
        </Head>
        <Container
          maxW="container.md"
          py={10}
          // Add top padding to prevent overlap with the fixed navbar
          pt={{ base: '80px', md: '80px' }} // Adjust '80px' based on your navbar's height
        >
          <VStack align="start" spacing={6}>
            <Heading as="h1" size="xl">
              Terms of Service
            </Heading>
            <Text>
              <strong>Last Updated:</strong> October 18, 2024
            </Text>

            {/* Acceptance of Terms */}
            <Box>
              <Heading as="h2" size="md" mb={2}>
                1. Acceptance of Terms
              </Heading>
              <Text mb={4}>
                By accessing and using{' '}
                <Link href="https://khushwantparihar.com" isExternal color="blue.500">
                  khushwantparihar.com
                </Link>{' '}
                ("we," "us," "our"), you agree to comply with and be bound by the following terms and conditions ("Terms of Service"). <strong>If you do not agree with these terms, please do not use our Site.</strong>
              </Text>
            </Box>

            {/* Use of the Site */}
            <Box>
              <Heading as="h2" size="md" mb={2}>
                2. Use of the Site
              </Heading>
              <Text mb={2}>
                <strong>a. Eligibility</strong>
              </Text>
              <Text mb={4}>
                You must be at least 13 years old to use our Site. By using the Site, you represent and warrant that you meet this age requirement.
              </Text>

              <Text mb={2}>
                <strong>b. License</strong>
              </Text>
              <Text mb={4}>
                We grant you a limited, non-exclusive, non-transferable license to access and use the Site for personal, non-commercial purposes, subject to these Terms of Service.
              </Text>

              <Text mb={2}>
                <strong>c. Prohibited Conduct</strong>
              </Text>
              <Text mb={4}>
                You agree not to:
                <UnorderedList>
                  <ListItem>Use the Site for any unlawful purpose.</ListItem>
                  <ListItem>Attempt to gain unauthorized access to any part of the Site.</ListItem>
                  <ListItem>Interfere with the proper functioning of the Site.</ListItem>
                  <ListItem>Upload, post, or transmit any harmful or malicious content.</ListItem>
                  <ListItem>Violate the rights of others, including intellectual property rights.</ListItem>
                </UnorderedList>
              </Text>
            </Box>

            {/* Intellectual Property */}
            <Box>
              <Heading as="h2" size="md" mb={2}>
                3. Intellectual Property
              </Heading>
              <Text mb={2}>
                <strong>a. Ownership</strong>
              </Text>
              <Text mb={4}>
                All content, features, and functionality on the Site, including but not limited to text, graphics, logos, icons, images, and software, are the exclusive property of Khushwant Parihar or its licensors and are protected by intellectual property laws.
              </Text>

              <Text mb={2}>
                <strong>b. Restrictions</strong>
              </Text>
              <Text mb={4}>
                You may not:
                <UnorderedList>
                  <ListItem>Reproduce, distribute, or create derivative works from any content on the Site without our express written permission.</ListItem>
                  <ListItem>Remove, alter, or obscure any proprietary notices on the Site.</ListItem>
                </UnorderedList>
              </Text>
            </Box>

            {/* User-Generated Content */}
            <Box>
              <Heading as="h2" size="md" mb={2}>
                4. User-Generated Content
              </Heading>
              <Text mb={2}>
                <strong>a. Responsibility</strong>
              </Text>
              <Text mb={4}>
                If you submit, post, or transmit any content on the Site, you are solely responsible for that content and the consequences of posting it.
              </Text>

              <Text mb={2}>
                <strong>b. Rights Granted</strong>
              </Text>
              <Text mb={4}>
                By submitting content, you grant us a non-exclusive, transferable, sublicensable, royalty-free, and worldwide license to use, modify, reproduce, and distribute your content in connection with operating and promoting the Site.
              </Text>

              <Text mb={2}>
                <strong>c. Prohibited Content</strong>
              </Text>
              <Text mb={4}>
                You agree not to submit content that:
                <UnorderedList>
                  <ListItem>Is unlawful, defamatory, obscene, or infringing on others' rights.</ListItem>
                  <ListItem>Contains viruses or harmful code.</ListItem>
                  <ListItem>Promotes illegal activities or violence.</ListItem>
                </UnorderedList>
              </Text>
            </Box>

            {/* Disclaimer of Warranties */}
            <Box>
              <Heading as="h2" size="md" mb={2}>
                5. Disclaimer of Warranties
              </Heading>
              <Text mb={4}>
                The Site is provided "as is" and "as available" without any warranties of any kind, either express or implied. <strong>We do not guarantee the accuracy, reliability, or availability of the Site</strong> and disclaim all warranties, including merchantability, fitness for a particular purpose, and non-infringement.
              </Text>
            </Box>

            {/* Limitation of Liability */}
            <Box>
              <Heading as="h2" size="md" mb={2}>
                6. Limitation of Liability
              </Heading>
              <Text mb={4}>
                In no event shall Khushwant Parihar, its directors, employees, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use or inability to use the Site, even if advised of the possibility of such damages.
              </Text>
            </Box>

            {/* Indemnification */}
            <Box>
              <Heading as="h2" size="md" mb={2}>
                7. Indemnification
              </Heading>
              <Text mb={4}>
                You agree to indemnify, defend, and hold harmless Khushwant Parihar, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including legal fees, arising out of or in any way connected with your access to or use of the Site or your violation of these Terms of Service.
              </Text>
            </Box>

            {/* Governing Law */}
            <Box>
              <Heading as="h2" size="md" mb={2}>
                8. Governing Law
              </Heading>
              <Text mb={4}>
                These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </Text>
            </Box>

            {/* Dispute Resolution */}
            <Box>
              <Heading as="h2" size="md" mb={2}>
                9. Dispute Resolution
              </Heading>
              <Text mb={4}>
                Any disputes arising out of or relating to these Terms of Service or your use of the Site shall be resolved through binding arbitration in New Delhi, India, in accordance with the rules of the Arbitration and Conciliation Act, 1996. Judgment on the arbitration award may be entered in any court having jurisdiction.
              </Text>
            </Box>

            {/* Changes to Terms of Service */}
            <Box>
              <Heading as="h2" size="md" mb={2}>
                10. Changes to Terms of Service
              </Heading>
              <Text mb={4}>
                We reserve the right to modify or replace these Terms of Service at any time. <strong>We will notify you of any changes by posting the new Terms of Service on this page.</strong> Your continued use of the Site after any such changes constitutes your acceptance of the new Terms.
              </Text>
            </Box>

            {/* Termination */}
            <Box>
              <Heading as="h2" size="md" mb={2}>
                11. Termination
              </Heading>
              <Text mb={4}>
                We may terminate or suspend your access to the Site immediately, without prior notice or liability, for any reason, including if you breach these Terms of Service.
              </Text>
            </Box>

            {/* Contact Us */}
            <Box>
              <Heading as="h2" size="md" mb={2}>
                12. Contact Us
              </Heading>
              <Text>
                If you have any questions about these Terms of Service, please contact us:
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
