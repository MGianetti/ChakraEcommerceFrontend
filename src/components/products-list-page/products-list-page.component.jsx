import { Container, Flex, Grid, Heading } from '@chakra-ui/react';
import ProductCard from './product-card/product-card.component';

export default function ProductsListPage(props) {
  return (
    <>
      <Container maxWidth="1080px">
        <Flex justify="left" margin="40px 0">
          <Heading>Produtos a venda:</Heading>
        </Flex>
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={6}
          maxHeight="800px"
          overflow="scroll"
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Grid>
      </Container>
    </>
  );
}
