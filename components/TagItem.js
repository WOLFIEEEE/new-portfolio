// components/TagItem.jsx

import { Tag, TagLabel, TagLeftIcon, useColorModeValue } from '@chakra-ui/react';
import {
  FaReact,
  FaPython,
  FaJs,
  FaSass,
  FaDatabase,
  FaLaravel,
  FaBootstrap,
  FaPepperHot,
  FaCode,
} from 'react-icons/fa';
import { SiChakraui, SiNextdotjs } from 'react-icons/si';

const tagMapping = {
  React: { color: 'blue', icon: FaReact },
  Python: { color: 'orange', icon: FaPython },
  Javascript: { color: 'yellow', icon: FaJs },
  Sass: { color: 'pink', icon: FaSass },
  Flask: { color: 'green', icon: FaPepperHot },
  Laravel: { color: 'red', icon: FaLaravel },
  Bootstrap: { color: 'purple', icon: FaBootstrap },
  SQL: { color: 'teal', icon: FaDatabase },
  'Next.js': { color: 'gray', icon: SiNextdotjs },
  'Chakra UI': { color: 'cyan', icon: SiChakraui },
  default: { color: 'gray', icon: FaCode },
};

export default function TagItem({ label, size }) {
  const { color, icon } = tagMapping[label] || tagMapping['default'];
  const iconColor = useColorModeValue(`${color}.500`, `${color}.300`);

  return (
    <Tag colorScheme={color} size={size}>
      <TagLeftIcon as={icon} color={iconColor} />
      <TagLabel>{label}</TagLabel>
    </Tag>
  );
}
