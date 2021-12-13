import {
  FormControl,
  FormLabel,
  Input,
  Container,
  Flex,
  Button,
  ButtonGroup,
  Heading,
} from '@chakra-ui/react';

export default function SignUpPage(props) {
  return (
    <>
      <Container justify="center">
        <Flex justify="center" direction="column" height="800px">
          <Flex justify="center" height="150px">
            <Heading>Cadastre seu usuário</Heading>
          </Flex>
          <Flex justify="center" alignItems="center" height="200px">
            <FormControl id="email" width="400px">
              <FormLabel>Endereço de email</FormLabel>
              <Input type="email" />
              <FormLabel>Senha</FormLabel>
              <Input type="password" />
              <FormLabel>Nome de usuário</FormLabel>
              <Input />
              <FormLabel>Nome completo</FormLabel>
              <Input />
            </FormControl>
          </Flex>
          <Flex justify="center" alignItems="center" height="200px">
            <ButtonGroup variant="outline" spacing="6">
              <Button variant="ghost" colorScheme="gray">
                Voltar
              </Button>
              <Button variant="solid" colorScheme="green">
                Cadastrar
              </Button>
            </ButtonGroup>
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
