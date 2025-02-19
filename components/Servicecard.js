// components/ServiceCard.jsx

import {
  Box,
  Button,
  Center,
  Divider,
  Link,
  ScaleFade,
  Stack,
  Text,
  Flex,
  VStack,
  HStack,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import ReactGA from 'react-ga4';
import {
  FaExternalLinkAlt,
  FaCheckCircle,
  FaReact,
  FaPython,
  FaJs,
  FaSass,
  FaDatabase,
  FaLaravel,
  FaBootstrap,
  FaPepperHot,
  FaCode,
} from 'react-icons/fa';
import { SiChakraui, SiNextdotjs } from 'react-icons/si';
import { useRouter } from 'next/router';
import Image from 'next/image';
import useMediaQuery from '../hook/useMediaQuery';
import TagItem from './TagItem';

export default function ServiceCard({ imageURL, title, slug, desc, tag = [], subServices = [] }) {
  // Function to map tags to color schemes and icons
  const getTag = (tag) => {
    let values = [];
    switch (tag) {
      case 'React':
        values = ['blue', FaReact];
        break;
      case 'Python':
        values = ['orange', FaPython];
        break;
      case 'Javascript':
        values = ['yellow', FaJs];
        break;
      case 'Sass':
        values = ['pink', FaSass];
        break;
      case 'Flask':
        values = ['green', FaPepperHot];
        break;
      case 'Laravel':
        values = ['red', FaLaravel];
        break;
      case 'Bootstrap':
        values = ['purple', FaBootstrap];
        break;
      case 'SQL':
        values = ['teal', FaDatabase];
        break;
      case 'Next.js':
        values = ['gray', SiNextdotjs];
        break;
      case 'Chakra UI':
        values = ['cyan', SiChakraui];
        break;
      default:
        values = ['gray', FaCode];
    }
    return values;
  };

  const isLargerThan800 = useMediaQuery(800);
  const router = useRouter();

  // Generate Tag components
  const Tags =
    Array.isArray(tag) && tag.length > 0
      ? tag.map((item) => (
          <TagItem key={item} label={item} size={isLargerThan800 ? 'md' : 'sm'} />
        ))
      : null;

  // Handle card click with analytics
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    });
    router.push(`/services/${slug}`);
  };

  // Define fixed background color and adjust other colors for visibility
  const bgColor = 'black';
  const borderColor = 'green.700';
  const textColor = 'white';
  const secondaryTextColor = 'gray.400';

  return (
    <Box
      width="100%"
      bg={bgColor}
      border="1px"
      borderColor={borderColor}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      _hover={{ boxShadow: '2xl', transform: 'scale(1.02)', transition: '0.3s' }}
      cursor="pointer"
      onClick={() => handleClick(`service_${title.replace('@', '-at')}`)}
    >
      <ScaleFade initialScale={0.9} in={true}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="stretch"
          justify="space-between"
        >
          {/* Image Section with fill */}
          <Box
            flex={{ base: '0 0 auto', md: '0 0 40%' }}
            position="relative"
            minH={{ base: '200px', md: '250px' }} // ensures there's some height
          >
            <Image
              src={imageURL}
              alt={title}
              fill         // or layout="fill" if on older Next.js
              style={{ objectFit: 'cover' }}
              // unoptimized // If you want to disable Next.js image optimization
            />
          </Box>

          {/* Content Section */}
          <Stack
            p={6}
            spacing={4}
            flex={{ base: '0 0 auto', md: '1' }}
            align="flex-start"
          >
            <Stack direction="row" align="center" justify="space-between" width="100%">
              <Text
                color={textColor}
                fontFamily="Ubuntu"
                fontSize="2xl"
                fontWeight="bold"
              >
                {title}
              </Text>
              <Link
                color="teal.400"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick(`service_${title.replace('@', '-at')}`);
                }}
              >
                <FaExternalLinkAlt aria-label="service link" size={20} />
              </Link>
            </Stack>

            {Tags && (
              <Wrap spacing={2}>
                {Tags}
              </Wrap>
            )}

            <Divider borderColor="gray.700" />

            <Text color={secondaryTextColor} fontSize="md">
              {desc}
            </Text>

            {Array.isArray(subServices) && subServices.length > 0 && (
              <Box width="100%">
                <Text color={textColor} fontSize="lg" fontWeight="semibold" mb={2}>
                  Sub Services:
                </Text>
                <VStack align="start" spacing={1}>
                  {subServices.map((sub, index) => (
                    <HStack key={index} spacing={2}>
                      <FaCheckCircle color="teal.400" />
                      <Text color={secondaryTextColor} fontSize="md">
                        {sub}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </Box>
            )}

            <Button
              alignSelf="flex-start"
              colorScheme="teal"
              variant="outline"
              onClick={(e) => {
                e.stopPropagation();
                handleClick(`service_${title.replace('@', '-at')}`);
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