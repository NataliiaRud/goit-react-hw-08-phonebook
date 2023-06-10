import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { Box, Flex } from '@chakra-ui/react';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Box p="25px" position="relative" background="blue.200">
        <Flex align="center" justify="space-between" gap="150px">
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Flex>
      </Box>
    </header>
  );
};

export default AppBar;
