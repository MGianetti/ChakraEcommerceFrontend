import { Badge, Box, Flex, Heading, Text } from '@chakra-ui/react';
import { FaCartPlus } from 'react-icons/fa';

export default function ProductCard(props) {
  return (
    <Box w="100%" h="200" borderWidth="1px" borderRadius="lg" boxShadow="md">
      <Flex alignItems="center" margin="0px 30px" direction="column">
        <Flex alignItems="center" justify="space-between" w="100%">
          <Heading>Tênis</Heading>
          <Badge size="xs" colorScheme="green" height="max-content">
            $ 200
          </Badge>
        </Flex>
        <Text margin="10px" maxHeight="90px" overflowY="scroll">
          Aenean non lorem nisl. Vivamus vel justo malesuada, egestas nisl vel,
          molestie leo. Aenean non lorem nisl. Vivamus vel justo malesuada,
          egestas nisl vel, molestie leo. Aenean non lorem nisl. Vivamus vel
          justo malesuada, egestas nisl vel, molestie leo. Aenean non lorem
          nisl. Vivamus vel justo malesuada, egestas nisl vel, molestie leo.
          Aenean non lorem nisl. Vivamus vel justo malesuada, egestas nisl vel,
          molestie leo.
        </Text>
        <Flex w="100%" justifyContent="end" marginTop="5px">
          <FaCartPlus width="100%" />
        </Flex>
      </Flex>
    </Box>
  );
}
