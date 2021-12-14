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

import { authUser } from '../../services/auth-service/auth-service.service';
import { logIn } from '../../store/user/userSlice';
import { useDispatch } from 'react-redux';

export default function LoginPage(props) {
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [hasInputErrors, setInputErrors] = useState(false);

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleEmailChange = event => {
    const { currentTarget } = event;
    setUserCredentials({ ...userCredentials, email: currentTarget.value });
  };

  const handlePasswordChange = event => {
    const { currentTarget } = event;
    setUserCredentials({ ...userCredentials, password: currentTarget.value });
  };

  const handleLoginClick = async e => {
    if (isValidForm()) {
      setIsLoginLoading(true);
      const answer = await authUser(userCredentials);
      dispatch(logIn(answer));
      setIsLoginLoading(false);
    }
  };

  const isValidForm = () => {
    const { email, password } = userCredentials;
    if (email === '' || password === '') {
      setInputErrors(true);
      return false;
    }
    setInputErrors(false);
    return true;
  };

  const { email, password } = userCredentials;

  return (
    <>
      <Container justify="center">
        <Flex justify="center" direction="column" height="800px">
          <Flex justify="center" height="200px" direction="column">
            <Heading>Eshop</Heading>
            <Text>Faça seu login para comprar</Text>
          </Flex>
          <Flex justify="center" alignItems="center" height="100px">
            <FormControl id="email" width="300px" isInvalid={hasInputErrors}>
              <FormLabel>Endereço de email</FormLabel>
              <Input
                type="email"
                onChange={handleEmailChange}
                value={email}
                isRequired
              />
              <FormErrorMessage>Digite um email válido</FormErrorMessage>
              <FormLabel>Senha</FormLabel>
              <Input
                type="password"
                onChange={handlePasswordChange}
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
