import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';

import LoggedOutLayout from './components/logged-out-layout/logged-out-layout.component';
import LoginPage from './components/login-page/login-page.component';
import SignUpPage from './components/sign-up-page/sign-up-page.component';
import LoggedLayout from './components/logged-layout/logged-layout.component';
import ProductsListPage from './components/products-list-page/products-list-page.component';
import CartPage from './components/cart-page/cart-page.component';
import OrdersListPage from './components/orders-list-page/orders-list-page.component';
import NewProductPage from './components/new-product-page/new-product-page.component';

import styles from './App.module.css';

function App() {
  const currentUser = useSelector(state => state.user);
  const { isAdmin, isAuthenticated } = currentUser;

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <BrowserRouter>
          <Routes>
            {isAuthenticated ? (
              <>
                <Route
                  path="/"
                  element={
                    <LoggedLayout>
                      <ProductsListPage />
                    </LoggedLayout>
                  }
                />
                <Route
                  path="/pedidos"
                  element={
                    <LoggedLayout>
                      <OrdersListPage />
                    </LoggedLayout>
                  }
                />
                <Route
                  path="/carrinho"
                  element={
                    <LoggedLayout>
                      <CartPage />
                    </LoggedLayout>
                  }
                />
                {isAdmin && (
                  <Route
                    path="/novo-produto"
                    element={
                      <LoggedLayout>
                        <NewProductPage />
                      </LoggedLayout>
                    }
                  />
                )}
              </>
            ) : (
              <>
                <Route
                  path="/"
                  element={
                    <LoggedOutLayout>
                      <LoginPage />
                    </LoggedOutLayout>
                  }
                />
                <Route
                  path="/cadastro"
                  element={
                    <LoggedOutLayout>
                      <SignUpPage />
                    </LoggedOutLayout>
                  }
                />
              </>
            )}
            <Route
              path="*"
              element={
                <main style={{ padding: '1rem' }}>
                  <p>Página nao encontrada.</p>
                </main>
              }
            />
          </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
