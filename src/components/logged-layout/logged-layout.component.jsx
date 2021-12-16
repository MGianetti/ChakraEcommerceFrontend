import { Link as ReachLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RiShoppingCartLine } from 'react-icons/ri';
import {
  Box,
  Container,
  Flex,
  Link,
  Menu,
  Tag,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Heading,
} from '@chakra-ui/react';

import { logOut } from '../../store/user/userSlice';
import { clearCart } from '../../store/cart/cartSlice';

export default function LoggedLayout(props) {
  const { children } = props;
  const { userName, isAdmin } = useSelector(state => state.user);
  const cartItemsQuantity = useSelector(state => state.cart.items.length);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearCart());
    dispatch(logOut());
  };

  return (
    <>
      <Box as="nav" width="100%" height="100px" bg="green.200">
        <Container>
          <Flex
            justify="space-around"
            alignItems="center"
            alignContent="center"
            height="100px"
          >
            <Flex width="400px">
              <Link as={ReachLink} to="/">
                Produtos
              </Link>
              <Spacer />
              <Link as={ReachLink} to="/pedidos">
                Pedidos
              </Link>
              <Spacer />
              {isAdmin && (
                <Link as={ReachLink} to="/novo-produto">
                  Novo Produto
                </Link>
              )}
            </Flex>
            <Flex alignItems="center">
              <Menu>
                <Heading size="sm" marginRight="20px" color="messenger.800">
                  {userName}
                </Heading>
                <MenuButton>
                  <RiShoppingCartLine size={40} />
                  <Tag borderRadius="full">{cartItemsQuantity}</Tag>
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link as={ReachLink} to="/carrinho" w="100%">
                      Meu carrinho
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link as={ReachLink} to="/" w="100%" onClick={handleLogout}>
                      Logout
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
        </Container>
      </Box>
      {children}
      <Box mx="auto" as="footer" width="100%" height="80px" bg="green.200" />
    </>
  );
}
