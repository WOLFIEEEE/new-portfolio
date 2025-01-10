// pages/services/index.js

import { useState } from 'react'
import { Stack, Heading, Text, SimpleGrid, Divider } from '@chakra-ui/react'
import ServiceCard from '../../components/Servicecard' // Import your ServiceCard
import Container from '../../components/Container'
import Head from 'next/head'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { FaSearch } from 'react-icons/fa'
import { GithubBlog } from '@rena.to/github-blog'

export default function Services({ services }) {
  const [query, setQuery] = useState('')
  
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <>
      <Container>
        <Head>
          <title>Services - Khushwant Parihar</title>
          <meta name="title" content="Services - Khushwant Parihar" />
          <meta
            name="description"
            content="Explore the range of services offered by Khushwant Parihar, a Software Engineer based in Indonesia."
          />
          {/* Add additional SEO meta tags as needed */}
        </Head>
        <Stack
          justifyContent="center"
          my={{ base: '15vh', md: '16vh' }}
          spacing={10}
        >
          <Stack spacing={5}>
            <Heading color="displayColor" fontSize={{ base: '4xl', md: '6xl' }}>
              Services
            </Heading>
            <Text fontSize={{ base: '14px', md: '16px' }}>
              I offer a variety of services to help you build and scale your projects. Explore the services below to find out how I can assist you.
            </Text>
            <InputGroup maxW="400px">
              <InputRightElement pointerEvents="none">
                <FaSearch />
              </InputRightElement>
              <Input
                placeholder="Search services"
                type="text"
                value={query}
                onChange={handleChange}
              />
            </InputGroup>
            <Divider />
          </Stack>
          <SimpleGrid columns={{ sm: 1, md: 1 }} spacing={8}>
            {services
              .filter((service) =>
                service.title.toLowerCase().includes(query.toLowerCase()),
              )
              .map((service) => (
                <ServiceCard
                  key={service.title}
                  desc={service.frontmatter.summary}
                  imageURL={service.frontmatter.image}
                  tag={service.frontmatter.techStack
                    .split(',')
                    .map((e) => e.trim())}
                  title={service.title}
                  slug={service.frontmatter.slug}
                  subServices={service.frontmatter.subServices || []} // Assuming you have subServices in frontmatter
                />
              ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const blog = new GithubBlog({
    repo: 'WOLFIEEEE/new-portfolio',
    token: process.env.GITHUB_TOKEN,
  })
  
  const servicesData = await blog.getPosts({
    query: {
      author: 'WOLFIEEEE',
      type: 'service', // Ensure your services are tagged as 'service'
      state: 'published',
    },
    pager: { limit: 100, offset: 0 },
  })

  return {
    props: {
      services: servicesData.edges.map((e) => e.post),
    },
  }
}