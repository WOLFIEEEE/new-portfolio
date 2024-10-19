// components/ProjectCard.jsx

import {
    Box,
    Button,
    Center,
    Divider,
    Link,
    ScaleFade,
    Stack,
    Tag,
    TagLabel,
    TagLeftIcon,
    Text,
    Flex,
    VStack,
    HStack,
  } from '@chakra-ui/react';
  import ReactGA from 'react-ga4';
  import { FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';
  import { useRouter } from 'next/router';
  import Image from 'next/image';
  import useMediaQuery from '../hook/useMediaQuery';
  import TagItem from './TagItem'; // Ensure you have the TagItem component as per previous instructions
  
  export default function ProjectCard({
    imageURL,
    projectName,
    projectDescription,
    technologies = [],
    projectURL = '',
  }) {
    const isLargerThan800 = useMediaQuery(800);
    const router = useRouter();
  
    // Generate Tag components
    const Tags =
      Array.isArray(technologies) && technologies.length > 0
        ? technologies.map((item) => <TagItem key={item} label={item} size={isLargerThan800 ? 'md' : 'sm'} />)
        : null;
  
    // Handle card click with analytics
    const handleClick = (event) => {
      ReactGA.event({
        category: 'click',
        action: event,
      });
      if (projectURL) {
        window.open(projectURL, '_blank');
      } else {
        router.push(`/projects/${projectName.toLowerCase().replace(/\s+/g, '-')}`);
      }
    };
  
    // Define fixed background color and adjust other colors for visibility
    const bgColor = 'black'; // Fixed black background
    const borderColor = 'gray.700'; // Consistent border color
    const textColor = 'white'; // White text for visibility
    const secondaryTextColor = 'gray.400'; // Secondary text color
  
    return (
      <Box
        width="100%" // Ensures the card takes full width of its container
        bg={bgColor}
        border="1px"
        borderColor={borderColor}
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        _hover={{ boxShadow: '2xl', transform: 'scale(1.02)', transition: '0.3s' }}
        cursor="pointer"
        onClick={() => handleClick(`project_${projectName.replace('@', '-at')}`)}
      >
        <ScaleFade initialScale={0.9} in={true}>
          <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
            {/* Image Section */}
            <Box flexShrink={0} width={{ base: '100%', md: '40%' }}>
              <Image width={800} height={400} layout="responsive" objectFit="cover" alt={projectName} src={imageURL} />
            </Box>
  
            {/* Content Section */}
            <Stack p={6} spacing={4} width={{ base: '100%', md: '60%' }} align="flex-start">
              <Stack direction="row" align="center" justify="space-between" width="100%">
                <Text color={textColor} fontFamily="Ubuntu" fontSize="2xl" fontWeight="bold">
                  {projectName}
                </Text>
                <Link
                  color="teal.400"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the card's onClick
                    handleClick(`project_${projectName.replace('@', '-at')}`);
                  }}
                >
                  <FaExternalLinkAlt aria-label="project link" size={20} />
                </Link>
              </Stack>
  
              {/* Tags */}
              {Tags && (
                <Stack direction="row" spacing={2}>
                  {Tags}
                </Stack>
              )}
  
              <Divider borderColor="gray.700" />
  
              {/* Description */}
              <Text color={secondaryTextColor} fontSize="md">
                {projectDescription}
              </Text>
  
              {/* Learn More Button */}
              <Button
                alignSelf="flex-start"
                colorScheme="teal"
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick(`project_${projectName.replace('@', '-at')}`);
                }}
              >
                Learn More
              </Button>
            </Stack>
          </Flex>
        </ScaleFade>
      </Box>
    );
  }
  