import React from 'react';
import { Avatar, Flex, Heading, Link, Text } from '@chakra-ui/react';

export const Team: React.FC = () => {
  return (
    <div className='mt-10'>
      <Heading>Team</Heading>

      <Link href='https://fadhilsaheer.github.io'>
        <Flex mt={5} alignItems='center' className='cursor-pointer'>
          <Avatar
            size='lg'
            src='https://fadhilsaheer.github.io/assets/me.722083bb.jpg'
          />
          <div className='ml-3'>
            <Text className='text-2xl font-medium'>Fadhil</Text>
            <Text className='text-xl opacity-80'>CEO & founder of Hyfic</Text>
          </div>
        </Flex>
      </Link>
    </div>
  );
};
