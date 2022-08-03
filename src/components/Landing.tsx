import React from 'react';
import DeviceMockups from '../assets/device_mockups.png';
import {
  Button,
  Center,
  Container,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react';

export const Landing: React.FC = () => {
  return (
    <div className='mb-10 mt-5 md:mt-28'>
      <Center>
        <Heading mt={10} className='text-7xl lg:text-8xl'>
          Building A <span style={{ color: '#54C3E4' }}>Better</span> World
        </Heading>
      </Center>
      <Center>
        <Text mt={10} className='text-xl lg:text-2xl opacity-80'>
          <Link className='font-medium'>Hyfic</Link> is an open-source company
          who develop applications for a better future.
        </Text>
      </Center>
      <Center mt={10}>
        <Container maxW='container.lg'>
          <img src={DeviceMockups} alt='' />
        </Container>
      </Center>
    </div>
  );
};
