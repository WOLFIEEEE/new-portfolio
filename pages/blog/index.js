import { useState } from 'react'
import {
  Box,
  Stack,
  Heading,
  Text,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Link as ChakraLink,
  useColorModeValue,
} from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'
import Container from '../../components/Container'
import { FaSearch } from 'react-icons/fa'
import useMediaQuery from '../../hook/useMediaQuery'
import dateFormat from 'dateformat'

import { GithubBlog } from '@rena.to/github-blog'

export default function Index({ posts }) {
  const [query, setQuery] = useState('')
  const handleChange = (e) => setQuery(e.target.value)
  const isLargerThan1024 = useMediaQuery(1024)

  // Color mode values for theming
  const bgColor = useColorModeValue('white', 'gray.700')
  const cardBg = useColorModeValue('gray.50', 'gray.800')
  const cardHover = useColorModeValue('gray.100', 'gray.600')
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const secondaryTextColor = useColorModeValue('gray.500', 'gray.400')
  const linkColor = useColorModeValue('teal.500', 'teal.300')

  return (
    <Container>
      <Head>
        <title>Blog - Khushwant Parihar</title>
        <meta content="Blog - Khushwant Parihar" name="title" />
        <meta
          content="Writings on programming, tutorials, and my experiences."
          name="description"
        />

        <meta content="website" property="og:type" />
        <meta content="https://khushwantparihar.com/blog" property="og:url" />
        <meta content="Blog - Khushwant Parihar" property="og:title" />
        <meta
          content="Writings on programming, tutorials, and my experiences."
          property="og:description"
        />
        <meta
          content="https://imagizer.imageshack.com/a/img924/6408/mSltwm.png"
          property="og:image"
        />

        <meta content="summary_large_image" property="twitter:card" />
        <meta content="https://khushwantparihar.com/" property="twitter:url" />
        <meta content="Blog - Khushwant Parihar" property="twitter:title" />
        <meta
          content="Writings on programming, tutorials, and my experiences."
          property="twitter:description"
        />
        <meta
          content="https://imagizer.imageshack.com/a/img923/7612/A5tDeP.png"
          property="twitter:image"
        />
      </Head>
      <Box as="main" py={{ base: '10', md: '20' }}>
        {/* Header Section */}
        <Box textAlign="center" mb={{ base: '8', md: '16' }}>
          <Heading
            color="displayColor"
            fontSize={{ base: '3xl', md: '5xl' }}
            mb={4}
          >
            Blog
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} color={secondaryTextColor}>
            Explore my latest articles on programming, tutorials, and personal experiences.
          </Text>
          <Box mt={8} maxW="400px" mx="auto">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaSearch color={secondaryTextColor} />
              </InputLeftElement>
              <Input
                placeholder="Search articles"
                type="text"
                value={query}
                onChange={handleChange}
                bg={bgColor}
                border="1px"
                borderColor={secondaryTextColor}
                borderRadius="md"
                _focus={{
                  borderColor: 'teal.500',
                  boxShadow: 'outline',
                }}
              />
            </InputGroup>
          </Box>
        </Box>
        <Divider />
        {/* Blog Posts Section */}
        <Box mt={10}>
          {posts.filter((e) =>
            e.post.title.toLowerCase().includes(query.toLowerCase())
          ).length === 0 ? (
            <Text textAlign="center" color={secondaryTextColor}>
              No posts found.
            </Text>
          ) : (
            <Stack spacing={6}>
              {posts
                .filter((e) =>
                  e.post.title.toLowerCase().includes(query.toLowerCase())
                )
                .map(({ post }) => (
                  <Box
                    key={post.frontmatter.slug}
                    bg={cardBg}
                    p={6}
                    borderRadius="lg"
                    boxShadow="md"
                    transition="transform 0.2s, box-shadow 0.2s"
                    _hover={{
                      transform: 'translateY(-4px)',
                      boxShadow: 'xl',
                      bg: cardHover,
                    }}
                  >
                    <Flex direction="column">
                      <NextLink href={`/blog/${post.frontmatter.slug}`} passHref>
                        <ChakraLink>
                          <Heading
                            as="h3"
                            size="lg"
                            mb={2}
                            color="displayColor"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            {post.title}
                          </Heading>
                        </ChakraLink>
                      </NextLink>
                      <Text color={secondaryTextColor} mb={4}>
                        {post.frontmatter.summary}
                      </Text>
                      <Flex
                        justify="space-between"
                        align="center"
                        direction={isLargerThan1024 ? 'row' : 'column'}
                      >
                        <Box>
                          <Text color={secondaryTextColor} fontSize="sm">
                            {dateFormat(
                              Date.parse(post.frontmatter.date),
                              'mmm d, yyyy'
                            )}
                            {' • '}
                            {post.frontmatter.readingTime}
                          </Text>
                        </Box>
                        <NextLink href={`/blog/${post.frontmatter.slug}`} passHref>
                          <ChakraLink color={linkColor} fontWeight="bold" mt={isLargerThan1024 ? 0 : 2}>
                            Read More &rarr;
                          </ChakraLink>
                        </NextLink>
                      </Flex>
                    </Flex>
                  </Box>
                ))}
            </Stack>
          )}
        </Box>
      </Box>
    </Container>
  )
}

export async function getStaticProps() {
  const blog = new GithubBlog({
    repo: 'WOLFIEEEE/new-portfolio',
    token: process.env.GITHUB_TOKEN,
  })
  const posts = await blog.getPosts({
    query: {
      author: 'WOLFIEEEE',
      type: 'post',
      state: 'published',
    },
    pager: { limit: 10, offset: 0 },
  })

  return {
    props: {
      posts: posts.edges.sort(
        (a, b) =>
          Date.parse(b.post.frontmatter.date) -
          Date.parse(a.post.frontmatter.date)
      ),
    },
    revalidate: 60,
  }
}