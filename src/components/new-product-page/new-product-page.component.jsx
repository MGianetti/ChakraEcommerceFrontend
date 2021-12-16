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

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createNewItem } from '../../services/items-service/items-service.service';
import { addItem } from '../../store/items/itemsSlice';
import { validateField } from '../utils/validate-field';

export default function NewProductPage() {
  const [isLoginLoading, setIsLoginLoading] = useState(false);

  const [isFormValidAt, setIsFormValidAt] = useState({
    price: true,
    description: true,
    productName: true,
  });

  const [newProductData, setNewProductData] = useState({
    price: 0,
    description: '',
    productName: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormFieldChange = (event, field) => {
    setIsFormValidAt({
      ...isFormValidAt,
      [field]: validateField[field](event.currentTarget.value),
    });
    setNewProductData({
      ...newProductData,
      [field]: event.currentTarget.value,
    });
  };

  const handleRegisterClick = async () => {
    if (
      isFormValidAt.description &&
      isFormValidAt.price &&
      isFormValidAt.productName
    ) {
      setIsLoginLoading(true);
      await createNewItem(newProductData);
      dispatch(addItem(newProductData));
      setIsLoginLoading(false);
      alert('Produto criado com sucesso!');
      setNewProductData({
        price: 0,
        description: '',
        productName: '',
      });
    } else {
      alert('Preencha o form corretamente!');
    }
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
          justify="center"
          alignItems="center"
          height="300px"
          direction="column"
        >
          <FormControl
            id="productName"
            width="400px"
            isInvalid={!isFormValidAt.productName}
          >
            <FormLabel>Nome do produto</FormLabel>
            <Input
              type="text"
              value={productName}
              onChange={event => handleFormFieldChange(event, 'productName')}
            />
            <FormErrorMessage>Digite um nome válido</FormErrorMessage>
          </FormControl>
          <FormControl
            id="description"
            width="400px"
            isInvalid={!isFormValidAt.description}
          >
            <FormLabel>Descrição</FormLabel>
            <Textarea
              maxH="200px"
              type="text"
              value={description}
              onChange={event => handleFormFieldChange(event, 'description')}
            />
            <FormErrorMessage>Digite uma descrição válida</FormErrorMessage>
          </FormControl>
          <FormControl
            id="price"
            width="400px"
            isInvalid={!isFormValidAt.price}
          >
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
            <Button
              variant="ghost"
              colorScheme="gray"
              onClick={() => navigate('/')}
            >
              Voltar
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
