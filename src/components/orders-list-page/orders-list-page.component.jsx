import { Container, Flex, Heading } from '@chakra-ui/react';

import OrderCard from './order-card/order-card.component';

export default function OrdersListPage(props) {
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
