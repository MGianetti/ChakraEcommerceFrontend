import { useState } from 'react';
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
  FormErrorMessage,
} from '@chakra-ui/react';

import { createNewItem } from '../../services/items-service/items-service.service';
import { addItem } from '../../store/items/itemsSlice';
import { useDispatch } from 'react-redux';

export default function NewProductPage(props) {
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [hasInputErrors, setInputErrors] = useState(false);

  const [newProductData, setNewProductData] = useState({
    price: 0,
    description: '',
    productName: '',
  });

  const dispatch = useDispatch();

  const handleFormFieldChange = (event, formKey) => {
    setNewProductData({
      ...newProductData,
      [formKey]: event.currentTarget.value,
    });
  };

  const handleRegisterClick = async e => {
    if (isValidForm()) {
      setIsLoginLoading(true);
      await createNewItem(newProductData);
      dispatch(addItem(newProductData));
      setIsLoginLoading(false);
      setNewProductData({
        price: 0,
        description: '',
        productName: '',
      });
      alert('Produto criado com sucesso!');
    }
  };

  const isValidForm = () => {
    const { price, description, productName } = newProductData;
    if (price === '' || description === '' || productName === '') {
      setInputErrors(true);
      return false;
    }
    setInputErrors(false);
    return true;
  };

  const { productName, description, price } = newProductData;

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
          <FormControl id="email" width="400px" isInvalid={hasInputErrors}>
            <FormLabel>Nome do produto</FormLabel>
            <Input
              type="text"
              value={productName}
              onChange={event => handleFormFieldChange(event, 'productName')}
            />
            <FormErrorMessage>Digite um nome válido</FormErrorMessage>
            <FormLabel>Descrição</FormLabel>
            <Textarea
              maxH="200px"
              type="text"
              value={description}
              onChange={event => handleFormFieldChange(event, 'description')}
            />
            <FormErrorMessage>Digite uma descrição válida</FormErrorMessage>
            <FormLabel>Preço</FormLabel>
            <Input
              type="number"
              value={price}
              onChange={event => handleFormFieldChange(event, 'price')}
            />
            <FormErrorMessage>Digite um preço válido</FormErrorMessage>
          </FormControl>
        </Flex>
        <Flex justify="center" alignItems="center" height="200px">
          <ButtonGroup variant="outline" spacing="6">
            <Button variant="ghost" colorScheme="gray">
              Cancelar
            </Button>
            <Button
              variant="solid"
              colorScheme="green"
              isLoading={isLoginLoading}
              onClick={handleRegisterClick}
            >
              Cadastrar
            </Button>
          </ButtonGroup>
        </Flex>
      </Container>
    </>
  );
}
