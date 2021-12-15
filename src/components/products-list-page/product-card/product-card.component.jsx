import { Badge, Box, Flex, Heading, Text } from '@chakra-ui/react';
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import { addItemToCart } from '../../../store/cart/cartSlice';

export default function ProductCard(props) {
  const { itemForSale } = props;
  const { id, productName, price, description } = itemForSale;
  const itemKey = `product-key-${id}`;

  const dispatch = useDispatch();

  const handleAddToCartClick = item => {
    dispatch(addItemToCart(item));
  };

  return (
    <Box
      key={itemKey}
      w="100%"
      h="250"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
    >
      <Flex alignItems="center" margin="30px" direction="column">
        <Flex alignItems="center" justify="space-between" w="100%">
          <Heading size="lg">{productName}</Heading>
          <Badge size="xs" colorScheme="green" height="max-content">
            $ {price}
          </Badge>
        </Flex>
        <Heading size="xs">Descrição</Heading>
        <Text margin="10px" maxHeight="90px" overflowY="scroll" border="1px">
          {description}
        </Text>
        <Flex w="100%" justifyContent="end" marginTop="15px">
          <FaCartPlus
            width="100%"
            onClick={() => handleAddToCartClick(itemForSale)}
          />
        </Flex>
      </Flex>
    </Box>
  );
}
