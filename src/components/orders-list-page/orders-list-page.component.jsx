/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Container, Flex, Heading } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllOrders } from '../../services/orders-service/orders-service.service';
import { fetchAllOrders } from '../../store/orders/ordersSlice';
import OrderCard from './order-card/order-card.component';

export default function OrdersListPage(props) {
  const dispatch = useDispatch();

  useEffect(async () => {
    const allItems = await getAllOrders();
    dispatch(fetchAllOrders(allItems));
  }, []);

  return (
    <>
      <Container maxWidth="1080px">
        <Flex justify="left" padding="40px 0">
          <Heading>Pedidos atendidos:</Heading>
        </Flex>
        <Flex w="100%" maxHeight="800px" direction="column" overflowY="scroll">
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </Flex>
      </Container>
    </>
  );
}
