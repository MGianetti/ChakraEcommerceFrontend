import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import LoginPage from './components/login-page/login-page.component';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <LoginPage />
      </Box>
    </ChakraProvider>
  );
}

export default App;
