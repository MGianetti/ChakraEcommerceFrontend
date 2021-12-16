import { useDispatch } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import { Flex, Heading, Box, Badge } from '@chakra-ui/react';

import { removeItemFromCart } from '../../../store/cart/cartSlice';

import styles from './cart-item.module.css';

export default function CartIcon(props) {
  const { cartItem } = props;
  const { productName, price } = cartItem;

  const dispatch = useDispatch();

  return (
    <Box w="100%" h="100" borderWidth="1px" borderRadius="lg" boxShadow="md">
      <Flex alignItems="center" margin="30px" direction="column">
        <Flex alignItems="center" justify="space-between" w="100%">
          <Heading
            size="lg"
            title={productName}
            textOverflow="ellipsis"
            overflow="hidden"
            maxWidth="600px"
            whiteSpace="nowrap"
          >
            {productName}
          </Heading>
          <Flex alignItems="center" justify="space-evenly" w="20%">
            <Badge
              title={price}
              fontSize="1.5rem"
              colorScheme="green"
              height="max-content"
              textOverflow="ellipsis"
              overflow="hidden"
              maxWidth="150px"
              whiteSpace="nowrap"
            >
              $ {price}
            </Badge>
            <FaTrashAlt
              onClick={() => dispatch(removeItemFromCart(cartItem))}
              className={styles.RemoveFromCart}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
