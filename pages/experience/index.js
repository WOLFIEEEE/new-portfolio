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
                      <Heading fontSize="xl">
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
      title: 'Software Test Analyst - 1',
      company: 'FIS Global',
      duration: 'June 2022 - Present',
      location: 'Bengaluru, India',
      imageURL: '/images/fis_global.png',
      responsibilities: [
        'Conducted Section 508/WCAG 2.1/2.2 audits for 30+ web and mobile apps in React, Ionic, Angular, and Vue.js, identifying barriers and recommending compliance solutions.',
        'Collaborated with design and development teams to integrate accessibility into the product lifecycle, resulting in a 50% increase in overall accessibility scores.',
        'Implemented accessibility-focused frontend strategies like ARIA landmarks, semantic HTML, and optimized keyboard navigation, achieving a 40% performance boost in accessibility scores and Google rankings.',
      ],
      technologies: ['React', 'Angular', 'Ionic', 'Vue.js', 'ARIA'],
      projectURL: 'https://www.fisglobal.com/',
    },
    {
      title: 'Research and Development Intern',
      company: 'Bharat Forge',
      duration: 'Feb 2021 - Oct 2021',
      location: 'Pune, India',
      imageURL: '/images/bharat_forge.png',
      responsibilities: [
        'Implemented predictive maintenance solutions with real-time dashboards using Node.js, React, Express, and PostgreSQL, improving asset reliability by 25% and projecting $5-6M in annual savings.',
        'Engineered and launched an automated oxygen delivery device prototype for COVID-19 patients within a 2-week timeframe, integrating 1500+ lines of Arduino code and optimizing oxygen flow efficiency by 40%.',
      ],
      technologies: ['Node.js', 'React', 'Express', 'PostgreSQL', 'Arduino'],
      projectURL: 'https://www.bharatforge.com/',
    },
  ];

  const projects = [
    {
      projectName: 'License Manager Plugin',
      projectDescription:
        'Developed a plugin to streamline license allocation for courses. Admins can define licenses, and users can assign them to team members. Assigned members receive registration links and gain access seamlessly, with sub-accounts reflecting in the user dashboard.',
      imageURL: '/images/license_manager_plugin.png',
      technologies: ['WordPress', 'PHP', 'JavaScript', 'WCAG'],
      projectURL: 'https://adacompliance.net',
    },
    {
      projectName: 'TranscriptHost.com',
      projectDescription:
        'Built a subscription-based platform enabling users to upload, edit, and share video transcripts with accessible features. Includes custom URL generation for sharing and embedding.',
      imageURL: '/images/transcript_host.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'WCAG'],
      projectURL: 'https://transcripthost.com',
    },
    {
      projectName: 'Course Selling Website Revamp',
      projectDescription:
        'Revamped a course-selling website with a modern design, adding custom-built WordPress elements and enhancing user experience. Optimized for accessibility and usability.',
      imageURL: '/images/course_selling_revamp.png',
      technologies: ['WordPress', 'PHP', 'WCAG', 'CSS'],
      projectURL: 'https://adacompliance.net',
    },
    {
      projectName: 'Accessible.org Blog Platform Revamp',
      projectDescription:
        'Redesigned the blog platform Accessible.org with a fully accessible and visually appealing interface. Improved navigation, readability, and overall user experience.',
      imageURL: '/images/accessible_org_revamp.png',
      technologies: ['React', 'Node.js', 'WCAG', 'ARIA'],
      projectURL: 'https://accessible.org',
    },
  ];

  const certifications = [
    {
      certificationName: 'Section 508 Trusted Tester',
      issuingOrganization: 'Department of Homeland Security (DHS)',
      issueDate: '2022',
      certificationURL: 'https://www.dhs.gov/trusted-tester',
      certificationImageURL: '/images/dhs_certification.png',
    },
    {
      certificationName: 'Android App Development: Accessibility',
      issuingOrganization: 'LinkedIn Learning',
      issueDate: '2021',
      certificationURL:
        'https://www.linkedin.com/learning/android-app-development-accessibility',
      certificationImageURL: '/images/android_accessibility_cert.png',
    },
    {
      certificationName: 'iOS App Development: Accessibility',
      issuingOrganization: 'LinkedIn Learning',
      issueDate: '2021',
      certificationURL:
        'https://www.linkedin.com/learning/ios-app-development-accessibility',
      certificationImageURL: '/images/ios_accessibility_cert.png',
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

