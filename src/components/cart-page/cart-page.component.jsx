import {
  Container,
  Flex,
  Button,
  ButtonGroup,
  Heading,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import ChartItem from './cart-item/cart-item.component';

export default function CartPage(props) {
  const cartItems = useSelector(state => state.cart.items);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    setTotalValue(
      cartItems.reduce(
        (accValue, currentItem) => accValue + currentItem.price,
        0
      )
    );
  }, [cartItems]);

  return (
    <>
      <Container maxWidth="1080px">
        <Flex justify="center" padding="40px 0">
          <Heading>Meu carrinho</Heading>
        </Flex>
        <Flex w="100%" maxHeight="300px" direction="column" overflowY="scroll">
          {cartItems.map(cartItem => (
            <ChartItem cartItem={cartItem} />
          ))}
        </Flex>
        <Heading w="100%" textAlign="right" marginTop="25px">
          Total: ${totalValue}
        </Heading>
        <Flex justify="center" alignItems="center" height="200px">
          <ButtonGroup variant="outline" spacing="6">
            <Button variant="ghost" colorScheme="gray">
              Voltar
            </Button>
            <Button variant="solid" colorScheme="green">
              Finalizar pedido
            </Button>
          </ButtonGroup>
        </Flex>
      </Container>
    </>
  );
}
