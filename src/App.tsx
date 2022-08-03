import React from 'react';
import { Container } from '@chakra-ui/react';
import { Header } from './components/Header';
import { Landing } from './components/Landing';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Team } from './components/Team';

export const App: React.FC = () => {
  return (
    <Container maxW='container.xl'>
      <Header />
      <Landing />
      <Projects />
      <Team />
      <Footer />
    </Container>
  );
};
