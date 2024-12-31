import Head from 'next/head'
import { Stack } from '@chakra-ui/react'
import Container from '../components/Container'
import Introduction from '../components/Introduction'
import FeaturedProjects from '../components/FeaturedProjects'
import LatestArticle from '../components/LatestArticle'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'

import { GithubBlog } from '@rena.to/github-blog'

export default function Index({ introduction, projects, articles, contactMe }) {
  return (
    <>
      <Container enableTransition={true}>
        <Head>
          <title>Khushwant - Accessibility Engineer</title>
          <meta content="Khushwant - Accessibility Engineer" name="title" />
          <meta content="WOLFIEEEE, WOLFIEEEE website" name="keywords" />
          <meta
            content="Software Engineer based in India , an undergraduate student at Universitas Negeri Surabaya."
            name="description"
          />

          <meta content="website" property="og:type" />
          <meta content="https://khushwantparihar.com" property="og:url" />
          <meta
            content="Khushwant Parihar - Software Engineer"
            property="og:title"
          />
          <meta
            content="Software Engineer based in Indonesia, an undergraduate student at Universitas Negeri Surabaya."
            property="og:description"
          />
          <meta
            content="https://imagizer.imageshack.com/a/img922/7423/0P3Xty.png"
            property="og:image"
          />

          <meta content="summary_large_image" property="twitter:card" />
          <meta content="https://khushwantparihar.com/" property="twitter:url" />
          <meta
            content="Khushwant Parihar - Software Engineer"
            property="twitter:title"
          />
          <meta
            content="Software Engineer based in Indonesia, an undergraduate student at Universitas Negeri Surabaya."
            property="twitter:description"
          />
          <meta
            content="https://imagizer.imageshack.com/a/img922/7423/0P3Xty.png"
            property="twitter:image"
          />
        </Head>

        <Stack
          as="main"
          alignItems="flex-start"
          justifyContent="center"
          mt={{ base: '15vh', md: '20vh' }}
          pb="144px"
          spacing={{ base: '100px', md: '144px' }}
        >
          <Introduction introduction={introduction} />
          <AboutMe />
          <FeaturedProjects projects={projects} />
          <LatestArticle articles={articles} />
          <ContactMe contactMe={contactMe} />
        </Stack>
      </Container>
    </>
  )
}

let client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'featuredProjects',
    order: 'fields.order',
  })

  const blog = new GithubBlog({
    repo: 'WOLFIEEEE/new-portfolio',
    token: process.env.GITHUB_TOKEN,
  })
  let data2 = await blog.getPosts({
    query: {
      author: 'WOLFIEEEEE',
    },
    pager: { limit: 10, offset: 0 },
  })

  let data3 = await client.getEntries({
    content_type: 'introduction',
    limit: 2,
    order: 'sys.createdAt',
  })

  let data4 = await client.getEntries({
    content_type: 'contactMe',
    limit: 1,
    order: 'sys.createdAt',
  })

  return {
    props: {
      projects: data.items,
      articles: data2.edges
        .sort(
          (a, b) =>
            Date.parse(b.post.frontmatter.date) -
            Date.parse(a.post.frontmatter.date),
        )
        .map((edge) => edge.post)
        .slice(0, 4),
      introduction: data3.items,
      contactMe: data4.items,
    },
  }
}
