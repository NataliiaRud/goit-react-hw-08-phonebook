import { Box, Text } from '@chakra-ui/react';
import { LoginForm } from 'components/LoginForm/LoginForm';

export function Login() {
  return (
    <Box w="100%" p="15px">
      <Text
        textAlign="center"
        fontSize="2xl"
        fontWeight="bold"
        color="teal"
        mb="15px"
      >
        Log in
      </Text>
      <LoginForm />
    </Box>
  );
}
