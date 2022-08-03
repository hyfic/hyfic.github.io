import React from 'react';
import Heartbeat from '../assets/heartbeat.png';
import Rttp from '../assets/rttp.png';
import {
  Badge,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';

export const Projects: React.FC = () => {
  return (
    <div>
      <Heading>Projects</Heading>
      <SimpleGrid mt={5} columns={{ sm: 1, md: 2 }} gap={3}>
        <Project
          title='HeartBeat'
          description='HeartBeat is a patient management system designed for doctors. In this app doctors can add patient data using simple forms, which later they can save as PDF or print as document.'
          image={Heartbeat}
          link='https://octoi.github.io/heartbeat'
          tags={['Doctor', 'Productivity']}
        />
        <Project
          title='RTTP'
          description='A RUST based CLI application which parse json to send API requests blazingly fast.'
          image={Rttp}
          link='https://octoi.github.io/rttp'
          tags={['Developer tool', 'JSON', 'HTTP client']}
        />
      </SimpleGrid>
    </div>
  );
};

interface Props {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const Project: React.FC<Props> = ({
  title,
  description,
  image,
  link,
  tags,
}) => {
  return (
    <a href={link}>
      <Flex
        direction='column'
        className='rounded cursor-pointer transition-all duration-200 hover:opacity-80'
      >
        <img src={image} alt={title} className='rounded-t' />
        <Flex
          direction='column'
          className='border-r-2 border-l-2 border-b-2 border-dashed p-4'
        >
          <Heading mt={3} className='font-medium text-2xl'>
            {title}
          </Heading>
          <Stack direction='row' mt={3}>
            {tags.map((tag, idx) => {
              let colorSchemes = [
                'teal',
                'cyan',
                'telegram',
                'twitter',
                'blue',
                'orange',
              ];

              const randomIndex = Math.floor(
                Math.random() * colorSchemes.length
              );

              return (
                <Badge
                  key={idx}
                  className='text-lg'
                  colorScheme={colorSchemes[randomIndex]}
                  variant='subtle'
                >
                  {tag}
                </Badge>
              );
            })}
          </Stack>
          <Text mt={3} className='text-xl opacity-80'>
            {description}
          </Text>
        </Flex>
      </Flex>
    </a>
  );
};
