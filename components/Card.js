// ../../components/Card.jsx

import {
  Box,
  Divider,
  Link,
  ScaleFade,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import ReactGA from 'react-ga4'
import {
  FaBootstrap,
  FaCode,
  FaDatabase,
  FaExternalLinkAlt,
  FaJs,
  FaLaravel,
  FaPepperHot,
  FaPython,
  FaReact,
  FaSass,
} from 'react-icons/fa'
import { SiChakraui, SiNextdotjs } from 'react-icons/si'
import useMediaQuery from '../hook/useMediaQuery'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Cards({ imageURL, title, slug, desc, tag = [] }) {  // Defaulting tag to empty array
  const getTag = (tag) => {
    let values = []
    switch (tag) {
      case 'React':
        values = ['blue', FaReact]
        break
      case 'Python':
        values = ['orange', FaPython]
        break
      case 'Javascript':
        values = ['yellow', FaJs]
        break
      case 'Sass':
        values = ['pink', FaSass]
        break
      case 'Flask':
        values = ['green', FaPepperHot]
        break
      case 'Laravel':
        values = ['red', FaLaravel]
        break
      case 'Bootstrap':
        values = ['purple', FaBootstrap]
        break
      case 'SQL':
        values = ['blue', FaDatabase]
        break
      case 'Next.js':
        values = ['gray', SiNextdotjs]
        break
      case 'Chakra UI':
        values = ['teal', SiChakraui]
        break
      default:
        values = ['gray', FaCode]
    }
    return values
  }

  const isLargerThan800 = useMediaQuery(800)
  const router = useRouter()

  // Safely handle tags by ensuring it is an array
  const Tags = Array.isArray(tag) && tag.length > 0 ? tag.map((item) => (
    <WrapItem key={item}>
      <Tag
        colorScheme={getTag(item)[0]}
        size={isLargerThan800 ? 'md' : 'sm'}
      >
        <TagLeftIcon as={getTag(item)[1]} />
        <TagLabel>{item}</TagLabel>
      </Tag>
    </WrapItem>
  )) : null  // If there are no tags, Tags will be null

  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
    router.push(`/projects/${slug}`)
  }

  return (
    <Box
      minH="320px"
      // Removed maxH to allow the card to expand based on content
      bg="secondary"
      border="1px"
      borderColor={{ base: '#333', md: 'borderColor' }}
      borderRadius="10px"
      overflow="hidden"  // Ensures content doesn't spill out
      _hover={{ boxShadow: 'lg' }}  // Optional: Add hover effect
    >
      <Link href={`/projects/${slug}`} _hover={{ textDecoration: 'none' }}>
        <ScaleFade transition={{ duration: 1 }} in={true}>
          {/* Image Container */}
          <Box position="relative" width="100%" height="250px">  {/* Fixed height for consistency */}
            <Image
              src={imageURL}
              alt={title}
              layout="fill"  // Makes the image fill its parent container
              objectFit="cover"  // Ensures the image covers the container without distortion
              priority={false}  // Adjust based on your needs
            />
          </Box>
          
          {/* Content */}
          <Stack px={4} py={2} spacing={3}>
            {/* Title and External Link */}
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Text color="displayColor" fontFamily="Ubuntu" fontSize="2xl" fontWeight="bold">
                {title}
              </Text>
              <Link
                color="white"
                href={`/projects/${slug}`}
                onClick={(e) => {
                  e.preventDefault()  // Prevent default link behavior
                  handleClick(`project_${title.replace('@', '-at')}`)
                }}
              >
                <FaExternalLinkAlt aria-label="project link" size={20} />
              </Link>
            </Stack>

            {/* Tags */}
            {Tags && (
              <Wrap spacing={2}>
                {Tags}
              </Wrap>
            )}

            {/* Divider */}
            <Divider />

            {/* Description */}
            <Text color="textSecondary" fontSize={['sm', 'md']} noOfLines={4}>  {/* Limit to 4 lines */}
              {desc}
            </Text>
          </Stack>
        </ScaleFade>
      </Link>
    </Box>
  )
}