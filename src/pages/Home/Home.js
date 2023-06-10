import { Box, Text, Icon, HStack } from '@chakra-ui/react';

import {
  MdContactPhone,
  MdOutlineFactCheck,
  MdOutlineContentPasteSearch,
} from 'react-icons/md';

export default function Home() {
  return (
    <Box w="100%" textAlign="center">
      <Text
        textAlign="center"
        fontSize="2xl"
        fontWeight="bold"
        color="teal"
        m="15px"
      >
        Custom Phonebook Application
      </Text>

      <HStack>
        <Icon as={MdContactPhone} w={400} h={200} color="blue.500" />
        <Icon as={MdOutlineFactCheck} w={400} h={200} color="blue.500" />
        <Icon
          as={MdOutlineContentPasteSearch}
          w={400}
          h={200}
          color="blue.500"
        />
      </HStack>
    </Box>
  );
}
