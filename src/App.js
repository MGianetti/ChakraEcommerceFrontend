import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import LoggedLayout from './components/logged-layout/logged-layout.component';
import ProductsListPage from './components/products-list-page/products-list-page.component';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <LoggedLayout>
          <ProductsListPage />
        </LoggedLayout>
      </Box>
    </ChakraProvider>
  );
}

export default App;
