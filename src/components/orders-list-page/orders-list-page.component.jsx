/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Flex, Heading } from '@chakra-ui/react';

import OrderCard from './order-card/order-card.component';
import { getAllOrders } from '../../services/orders-service/orders-service.service';
import { fetchAllOrders } from '../../store/orders/ordersSlice';

export default function OrdersListPage() {
  const [allOrders, setAllOrders] = useState([]);
  const dispatch = useDispatch();

  useEffect(async () => {
    const allOrders = await getAllOrders();
    dispatch(fetchAllOrders(allOrders));
    setAllOrders(allOrders);
  }, []);

  return (
    <>
      <Container maxWidth="1080px">
        <Flex justify="left" padding="40px 0">
          <Heading>Pedidos atendidos:</Heading>
        </Flex>
        <Flex w="100%" maxHeight="800px" direction="column" overflowY="scroll">
          {allOrders.map(order => {
            return <OrderCard order={order} />;
          })}
        </Flex>
      </Container>
    </>
  );
}
