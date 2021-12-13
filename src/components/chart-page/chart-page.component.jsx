import {
  Container,
  Flex,
  Button,
  ButtonGroup,
  Heading,
} from '@chakra-ui/react';

import ChartIcon from './chart-item/chart-item.component';

export default function ChartPage(props) {
  return (
    <>
      <Container maxWidth="1080px">
        <Flex justify="center" padding="40px 0">
          <Heading>Meu carrinho</Heading>
        </Flex>
        <Flex w="100%" maxHeight="300px" direction="column" overflowY="scroll">
          <ChartIcon />
          <ChartIcon />
          <ChartIcon />
          <ChartIcon />
          <ChartIcon />
          <ChartIcon />
          <ChartIcon />
          <ChartIcon />
          <ChartIcon />
          <ChartIcon />
          <ChartIcon />
          <ChartIcon />
          <ChartIcon />
        </Flex>
        <Heading w="100%" textAlign="right" marginTop="25px">
          Total: ${200}
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
