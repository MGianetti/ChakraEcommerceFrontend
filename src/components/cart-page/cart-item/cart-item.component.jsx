import { Flex, Heading, Box, Badge } from '@chakra-ui/react';

import { FaTrashAlt } from 'react-icons/fa';

export default function CartIcon(props) {
  const { cartItem } = props;
  const { productName, price } = cartItem;
  return (
    <Box w="100%" h="100" borderWidth="1px" borderRadius="lg" boxShadow="md">
      <Flex alignItems="center" margin="30px" direction="column">
        <Flex alignItems="center" justify="space-between" w="100%">
          <Heading size="lg">{productName}</Heading>
          <Flex alignItems="center" justify="space-evenly" w="20%">
            <Badge fontSize="1.5rem" colorScheme="green" height="max-content">
              $ {price}
            </Badge>
            <FaTrashAlt />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
