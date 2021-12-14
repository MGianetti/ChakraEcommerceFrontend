import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import store from './store/store';
import styles from './App.module.css';

import LoggedOutLayout from './components/logged-out-layout/logged-out-layout.component';
import LoginPage from './components/login-page/login-page.component';
import SignUpPage from './components/sign-up-page/sign-up-page.component';

import LoggedLayout from './components/logged-layout/logged-layout.component';
import ProductsListPage from './components/products-list-page/products-list-page.component';
import CartPage from './components/cart-page/cart-page.component';
import OrdersListPage from './components/orders-list-page/orders-list-page.component';
import NewProductPage from './components/new-product-page/new-product-page.component';

function App() {
  const isUserAuthenticated = false;
  const isUserAdmin = true;

  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Box textAlign="center" fontSize="xl">
          <BrowserRouter>
            <Routes>
              {isUserAuthenticated ? (
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
                  {isUserAdmin && (
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
                    <p>Página nao encontrada</p>
                  </main>
                }
              />
            </Routes>
          </BrowserRouter>
        </Box>
      </Provider>
    </ChakraProvider>
  );
}

export default App;

// isUserAuthenticated ? (
//   <LoggedLayout>
//     <ProductsListPage />
//   </LoggedLayout>
// ) : (
//   <LoggedOutLayout>
//     <LoginPage />
//   </LoggedOutLayout>
// )
