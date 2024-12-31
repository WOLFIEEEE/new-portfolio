import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Image,
  Flex,
  Box,
  chakra,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Button,
} from '@chakra-ui/react'

import useMediaQuery from '../hook/useMediaQuery'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import ReactGA from 'react-ga4'

export default function AboutMe() {
  const isLargerThan800 = useMediaQuery(800)
  const handleHover = (event) => {
    ReactGA.event({
      category: 'hover',
      action: event,
    })
  }
  const MoreInfo = ({ text, content }) => {
    return (
      <>
        {' '}
        {isLargerThan800 ? (
          <Popover isLazy placement="right" trigger="hover">
            <PopoverTrigger>
              <chakra.span
                color="button1"
                cursor="help"
                onMouseOver={() => handleHover(`about_${text}`)}
              >
                {text}
              </chakra.span>
            </PopoverTrigger>
            <PopoverContent color="white" bg="secondary" borderColor="button1">
              <PopoverArrow bg="button1" />
              <PopoverBody color="textPrimary" fontSize="sm">
                {content}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) : (
          <Text as="span" color="button1">
            {text}
          </Text>
        )}{' '}
      </>
    )
  }

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <SlideUpWhenVisible>
        <Stack spacing={4}>
  <Heading fontFamily="Ubuntu" fontSize="xl">
    ⚡ About Me
  </Heading>
  <Text
    color="textSecondary"
    fontSize={{ base: '12px', md: '14px' }} // Adjusted the font size to be smaller
    whiteSpace="pre-line"
  >
    Hey! I'm Khushwant, a passionate accessibility engineer and developer who has been immersed in technology from an early age. My journey began with experimenting with simple coding projects and has evolved into a fulfilling career focused on building accessible web solutions.
    <br />
    <br /> I initially explored coding through
    <MoreInfo
      content="I enjoyed creating basic websites and experimenting with various tools to understand how things work behind the scenes."
      text="self-learning"
    />
    back in the day, which led me to deeper explorations of development. Today, I specialize in accessibility, programming in various languages, and have had the opportunity to work in
    <MoreInfo
      content={
        <Image
          w={306}
          h={102}
          alt="FIS Global Work Experiences"
          src="https://imagizer.imageshack.com/img924/3963/CpjxyC.png"
        />
      }
      text="FIS Global"
    />
    and
    <MoreInfo
      content={
        <Image
          w={306}
          h={102}
          alt="Kalyani Technologies Work Experiences"
          src="https://imagizer.imageshack.com/img922/8692/9NJ1rc.png"
        />
      }
      text="Kalyani Technologies ( Bharat Forge)"
    />.
    <br />
    <br />
    I'm passionate about ensuring websites are accessible to all users, and I focus on
    <MoreInfo
      content="I help businesses comply with accessibility standards like WCAG 2.1 through thorough testing and remediation."
      text="accessibility testing and remediation,"
    />
    as well as developing custom
    <MoreInfo
      content="From building custom plugins to themes, I create solutions that meet client needs while being user-friendly and fully accessible."
      text="WordPress solutions,"
    />
    and working with
    <MoreInfo
      content="Creating SEO-optimized content and implementing modern technologies in sites such as Gatsby."
      text="modern web development frameworks."
    />
    <br />
    <br />
    When I'm not working, you can find me exploring new technologies, catching up on some coding challenges, or enjoying a game of Badminton with friends. 🏸
    <br />
    <br />
    Oh, and if you notice a cat in my profile picture, that's
    <MoreInfo
      content={
        <Image
          w={306}
          h={306}
          alt="Image of Kashi"
          src="https://imagizer.imageshack.com/img922/6701/buRceE.jpg"
        />
      }
      text="Kashi"
    />. <br /> My feline friend!
  </Text>

  {/* Added a nice interactive button */}
  <Button
    colorScheme="teal"
    variant="solid"
    onClick={() => window.location.href = "/experience"} // Redirect to Experience page
  >
    Know More About Me
  </Button>
</Stack>

        </SlideUpWhenVisible>
        <SlideUpWhenVisible>
          <Flex align="center" justify="center">
            <Box
              pos="relative"
              maxW={{ base: '300px', lg: '350px' }}
              maxH={{ base: '300px', lg: '350px' }}
            >
              <Image
                pos="absolute"
                zIndex={3}
                top="0px"
                right={{ base: '-32px', lg: '-64px' }}
                w={{ base: '100px', lg: '150px' }}
                alt=""
                filter="invert(0.1)"
                src="https://svgsilh.com/svg/26432.svg"
              />
              <Image
                w={{ base: '300px', lg: '350px' }}
                h={{ base: '300px', lg: '350px' }}
                objectFit="cover"
                borderRadius="50%"
                alt="Khushwant Parihar"
                src="https://i.imgur.com/n9Htt23.jpg"
              />
            </Box>
          </Flex>
        </SlideUpWhenVisible>
      </SimpleGrid>
    </>
  )
}
