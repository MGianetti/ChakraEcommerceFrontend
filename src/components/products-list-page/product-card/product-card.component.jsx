import { Badge, Box, Flex, Heading, Text } from '@chakra-ui/react';
import { FaCartPlus } from 'react-icons/fa';

export default function ProductCard(props) {
  return (
    <Box w="100%" h="250" borderWidth="1px" borderRadius="lg" boxShadow="md">
      <Flex alignItems="center" margin="30px" direction="column">
        <Flex alignItems="center" justify="space-between" w="100%">
          <Heading size="lg">Tênis</Heading>
          <Badge size="xs" colorScheme="green" height="max-content">
            $ 200
          </Badge>
        </Flex>
        <Heading size="xs">Descrição</Heading>
        <Text margin="10px" maxHeight="90px" overflowY="scroll" border="1px">
          Aenean non lorem nisl. Vivamus vel justo malesuada, egestas nisl vel,
          molestie leo. Aenean non lorem nisl. Vivamus vel justo malesuada,
          egestas nisl vel, molestie leo. Aenean non lorem nisl. Vivamus vel
          justo malesuada, egestas nisl vel, molestie leo. Aenean non lorem
          nisl. Vivamus vel justo malesuada, egestas nisl vel, molestie leo.
          Aenean non lorem nisl. Vivamus vel justo malesuada, egestas nisl vel,
          molestie leo.
        </Text>
        <Flex w="100%" justifyContent="end" marginTop="15px">
          <FaCartPlus width="100%" />
        </Flex>
      </Flex>
    </Box>
  );
}
