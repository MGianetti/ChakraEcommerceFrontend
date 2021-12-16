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
  Text,
  Link,
  FormErrorMessage,
} from '@chakra-ui/react';

import { Link as ReachLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { authUser } from '../../services/auth-service/auth-service.service';
import { logIn } from '../../store/user/userSlice';
import { validateField } from '../utils/validate-field';

export default function LoginPage() {
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isFormValidAt, setIsFormValidAt] = useState({
    email: true,
    password: true,
  });

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const dispatch = useDispatch();

  const handleFormFieldChange = (event, field) => {
    setIsFormValidAt({
      ...isFormValidAt,
      [field]: validateField[field](event.currentTarget.value),
    });
    setUserCredentials({
      ...userCredentials,
      [field]: event.currentTarget.value,
    });
  };

  const handleLoginClick = async e => {
    if (isFormValidAt.email && isFormValidAt.password) {
      setIsLoginLoading(true);
      const answer = await authUser(userCredentials);
      dispatch(logIn(answer));
      setIsLoginLoading(false);
    } else {
      alert('Preencha o form corretamente!');
    }
  };

  return (
    <>
      <Container justify="center">
        <Flex justify="center" direction="column" height="800px">
          <Flex justify="center" height="200px" direction="column">
            <Heading>Eshop</Heading>
            <Text>Faça seu login para comprar</Text>
          </Flex>
          <Flex
            justify="center"
            alignItems="center"
            height="100px"
            direction="column"
          >
            <FormControl
              id="email"
              width="300px"
              isInvalid={!isFormValidAt.email}
            >
              <FormLabel>Endereço de email</FormLabel>
              <Input
                type="email"
                onChange={event => handleFormFieldChange(event, 'email')}
                value={email}
                isRequired
              />
              <FormErrorMessage>Digite um email válido</FormErrorMessage>
            </FormControl>
            <FormControl
              id="email"
              width="300px"
              isInvalid={!isFormValidAt.password}
            >
              <FormLabel>Senha</FormLabel>
              <Input
                type="password"
                onChange={event => handleFormFieldChange(event, 'password')}
                value={password}
                isRequired
              />
              <FormErrorMessage>Digite sua senha</FormErrorMessage>
            </FormControl>
          </Flex>
          <Flex justify="center" alignItems="center" height="200px">
            <ButtonGroup variant="outline" spacing="6">
              <Button variant="ghost">
                <Link as={ReachLink} to="/cadastro" w="100%">
                  Cadastro
                </Link>
              </Button>
              <Button
                variant="solid"
                colorScheme="blue"
                type="submit"
                isLoading={isLoginLoading}
              >
                <Link as={ReachLink} to="/" w="100%" onClick={handleLoginClick}>
                  Entrar
                </Link>
              </Button>
            </ButtonGroup>
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
