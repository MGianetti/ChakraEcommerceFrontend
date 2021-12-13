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
} from '@chakra-ui/react';

import { RiShoppingCartLine } from 'react-icons/ri';

export default function LoggedLayout(props) {
  const { children } = props;

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
              <Link>Produtos</Link>
              <Spacer />
              <Link>Pedidos</Link>
              <Spacer />
              <Link>Novo Produto</Link>
            </Flex>
            <Flex>
              <Menu>
                <MenuButton>
                  <RiShoppingCartLine size={40} />
                  <Tag borderRadius="full">10</Tag>
                </MenuButton>
                <MenuList>
                  <MenuItem>Ver carrinho</MenuItem>
                  <MenuItem>Logout</MenuItem>
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
