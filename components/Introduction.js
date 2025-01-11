import {
  Link,
  Text,
  Stack,
  Heading,
  Box,
  Button,
  SlideFade,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import useMediaQuery from '../hook/useMediaQuery'
import ReactGA from 'react-ga4'

export default function Introduction({ introduction }) {
  const isLargerThan800 = useMediaQuery(800)

  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }

  // URL for the resume download
  const resumeDownloadUrl = '/Khushwant\'s Resume.pdf';

  // Determine the direction of the button stack based on screen size
  const stackDirection = useBreakpointValue({ base: 'column', md: 'row' })

  // Determine button size based on screen size
  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' })

  return (
    <Stack
      alignItems="flex-start"
      justifyContent="flex-start"
      w="100%"
      spacing={{ base: 8, md: 10 }}
    >
      <SlideFade
        direction="top"
        transition={{ enter: { duration: 0.4, delay: 0.7 } }}
        in={true}
      >
        <Box pos="relative">
          <Image
            pos="absolute"
            zIndex={0}
            top={{ base: '0', md: '-15' }}
            left={{ base: '-4', md: '-10' }}
            w={{ base: '70px', md: '150px' }}
            alt=""
            filter="invert(0.1)"
            src="https://svgsilh.com/svg/26432.svg"
          />
          <Text
            pos="relative"
            zIndex={1}
            color="button1"
            fontSize="display2"
            fontWeight="medium"
          >
            Hey there!, I'm-
          </Text>
        </Box>
        <Heading
          pos="relative"
          zIndex={1}
          color="displayColor"
          fontSize="display"
          lineHeight={'95%'}
          letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
        >
          Khushwant.
        </Heading>
      </SlideFade>

      <SlideFade
        direction="top"
        transition={{ enter: { duration: 0.4, delay: 0.8 } }}
        in={true}
      >
        <Heading
          color="textSecondary"
          fontSize="display2"
          fontWeight="medium"
          letterSpacing="-1.6px"
          whiteSpace="pre-wrap"
        >
          <Box as="span" color="displayColor">
            Accessibility Engineer.
          </Box>{' '}
          Making the world more accessible{' '}
          {isLargerThan800
            ? 'one \nweb solution at a time.'
            : 'one web solution at a time.'}
        </Heading>
      </SlideFade>

      <SlideFade
        direction="top"
        transition={{ enter: { duration: 0.4, delay: 0.9 } }}
        in={true}
      >
        <Text color="textSecondary" fontSize="display3">
          {introduction[0].fields.emoji} {introduction[0].fields.description}
          <br />
          <Stack direction="row" spacing={1} wrap="wrap" alignItems="center">
            <Box>{introduction[1].fields.emoji}</Box>
            <Box>
              {introduction[1].fields.description}{' '}
              {introduction[1].fields.companyUrl ? (
                <Link
                  href={introduction[1].fields.companyUrl}
                  isExternal
                  onClick={() => handleClick('Introduction_companyUrl')}
                  rel="noreferrer"
                >
                  {introduction[1].fields.company}
                </Link>
              ) : (
                <Box as="span" color="button1">
                  {introduction[1].fields.company}
                </Box>
              )}
            </Box>
          </Stack>
        </Text>
      </SlideFade>

      <SlideFade
        direction="top"
        transition={{ enter: { duration: 0.4, delay: 1.0 } }}
        in={true}
      >
        <Stack
          direction={stackDirection}
          spacing={4}
          alignItems="center"
          w="100%"
        >
          <Link href={resumeDownloadUrl} isExternal w="100%">
            <Button
              as="a" // Ensures the button behaves as a link
              pos="static"
              color="white"
              leftIcon={<FaDownload color="#3CCF91" />}
              onClick={() => handleClick('introduction_download_resume')}
              size={buttonSize}
              download // Adds the download attribute
              w={{ base: '100%', md: 'auto' }} // Full width on mobile
            >
              Download Resume
            </Button>
          </Link>
          <Link href="https://github.com/WOLFIEEEE" isExternal w="100%">
            <Button
              pos="static"
              color="white"
              leftIcon={<FaGithub color="#3CCF91" />}
              onClick={() => handleClick('introduction_github')}
              size={buttonSize}
              w={{ base: '100%', md: 'auto' }} // Full width on mobile
            >
              GitHub
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/khushwantparihar" isExternal w="100%">
            <Button
              pos="static"
              color="white"
              leftIcon={<FaLinkedin color="#3CCF91" />}
              onClick={() => handleClick('introduction_linkedin')}
              size={buttonSize}
              w={{ base: '100%', md: 'auto' }} // Full width on mobile
            >
              LinkedIn
            </Button>
          </Link>
          <Link href="mailto:kgpkhushwant1@gmail.com" isExternal w="100%">
            <Button
              pos="static"
              color="white"
              transition="0.3s"
              leftIcon={<FaEnvelope fill="#3CCF91" />}
              onClick={() => handleClick('introduction_email')}
              size={buttonSize}
              w={{ base: '100%', md: 'auto' }} // Full width on mobile
            >
              Email
            </Button>
          </Link>
        </Stack>

        {/* Note Below the Resume Button */}
        <Text
          mt={2}
          color="gray.500"
          fontSize="sm"
          textAlign={isLargerThan800 ? 'left' : 'center'}
          maxW="400px"
        >
          Please note: This resume does not include my freelance experience.
        </Text>
      </SlideFade>
    </Stack>
  )
}