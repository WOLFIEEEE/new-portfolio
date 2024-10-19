// components/AnimatedSection.jsx

import { Box, Text, VStack } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

// Dynamically import the Player component from Lottie with SSR disabled
const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => mod.Player), {
  ssr: false,
});

const AnimatedSection = () => {
  return (
    <Box py={10} bg="gray.800" borderRadius="lg" overflow="hidden">
      <VStack spacing={6}>
        {/* Lottie Animation */}
        <Player
          autoplay
          loop
          src="https://assets10.lottiefiles.com/packages/lf20_jcikwtux.json" // Example animation URL
          style={{ height: '300px', width: '300px' }}
        >
          {/* You can also use your own Lottie JSON file */}
        </Player>

        {/* Section Title */}
        <Text color="white" fontSize="3xl" fontWeight="bold">
          What ChatGPT Thinks About Me
        </Text>

        {/* AI-Generated Description */}
        <Text color="gray.400" fontSize="lg" maxW="800px" textAlign="center">
          Based on the impressive portfolio and the diverse range of projects undertaken, ChatGPT recognizes you as a highly skilled and versatile developer. Your expertise spans across various technologies and frameworks, showcasing a commitment to continuous learning and adaptability. Your projects demonstrate not only technical proficiency but also a keen eye for design and user experience. ChatGPT is confident that you possess the qualities of a dedicated professional, capable of delivering exceptional results in any endeavor you pursue.
        </Text>
      </VStack>
    </Box>
  );
};

export default AnimatedSection;
