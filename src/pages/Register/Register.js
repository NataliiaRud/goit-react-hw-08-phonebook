import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Box, Text } from '@chakra-ui/react';

export function Register() {
  return (
    <Box w="100%" p="15px">
      <Text
        textAlign="center"
        fontSize="2xl"
        fontWeight="bold"
        color="teal"
        mb="15px"
      >
        Registration
      </Text>
      <RegisterForm />
    </Box>
  );
}
