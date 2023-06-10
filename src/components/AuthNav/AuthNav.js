import { Flex, Text } from '@chakra-ui/react';

import { Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Flex gap="8px">
      <Text textAlign="center" fontSize="16px" fontWeight="bold" color="grey">
        <Link to="/register">Register</Link>
        <Link to="/login">Log In</Link>
      </Text>
    </Flex>
  );
};
