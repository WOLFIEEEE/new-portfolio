// components/CertificationCard.jsx

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
  } from '@chakra-ui/react';
  import ReactGA from 'react-ga4';
  import { FaExternalLinkAlt } from 'react-icons/fa';
  import { useRouter } from 'next/router';
  import Image from 'next/image';
  import useMediaQuery from '../hook/useMediaQuery';
  
  export default function CertificationCard({
    certificationName,
    issuingOrganization,
    issueDate,
    certificationURL = '',
    certificationImageURL = '',
  }) {
    const isLargerThan800 = useMediaQuery(800);
    const router = useRouter();
  
    // Handle card click with analytics
    const handleClick = (event) => {
      ReactGA.event({
        category: 'click',
        action: event,
      });
      if (certificationURL) {
        window.open(certificationURL, '_blank');
      } else {
        router.push(`/certifications/${certificationName.toLowerCase().replace(/\s+/g, '-')}`);
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
        onClick={() => handleClick(`certification_${certificationName.replace('@', '-at')}`)}
      >
        <ScaleFade initialScale={0.9} in={true}>
          <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
            {/* Certification Image Section */}
            {certificationImageURL && (
              <Box flexShrink={0} width={{ base: '100%', md: '40%' }}>
                <Image
                  width={800}
                  height={400}
                  layout="responsive"
                  objectFit="contain"
                  alt={certificationName}
                  src={certificationImageURL}
                />
              </Box>
            )}
  
            {/* Content Section */}
            <Stack
              p={6}
              spacing={4}
              width={certificationImageURL ? { base: '100%', md: '60%' } : '100%'}
              align="flex-start"
            >
              <Stack direction="row" align="center" justify="space-between" width="100%">
                <Text color={textColor} fontFamily="Ubuntu" fontSize="2xl" fontWeight="bold">
                  {certificationName}
                </Text>
                {certificationURL && (
                  <Link
                    color="teal.400"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering the card's onClick
                      handleClick(`certification_${certificationName.replace('@', '-at')}`);
                    }}
                  >
                    <FaExternalLinkAlt aria-label="certification link" size={20} />
                  </Link>
                )}
              </Stack>
  
              {/* Issuing Organization */}
              <Text color={secondaryTextColor} fontSize="sm">
                Issued by {issuingOrganization}
              </Text>
  
              {/* Issue Date */}
              <Text color={secondaryTextColor} fontSize="sm">
                Issued on {issueDate}
              </Text>
  
              {/* Learn More Button */}
              <Button
                alignSelf="flex-start"
                colorScheme="teal"
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick(`certification_${certificationName.replace('@', '-at')}`);
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
  