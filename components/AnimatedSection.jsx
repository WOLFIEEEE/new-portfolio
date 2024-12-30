// components/AnimatedSection.jsx

import { Box, Text, VStack, Divider, Code, Center } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

// Dynamically import the Player component from Lottie with SSR disabled
const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => mod.Player), {
  ssr: false,
});

const AnimatedSection = () => {
  return (
    <Box py={10} bg="gray.800" borderRadius="lg" overflow="hidden" px={6}>
      <VStack spacing={8}>
        {/* Centered Image and Heading */}
        <Center flexDirection="column">
          <Player
            autoplay
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_jcikwtux.json"
            style={{ height: '250px', width: '250px' }}
          />
          <Text color="white" fontSize="2xl" fontWeight="bold" textAlign="center" mt={4}>
            What ChatGPT Thinks About Me
          </Text>
        </Center>

        {/* AI-Generated Content */}
        <VStack spacing={6} align="start" maxW="800px" px={4}>
          {/* Introduction */}
          <Text color="white" fontSize="xl" fontWeight="bold">
            Meet Khushwant – Your Accessibility and Development Expert
          </Text>
          <Text color="gray.400" fontSize="sm">
            Welcome! I’m Khushwant, a seasoned WordPress developer and accessibility engineer with 
            <strong> 2+ years of experience in WordPress development </strong> and a 
            <strong> DHS Trusted Tester certification in accessibility</strong>. I specialize in 
            creating accessible, user-friendly websites and plugins that comply with WCAG standards, 
            ensuring inclusivity for all users.
          </Text>

          {/* What I Offer */}
          <Text color="white" fontSize="lg" fontWeight="bold">What I Offer:</Text>
          <Text color="gray.400" fontSize="sm">• Custom WordPress Plugin Development: Tailored functionality to enhance your website’s performance.</Text>
          <Text color="gray.400" fontSize="sm">• WordPress Theme Customization: Transforming themes to reflect your brand’s unique identity.</Text>
          <Text color="gray.400" fontSize="sm">• Accessibility Remediation: Ensuring your website meets compliance standards and provides an inclusive experience for all.</Text>
          <Text color="gray.400" fontSize="sm">• Comprehensive Accessibility Audits: Identifying and resolving barriers in your digital platforms.</Text>
          <Text color="gray.400" fontSize="sm">• UI/UX Design with Accessibility Focus: Building intuitive and accessible designs from scratch.</Text>
          <Text color="gray.400" fontSize="sm">• Transcript Hosting Solutions: SaaS platforms for managing podcast video transcripts with editable, shareable options.</Text>

          <Divider borderColor="gray.600" />

          {/* Why Choose Me */}
          <Text color="white" fontSize="lg" fontWeight="bold">Why Choose Me?</Text>
          <Text color="gray.400" fontSize="sm">• Proven Track Record: I’ve worked with a US FinTech giant to test and remediate multiple financial applications for accessibility compliance.</Text>
          <Text color="gray.400" fontSize="sm">• Custom Solutions: Whether you’re looking for a WordPress plugin or a centralized accessibility dashboard, I deliver bespoke solutions tailored to your needs.</Text>
          <Text color="gray.400" fontSize="sm">• Time-Saving Innovations: My automation efforts saved over 432 hours annually, showcasing efficiency and a focus on long-term value.</Text>
          <Text color="gray.400" fontSize="sm">• Trusted Expertise: I’ve conducted training sessions, built wikis, and created white papers to empower teams with the latest accessibility standards.</Text>

          <Divider borderColor="gray.600" />

          {/* My Approach */}
          <Text color="white" fontSize="lg" fontWeight="bold">My Approach</Text>
          <Text color="gray.400" fontSize="sm">
            I prioritize creating visually stunning and fully accessible web solutions, ensuring seamless 
            user experiences across all devices. Whether you’re a business seeking to improve your digital 
            presence or need expert guidance on accessibility, I’m here to help you succeed.
          </Text>

          <Divider borderColor="gray.600" />

          {/* Prompt Used */}
          <Text color="white" fontSize="lg" fontWeight="bold">Prompt Used:</Text>
          <Box
            bg="gray.700"
            p={4}
            borderRadius="md"
            border="1px solid"
            borderColor="gray.600"
            w="full"
            wordBreak="break-word"
          >
            <Code colorScheme="yellow" fontSize="sm" whiteSpace="pre-wrap">
              Based on all your Previous Knowledge on me, how would you introduce myself to a 
              potential client or a user viewing my website?
            </Code>
          </Box>
        </VStack>
      </VStack>
    </Box>
  );
};

export default AnimatedSection;