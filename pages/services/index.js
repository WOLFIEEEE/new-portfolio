// pages/services/index.jsx

import { useState } from 'react';
import { Stack, Heading, Text, SimpleGrid, Divider } from '@chakra-ui/react';
import ServiceCard from '../../components/Servicecard'; // Ensure correct import
import Container from '../../components/Container';
import Head from 'next/head';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { FaSearch } from 'react-icons/fa';

export default function Services({ services }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // Helper function to ensure the image URL is absolute
  const getAbsoluteUrl = (url) => {
    if (url.startsWith('//')) {
      return `https:${url}`;
    }
    return url;
  };

  return (
    <>
      <Container>
        <Head>
          <title>Abdul Rahman - Services</title>
          {/* ... your meta tags ... */}
        </Head>
        <Stack
          spacing={10}
          justifyContent="center"
          px={['5vw', '10vw']}
          my={['15vh', '15vh', '22.5vh', '22.5vh']}
        >
          <Stack spacing={5}>
            <Heading color="displayColor" fontSize={{ base: '4xl', md: '6xl' }}>
              Services
            </Heading>
            <Text fontSize={{ base: '14px', md: '16px' }}>
              Discover a wide range of services tailored to meet your development
              and design needs.
            </Text>
            <InputGroup maxW="400px">
              <InputRightElement pointerEvents="none" children={<FaSearch />} />
              <Input
                type="text"
                placeholder="Search services"
                value={query}
                onChange={handleChange}
              />
            </InputGroup>
            <Divider />
          </Stack>
          <SimpleGrid columns={1} spacing={8}> {/* Set columns to 1 */}
            {services?.length > 0 && services
              .filter((e) =>
                e.fields.serviceName
                  .toLowerCase()
                  .includes(query.toLowerCase())
              )
              .map((service) => (
                <ServiceCard
                  key={service.fields.serviceName}
                  imageURL={
                    getAbsoluteUrl(service.fields.serviceImage?.fields?.file?.url || '')
                  }
                  title={service.fields.serviceName || 'Untitled Service'}
                  desc={service.fields.serviceDescription || 'No description available.'}
                  // Conditionally render ServiceURL if it exists
                  serviceUrl={service.fields.serviceURL || ''}
                  // Conditionally render Technologies if they exist
                  technologies={service.fields.technologies || []}
                  // Conditionally render SubServices if they exist
                  subServices={service.fields.subServices || []}
                />
              ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
}

const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'services',
    order: 'fields.order',
  });
  return {
    props: {
      services: data.items.reverse() || [],
    },
  };
}
