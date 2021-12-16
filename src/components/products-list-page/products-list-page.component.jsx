/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Flex, Grid, Heading } from '@chakra-ui/react';

import ProductCard from './product-card/product-card.component';
import { getAllItems } from '../../services/items-service/items-service.service';
import { fetchAllItems } from '../../store/items/itemsSlice';

export default function ProductsListPage() {
  const [itemsForSale, setItemsForSale] = useState([]);

  const dispatch = useDispatch();

  useEffect(async () => {
    const allItems = await getAllItems();
    dispatch(fetchAllItems(allItems));
    setItemsForSale(allItems);
  }, []);

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
          {itemsForSale.map(itemForSale => {
            return <ProductCard itemForSale={itemForSale} />;
          })}
        </Grid>
      </Container>
    </>
  );
}
