import {
  Box,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

export default function OrderCard(props) {
  return (
    <Flex
      w="100%"
      height="fit-content"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      padding="30px"
      marginBottom="10px"
      direction="column"
      alignItems="center"
    >
      <Heading w="100%" textAlign="left" size="md" marginBottom="20px">
        Id do pedido: 8237
      </Heading>
      <Heading w="100%" textAlign="left" size="sm">
        Produtos:
      </Heading>
      <Box border="1px" h="100px" overflowY="scroll" display="block" w="100%">
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Nome do produto</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1123</Td>
              <Td>Tênis</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
}
