import {
  FormControl,
  FormLabel,
  Input,
  Container,
  Flex,
  Button,
  ButtonGroup,
  Heading,
  Text,
} from '@chakra-ui/react';

export default function LoginPage(props) {
  return (
    <>
      <Container justify="center">
        <Flex justify="center" direction="column" height="800px">
          <Flex justify="center" height="200px" direction="column">
            <Heading>Eshop</Heading>
            <Text>Faça seu login para comprar</Text>
          </Flex>
          <Flex justify="center" alignItems="center" height="100px">
            <FormControl id="email" width="300px">
              <FormLabel>Endereço de email</FormLabel>
              <Input type="email" />
              <FormLabel>Senha</FormLabel>
              <Input type="password" />
            </FormControl>
          </Flex>
          <Flex justify="center" alignItems="center" height="200px">
            <ButtonGroup variant="outline" spacing="6">
              <Button variant="ghost">Cadastro</Button>
              <Button variant="solid" colorScheme="blue">
                Entrar
              </Button>
            </ButtonGroup>
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
