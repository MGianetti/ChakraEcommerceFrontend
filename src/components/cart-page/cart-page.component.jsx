import {
  Container,
  Flex,
  Button,
  ButtonGroup,
  Heading,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ChartItem from './cart-item/cart-item.component';
import { clearCart } from '../../store/cart/cartSlice';
import { createNewOrder } from '../../services/orders-service/orders-service.service';

export default function CartPage(props) {
  const cartItems = useSelector(state => state.cart.items);
  const [totalValue, setTotalValue] = useState(0);
  const [isOrderFinishingLoading, setIsOrderFinishingLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setTotalValue(
      cartItems.reduce(
        (cartValue, currentItem) => cartValue + currentItem.price,
        0
      )
    );
  }, [cartItems]);

  const handleFinishOrder = async () => {
    setIsOrderFinishingLoading(true);
    const productsIdList = cartItems.reduce((orderItems, cartItem) => {
      return [...orderItems, cartItem.id];
    }, []);
    await createNewOrder({ productsIdList });
    dispatch(clearCart());
    setIsOrderFinishingLoading(false);
    alert('Seu pedido foi realizado!');
  };

  return (
    <>
      <Container maxWidth="1080px">
        <Flex justify="center" padding="40px 0">
          <Heading>Meu carrinho</Heading>
        </Flex>
        {cartItems.length === 0 && (
          <Heading size="md">Seu carrinho está vazio</Heading>
        )}
        <Flex w="100%" maxHeight="300px" direction="column" overflowY="scroll">
          {cartItems.map(cartItem => (
            <ChartItem cartItem={cartItem} />
          ))}
        </Flex>
        <Heading w="100%" textAlign="right" marginTop="25px">
          Total: ${totalValue.toFixed(2)}
        </Heading>
        <Flex justify="center" alignItems="center" height="200px">
          <ButtonGroup variant="outline" spacing="6">
            <Button
              variant="ghost"
              colorScheme="gray"
              onClick={() => navigate('/')}
            >
              Voltar
            </Button>
            <Button
              variant="solid"
              colorScheme="green"
              onClick={handleFinishOrder}
              isLoading={isOrderFinishingLoading}
            >
              Finalizar pedido
            </Button>
          </ButtonGroup>
        </Flex>
      </Container>
    </>
  );
}
