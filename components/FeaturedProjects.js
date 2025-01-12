import {
  Link,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Box,
} from '@chakra-ui/layout';
import NextLink from 'next/link';
import Cards from './Card';
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';

const getAbsoluteUrl = (url) => {
  if (url.startsWith('//')) {
    return `https:${url}`;
  }
  return url;
};

export default function FeaturedProjects({ projects }) {
  useEffect(() => {
    ReactGA.initialize('YOUR_GA_MEASUREMENT_ID'); // Initialize GA here
  }, []);

  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    });
  };

  return (
    <Stack spacing={8} w="full">
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={16}>
        <SlideUpWhenVisible threshold={0.1}>
          <Stack spacing={1}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Heading
                color="displayColor"
                fontFamily="Ubuntu"
                fontSize={{ base: 'xl', md: '2xl' }}
              >
                All Creative Works.
              </Heading>
              <NextLink passHref href="/projects">
                <Link onClick={() => handleClick('featuredprojects_explore more')}>
                  <Text
                    _hover={{ color: 'button2' }}
                    color="button1"
                    display={{ base: 'block', md: 'none' }}
                    fontSize={{ base: 'sm', md: 'xl' }}
                  >
                    Explore more &rarr;
                  </Text>
                </Link>
              </NextLink>
            </Stack>
            <Text color="textSecondary" fontSize={{ base: 'md', md: 'xl' }}>
              Here's some of my projects that I have worked on.
            </Text>
            <NextLink href="/projects" passHref>
              <Link onClick={() => handleClick('featuredprojects_explore more')}>
                <Text
                  display={{ base: 'none', md: 'block' }}
                  fontSize={{ base: 'md', md: 'xl' }}
                >
                  Explore more &rarr;
                </Text>
              </Link>
            </NextLink>
          </Stack>
        </SlideUpWhenVisible>
        {projects.slice(0, 3).map((project, index) => (
          <SlideUpWhenVisible
            key={project.slug}
            threshold={index === 2 ? 0.8 : 0.1}
          >
            <Box mt={index === 1 ? { md: '-50%' } : 0}>
              <Cards
                slug={project.frontmatter.slug}
                desc={project.frontmatter.summary}
                imageURL={project.frontmatter.image}
                tag={project.techStack}
                title={project.title}
              />
            </Box>
          </SlideUpWhenVisible>
        ))}
      </SimpleGrid>
    </Stack>
  );
}