// pages/experience.jsx

import { useState } from 'react';
import {
  Stack,
  Heading,
  Text,
  Divider,
  Container,
  Box,
  Image,
  Tag,
  HStack,
  Button,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';
import { FaBriefcase, FaSearch, FaExternalLinkAlt } from 'react-icons/fa';
import AnimatedSection from '../../components/AnimatedSection';
import Head from 'next/head';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CertificationCard from '../../components/CertificationCard';
import { createGlobalStyle } from 'styled-components';
import HeadContainer from '../../components/Container';

export default function Experience({ experiences, projects, certifications }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // Filtered projects based on search query
  const filteredProjects = projects.filter(
    (proj) =>
      proj.projectName.toLowerCase().includes(query.toLowerCase()) ||
      proj.technologies.some((tech) =>
        tech.toLowerCase().includes(query.toLowerCase())
      )
  );

  // Helper function to ensure the image URL is absolute
  const getAbsoluteUrl = (url) => {
    if (!url) return '/images/default.jpg'; // Fallback image
    if (url.startsWith('//')) {
      return `https:${url}`;
    }
    if (url.startsWith('/')) {
      return url;
    }
    return url;
  };

  // Global style for custom font
  const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
  `;

  return (
    <>
      <GlobalStyle />
      <HeadContainer>
      <Head >
        <title>Your Name - Experience</title>
        <meta name="title" content="Your Name - Experience" />
        <meta
          name="description"
          content="Explore the professional journey, freelance projects, certifications, and insights about Your Name."
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/experience" />
        <meta property="og:title" content="Your Name - Experience" />
        <meta
          property="og:description"
          content="Explore the professional journey, freelance projects, certifications, and insights about Your Name."
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/images/experience-og-image.png"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourdomain.com/experience" />
        <meta property="twitter:title" content="Your Name - Experience" />
        <meta
          property="twitter:description"
          content="Explore the professional journey, freelance projects, certifications, and insights about Your Name."
        />
        <meta
          property="twitter:image"
          content="https://yourdomain.com/images/experience-twitter-image.png"
        />
      </Head>
      <Container
       maxW="container.lg" 
       py={10} 
       pt={{ base: '80px', md: '80px' }}
       minH="100vh">
        <Stack spacing={10}>
          {/* Page Header */}
          <Stack spacing={5} textAlign="center">
            <Heading color="white" fontSize={{ base: '4xl', md: '6xl' }}>
              Know More About Me
            </Heading>
            <Text color="gray.400" fontSize={{ base: '14px', md: '16px' }}>
              Explore my professional journey, freelance projects, certifications, and more.
            </Text>
            <Divider borderColor="gray.700" />
          </Stack>

          {/* Work Experience Section */}
          <Stack spacing={6}>
            <Heading color="white" fontSize="2xl">
            Work Experience
            </Heading>
            <Box width="100%">
              <VerticalTimeline>
                {experiences
                  .filter(
                    (exp) =>
                      exp.title.toLowerCase().includes(query.toLowerCase()) ||
                      exp.company.toLowerCase().includes(query.toLowerCase())
                  )
                  .map((experience, index) => (
                    <VerticalTimelineElement
                      key={index}
                      contentStyle={{ background: '#1A202C', color: '#fff' }}
                      contentArrowStyle={{ borderRight: '7px solid  #1A202C' }}
                      date={experience.duration}
                      iconStyle={{ background: '#2D3748', color: '#fff' }}
                      icon={<FaBriefcase />}
                    >
                      <Heading fontSize="xl" color="teal.300">
                        {experience.title} @ {experience.company}
                      </Heading>
                      <Text color="gray.400" fontSize="sm" mt={2}>
                        {experience.location}
                      </Text>
                      <Divider borderColor="gray.600" my={2} />
                      <Stack spacing={2}>
                        {experience.responsibilities.map((resp, idx) => (
                          <Text key={idx} color="gray.300" fontSize="md">
                            • {resp}
                          </Text>
                        ))}
                      </Stack>
                      <Box mt={3}>
                        {experience.technologies.map((tech, idx) => (
                          <Tag
                            key={idx}
                            colorScheme="teal"
                            variant="solid"
                            size="sm"
                            mr={2}
                            mb={2}
                          >
                            {tech}
                          </Tag>
                        ))}
                      </Box>
                      {/* Company Image */}
                      {experience.imageURL && (
                        <Box mt={4}>
                          <img
                            src={getAbsoluteUrl(experience.imageURL)}
                            alt={`${experience.company} logo`}
                            style={{ maxWidth: '100%', borderRadius: '8px' }}
                          />
                        </Box>
                      )}
                    </VerticalTimelineElement>
                  ))}
              </VerticalTimeline>
            </Box>
          </Stack>

          {/* Freelance Projects Section */}
          <Stack spacing={6}>
            <Heading color="white" fontSize="2xl">
              Freelance Projects
            </Heading>

            {/* Projects List */}
            <Stack spacing={8}>
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <Flex
                    key={index}
                    direction={{
                      base: 'column',
                      md: index % 2 === 0 ? 'row' : 'row-reverse',
                    }}
                    align="center"
                    justify="space-between"
                    bg="black"
                    borderRadius="lg"
                    overflow="hidden"
                    p={6}
                    boxShadow="lg"
                  >
                    {/* Big Number */}
                    <Box
                      fontSize={{ base: '6xl', md: '8xl' }}
                      color="teal.500"
                      fontWeight="bold"
                      textAlign="center"
                      fontFamily="'Playfair Display', serif"
                      flexShrink={0}
                      w={{ base: '100%', md: '20%' }}
                      mb={{ base: 4, md: 0 }}
                    >
                      {index + 1}
                    </Box>

                    {/* Project Details */}
                    <Box
                      w={{ base: '100%', md: '75%' }}
                      textAlign={{ base: 'center', md: index % 2 === 0 ? 'left' : 'right' }}
                    >
                      <Heading fontSize="2xl" mb={2} color="white">
                        {project.projectName}
                      </Heading>
                      <Text color="gray.300" mb={4}>
                        {project.projectDescription}
                      </Text>
                      <HStack
                        spacing={2}
                        wrap="wrap"
                        mb={4}
                        justify={{
                          base: 'center',
                          md: index % 2 === 0 ? 'flex-start' : 'flex-end',
                        }}
                      >
                        {project.technologies.map((tech, idx) => (
                          <Tag
                            key={idx}
                            colorScheme="teal"
                            variant="solid"
                            size="sm"
                          >
                            {tech}
                          </Tag>
                        ))}
                      </HStack>
                      {project.projectURL && (
                        <Button
                          as="a"
                          href={project.projectURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          leftIcon={<FaExternalLinkAlt />}
                          colorScheme="teal"
                          variant="outline"
                          size="sm"
                          mt={2}
                        >
                          View Project
                        </Button>
                      )}
                    </Box>
                  </Flex>
                ))
              ) : (
                <Text color="gray.400">No projects match your search criteria.</Text>
              )}
            </Stack>
          </Stack>

          {/* Certifications Section */}
          <Stack spacing={6}>
            <Heading color="white" fontSize="2xl">
              Certifications
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {certifications
                .filter(
                  (cert) =>
                    cert.certificationName.toLowerCase().includes(query.toLowerCase()) ||
                    cert.issuingOrganization.toLowerCase().includes(query.toLowerCase())
                )
                .map((cert, index) => (
                  <Box
                    key={index}
                    bg="gray.800"
                    borderRadius="lg"
                    overflow="hidden"
                    boxShadow="lg"
                    p={6}
                    transition="transform 0.2s"
                    _hover={{ transform: 'scale(1.02)', boxShadow: 'xl' }}
                  >
                    <Flex align="center">
                      <Image
                        src={getAbsoluteUrl(cert.certificationImageURL)}
                        alt={cert.certificationName}
                        boxSize="80px"
                        objectFit="cover"
                        borderRadius="full"
                        mr={6}
                      />
                      <Box>
                        <Heading fontSize="xl" color="white" mb={2}>
                          {cert.certificationName}
                        </Heading>
                        <Text color="gray.400" fontSize="sm">
                          Issued by {cert.issuingOrganization}
                        </Text>
                        <Text color="gray.400" fontSize="sm">
                          Date Issued: {cert.issueDate}
                        </Text>
                      </Box>
                    </Flex>
                    {cert.certificationURL && (
                      <Button
                        as="a"
                        href={cert.certificationURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        leftIcon={<FaExternalLinkAlt />}
                        colorScheme="teal"
                        variant="outline"
                        size="sm"
                        mt={4}
                      >
                        View Certification
                      </Button>
                    )}
                  </Box>
                ))}
            </SimpleGrid>
          </Stack>

          {/* Animated Section */}
          <AnimatedSection />
        </Stack>
      </Container>
      </HeadContainer>
    </>
  );
}

// Sample Data Fetching (Replace with your data source)
export async function getStaticProps() {
  const experiences = [
    {
      title: 'Senior Developer',
      company: 'TechCorp',
      duration: 'Jan 2020 - Present',
      location: 'San Francisco, CA',
      imageURL: '/images/techcorp.png',
      responsibilities: [
        'Lead a team of 5 developers to build scalable web applications.',
        'Architect and implement RESTful APIs.',
        'Collaborate with cross-functional teams to define project requirements.',
      ],
      technologies: ['React', 'Node.js', 'Chakra UI'],
      projectURL: 'https://techcorp.com/projects/senior-developer',
    },
    {
      title: 'Frontend Engineer',
      company: 'DesignStudio',
      duration: 'Feb 2018 - Dec 2019',
      location: 'New York, NY',
      imageURL: '/images/designstudio.png',
      responsibilities: [
        'Developed custom components using React.',
        'Improved user experience by enhancing the UI/UX design.',
        'Collaborated with the design team to implement pixel-perfect designs.',
      ],
      technologies: ['React', 'Chakra UI', 'Figma'],
      projectURL: 'https://designstudio.com/projects/frontend-engineer',
    },
    {
      title: 'Junior Developer',
      company: 'Startup Inc.',
      duration: 'Jan 2016 - Jan 2018',
      location: 'Austin, TX',
      imageURL: '/images/startup.png',
      responsibilities: [
        'Assisted in the development of web applications.',
        'Performed code reviews and debugging.',
        'Contributed to UI/UX improvements.',
      ],
      technologies: ['JavaScript', 'HTML', 'CSS'],
      projectURL: 'https://startup.com/projects/junior-developer',
    },
  ];

  const projects = [
    {
      projectName: 'E-commerce Platform',
      projectDescription:
        'Developed a custom e-commerce platform with integrated payment solutions.',
      imageURL: '/images/project1.png',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      projectURL: 'https://ecommerce-platform.com',
    },
    {
      projectName: 'Portfolio Website',
      projectDescription:
        'Created a personal portfolio website for showcasing works and skills.',
      imageURL: '/images/project2.png',
      technologies: ['Next.js', 'Chakra UI'],
      projectURL: 'https://portfolio-website.com',
    },
    {
      projectName: 'Social Media App',
      projectDescription:
        'Built a social media application with real-time chat and notifications.',
      imageURL: '/images/project3.png',
      technologies: ['React Native', 'Firebase'],
      projectURL: 'https://socialmedia-app.com',
    },
    // Add more projects as needed
  ];

  const certifications = [
    {
      certificationName: 'Certified React Developer',
      issuingOrganization: 'React Institute',
      issueDate: 'March 2021',
      certificationURL: 'https://reactinstitute.com/certifications/react-developer',
      certificationImageURL: '/images/react_certification.png',
    },
    {
      certificationName: 'JavaScript Specialist',
      issuingOrganization: 'JavaScript Academy',
      issueDate: 'June 2020',
      certificationURL: 'https://javascriptacademy.com/certifications/js-specialist',
      certificationImageURL: '/images/js_certification.png',
    },
    {
      certificationName: 'AWS Certified Solutions Architect',
      issuingOrganization: 'Amazon Web Services',
      issueDate: 'September 2019',
      certificationURL: 'https://aws.amazon.com/certification/',
      certificationImageURL: '/images/aws_certification.png',
    },
    {
      certificationName: 'Full-Stack Web Developer',
      issuingOrganization: 'Coursera',
      issueDate: 'December 2018',
      certificationURL: 'https://coursera.org/verify/fullstack-web-dev',
      certificationImageURL: '/images/coursera_certification.png',
    },
    {
      certificationName: 'Responsive Web Design',
      issuingOrganization: 'freeCodeCamp',
      issueDate: 'May 2017',
      certificationURL: 'https://www.freecodecamp.org/certification/responsive-web-design',
      certificationImageURL: '/images/fcc_certification.png',
    },
  ];

  return {
    props: {
      experiences,
      projects,
      certifications,
    },
  };
}
