import React from 'react';
import Logo from '../assets/logo.svg';
import { MdOutlineDarkMode } from 'react-icons/md';
import { FiSun } from 'react-icons/fi';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { Flex, IconButton, useColorMode } from '@chakra-ui/react';

export const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex mt={8} alignItems='center' justifyContent='space-between'>
      <Flex alignItems='center'>
        <img src={Logo} alt='HeartBeat' className='w-24' />
      </Flex>
      <Flex alignItems='center'>
        <a href='https://github.com/hyfic'>
          <IconButton
            aria-label='Github'
            icon={<FaGithub className='text-xl' />}
            variant='ghost'
          />
        </a>
        <a href='https://instagram.com/hyficapp'>
          <IconButton
            aria-label='Github'
            icon={<FaInstagram className='text-xl' />}
            variant='ghost'
          />
        </a>
        <IconButton
          aria-label='Toggle theme'
          icon={
            colorMode === 'light' ? (
              <MdOutlineDarkMode className='text-xl' />
            ) : (
              <FiSun className='text-xl' />
            )
          }
          onClick={toggleColorMode}
          variant='ghost'
        />
      </Flex>
    </Flex>
  );
};
