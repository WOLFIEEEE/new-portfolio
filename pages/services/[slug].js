// pages/services/[slug].js

import {
  Box,
  Center,
  Divider,
  HStack,
  Heading,
  Link as ChakraLink, // Renamed to avoid confusion with "next/link"
  Spinner,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { useEffect, useState } from 'react'
import ReactGA from 'react-ga4'
import mdxPrism from 'mdx-prism'
import readingTime from 'reading-time'
import { useRouter } from 'next/router'
import Container from '../../components/Container'
import MDXComponents from '../../components/MDXComponents'
import ServiceContainer from '../../components/ProjectContainer'
import { GithubBlog } from '@rena.to/github-blog'
import { FaLink, FaUser } from 'react-icons/fa'
import NextSeoData from '../../components/NextSeoData'
import useUtterances from '../../hook/useUtterances'
import Image from 'next/image'

export default function Service({ metadata, publishedDate, source, toc }) {
  const [views, setViews] = useState('...')
  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    if (!slug) return

    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/views/${slug}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`)
        }
        return res.json()
      })
      .then((json) => setViews(json.views))
      .catch((error) => {
        console.error('Failed to fetch views:', error)
        setViews('N/A')
      })
  }, [slug])

  const [activeId, setActiveId] = useState()
  useEffect(() => {
    const handleScroll = () => {
      let currentId
      for (const heading of toc) {
        const element = document.getElementById(heading.title)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top < window.innerHeight / 2) {
            currentId = heading.title
          } else {
            break
          }
        }
      }
      setActiveId(currentId)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [toc])

  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }

  const { isCommentsLoading } = useUtterances('comments', metadata.title)

  return (
    <>
      <NextSeoData
        slug={slug}
        metadata={metadata}
        publishedDate={publishedDate}
      />

      {/** Added pt={8} for nice padding on top */}
      <Container pt={20}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'flex-start', md: 'center' }}
          spacing={6}
          mt="73px"
        >
          <Box
            flex="1"
            maxW={{ base: '100%', md: '200px' }} // smaller image
            border="1px"
            borderColor={{ base: '#333', md: 'borderColor' }}
            borderRadius="10px"
            overflow="hidden"
          >
            <Image
              width={200}
              height={140}
              objectFit="cover"
              alt=""
              priority
              src={metadata.frontmatter.image}
              blurDataURL={metadata.frontmatter.image}
            />
          </Box>

          <Stack flex="2" spacing={3}>
            <Heading
              as="h1"
              color="displayColor"
              fontSize={['2xl', '2xl', '4xl', '4xl']}
            >
              {metadata.title}
            </Heading>

            <Text color="textPrimary" fontSize={['sm', 'sm', 'md', 'md']}>
              {metadata.frontmatter.summary}
            </Text>

            <HStack spacing={4}>
              <Text color="textPrimary" fontSize="sm">
                {views} views
              </Text>
              <HStack>
                <FaUser fill="#D1D5DB" fontSize="14px" />
                <Text color="#D1D5DB" fontSize="sm">
                  {metadata.frontmatter.category}
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Stack>

        <Divider h="0.5px" my={6} bg="textSecondary" />

        {metadata.frontmatter.deployLink && (
          <HStack mb={4}>
            <FaLink fontSize="18px" />
            <ChakraLink
              fontSize="sm"
              href={metadata.frontmatter.deployLink}
              isExternal
              onClick={() => handleClick(`${metadata.title}_livesite`)}
            >
              Live Site
            </ChakraLink>
          </HStack>
        )}

        <HStack alignItems="start" pt="23px" spacing="36px">
          <Stack w={{ base: '100%', md: '50rem' }}>
            <ServiceContainer>
              <MDXRemote {...source} components={MDXComponents} />
            </ServiceContainer>
          </Stack>

          <Stack
            pos="sticky"
            top="6rem"
            display={{ base: 'none', md: 'flex' }}
            w="250px"
            h="500px"
          >
            <Text color="displayColor" fontSize="xl" fontWeight="semibold">
              Table of Contents
            </Text>
            {toc.map((heading) => (
              <Box key={heading.title} pl={`${heading.level * 1}rem`}>
                <Text
                  color={
                    heading.title === activeId ? 'activeColor' : 'textSecondary'
                  }
                  fontSize={['sm', 'sm', 'md', 'md']}
                  fontWeight={
                    heading.title === activeId ? 'semibold' : 'normal'
                  }
                >
                  <a href={`#${heading.title}`}>{heading.title}</a>
                </Text>
              </Box>
            ))}
          </Stack>
        </HStack>

        {/** Contact section below the content */}
        <Stack
          spacing={3}
          p={4}
          my={6}
          borderWidth="1px"
          borderRadius="md"
          borderColor="borderColor"
        >
          <Text fontSize="md" fontWeight="semibold">
            Interested in discussing further?
          </Text>
          <Text fontSize="sm" color="textSecondary">
            Please contact me if you want to discuss this service or have any
            questions. I’d be happy to help!
          </Text>
          <Box>
            <Button
              colorScheme="teal"
              onClick={() => {
                handleClick(`${metadata.title}_contact_me`)
                router.push('/contact') // Internal navigation without refresh
              }}
            >
              Contact Me
            </Button>
          </Box>
        </Stack>
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const blog = new GithubBlog({
    repo: 'WOLFIEEEE/new-portfolio',
    token: process.env.GITHUB_TOKEN,
  })

  const data = await blog.getPosts({
    query: {
      author: 'WOLFIEEEE',
      type: 'service',
      state: 'published',
    },
    pager: { limit: 100, offset: 0 },
  })

  return {
    paths: data.edges.map(({ post }) => ({
      params: { slug: post.frontmatter.slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const blog = new GithubBlog({
    repo: 'WOLFIEEEE/new-portfolio',
    token: process.env.GITHUB_TOKEN,
  })

  const data = await blog.getPost({
    query: {
      author: 'WOLFIEEEE',
      search: params.slug,
      type: 'service',
    },
  })

  const service = data.post
  const source = service.body
  service.readingTime = readingTime(source).text

  const mdxSource = await serialize(source, {
    mdxOptions: {
      rehypePlugins: [mdxPrism],
    },
  })

  const headings = source.match(/#{2,4} .+/g) || []
  const toc = headings.map((heading) => {
    const level = heading.match(/#/g).length - 2
    const title = heading.replace(/#{2,4} /, '').trim()
    return { title, level }
  })

  return {
    props: {
      metadata: service,
      publishedDate: new Date(service.frontmatter.date).toISOString(),
      source: mdxSource,
      toc: toc,
    },
    revalidate: 30,
  }
}