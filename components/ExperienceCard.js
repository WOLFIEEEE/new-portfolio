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
import TagItem from './TagItem';

export default function ExperienceCard({
  imageURL,
  title,
  company,
  duration,
  responsibilities = [],
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
      router.push(`/experience/${title.toLowerCase().replace(/\s+/g, '-')}`);
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
      _hover={{ boxShadow: '2xl', transform: 'scale(1.02)', transition: '0.3s ease-in-out' }}
      cursor="pointer"
      onClick={() => handleClick(`experience_${title.replace('@', '-at')}`)}
      role="button"
      aria-label={`Experience card for ${title} at ${company}`}
    >
      <ScaleFade initialScale={0.9} in={true}>
        <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
          {/* Image Section */}
          <Box flexShrink={0} width={{ base: '100%', md: '40%' }}>
            <Image
              width={800}
              height={400}
              layout="responsive"
              objectFit="cover"
              alt={`${title} at ${company}`}
              src={imageURL}
              loading="lazy"
            />
          </Box>

          {/* Content Section */}
          <Stack p={6} spacing={4} width={{ base: '100%', md: '60%' }} align="flex-start">
            <Stack direction="row" align="center" justify="space-between" width="100%">
              <Text color={textColor} fontFamily="Ubuntu" fontSize="2xl" fontWeight="bold">
                {title} @ {company}
              </Text>
              {projectURL && (
                <Link
                  color="teal.400"
                  aria-label={`Link to project for ${title} at ${company}`}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the card's onClick
                    handleClick(`experience_${title.replace('@', '-at')}`);
                  }}
                >
                  <FaExternalLinkAlt aria-hidden="true" size={20} />
                </Link>
              )}
            </Stack>

            {/* Duration */}
            <Text color={secondaryTextColor} fontSize="sm">
              {duration}
            </Text>

            {/* Tags */}
            {Tags && (
              <Stack direction="row" spacing={2}>
                {Tags}
              </Stack>
            )}

            <Divider borderColor="gray.700" />

            {/* Responsibilities */}
            {Array.isArray(responsibilities) && responsibilities.length > 0 && (
              <Box width="100%">
                <Text color={textColor} fontSize="lg" fontWeight="semibold" mb={2}>
                  Responsibilities:
                </Text>
                <VStack align="start" spacing={1}>
                  {responsibilities.map((resp, index) => (
                    <HStack key={index} spacing={2}>
                      <FaCheckCircle color="teal.400" aria-hidden="true" />
                      <Text color={secondaryTextColor} fontSize="md">
                        {resp}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </Box>
            )}

            {/* Learn More Button */}
            <Button
              alignSelf="flex-start"
              colorScheme="teal"
              variant="outline"
              aria-label={`Learn more about ${title} at ${company}`}
              onClick={(e) => {
                e.stopPropagation();
                handleClick(`experience_${title.replace('@', '-at')}`);
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
