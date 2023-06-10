import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  MdPersonAddAlt,
  MdOutlineMarkunread,
  MdOutlineVisibilityOff,
} from 'react-icons/md';
import {
  Box,
  Flex,
  Input,
  Button,
  FormLabel,
  Icon,
  InputLeftElement,
  InputGroup,
} from '@chakra-ui/react';
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Box boxSize="sm" mr="auto" ml="auto">
        <Flex
          align="left"
          justify="center"
          gap="15px"
          direction="column"
          maxW="300px"
          m="0 auto"
          
        >
          <FormLabel>Username</FormLabel>
          <InputGroup>
            <Input type="text" name="name" variant="filled" />
            <InputLeftElement pointerEvents="none">
              <Icon as={MdPersonAddAlt} w={5} h={5} color="blue.200" />
            </InputLeftElement>
          </InputGroup>
          <FormLabel>Email</FormLabel>
          <InputGroup>
            <Input type="email" name="email" variant="filled" />
            <InputLeftElement pointerEvents="none">
              <Icon as={MdOutlineMarkunread} w={5} h={5} color="blue.200" />
            </InputLeftElement>
          </InputGroup>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input type="password" name="password" variant="filled" />
            <InputLeftElement pointerEvents="none">
              <Icon as={MdOutlineVisibilityOff} w={5} h={5} color="blue.200" />
            </InputLeftElement>
          </InputGroup>
          <Button type="submit" w="100%">
            Register
          </Button>
        </Flex>
      </Box>
    </form>
  );
};
