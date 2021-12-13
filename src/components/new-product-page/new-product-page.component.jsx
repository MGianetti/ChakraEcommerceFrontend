import {
  FormControl,
  FormLabel,
  Input,
  Container,
  Flex,
  Button,
  ButtonGroup,
  Heading,
  Textarea,
} from '@chakra-ui/react';

export default function NewProductPage(props) {
  return (
    <>
      <Container maxWidth="1080px">
        <Flex justify="center" padding="40px 0">
          <Heading>Cadastrar novo produto</Heading>
        </Flex>
        <Flex
          w="100%"
          maxHeight="800px"
          direction="row"
          justifyContent="center"
        >
          <FormControl id="email" width="400px">
            <FormLabel>Nome do produto</FormLabel>
            <Input type="email" />
            <FormLabel>Descrição</FormLabel>
            <Textarea maxH="200px" type="password" />
            <FormLabel>Preço</FormLabel>
            <Input type="number" />
          </FormControl>
        </Flex>
        <Flex justify="center" alignItems="center" height="200px">
          <ButtonGroup variant="outline" spacing="6">
            <Button variant="ghost" colorScheme="gray">
              Cancelar
            </Button>
            <Button variant="solid" colorScheme="green">
              Cadastrar
            </Button>
          </ButtonGroup>
        </Flex>
      </Container>
    </>
  );
}
