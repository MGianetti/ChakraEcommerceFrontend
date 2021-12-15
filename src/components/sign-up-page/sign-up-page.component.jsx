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
  Link,
  FormErrorMessage,
} from '@chakra-ui/react';

import { signUpNewUser } from '../../services/auth-service/auth-service.service';

import { Link as ReachLink } from 'react-router-dom';

export default function SignUpPage(props) {
  const [isSignUpLoading, setIsSignUpLoading] = useState(false);
  const [hasInputErrors, setInputErrors] = useState(false);

  const [userSignUp, setUserSignUp] = useState({
    email: '',
    password: '',
    userName: '',
    name: '',
  });

  const handleFormFieldChange = (event, formKey) => {
    setUserSignUp({ ...userSignUp, [formKey]: event.currentTarget.value });
  };

  const isValidForm = () => {
    const { email, password, userName, name } = userSignUp;

    if (email === '' || password === '' || userName === '' || name === '') {
      setInputErrors(true);
      return false;
    }
    setInputErrors(false);
    return true;
  };

  const handleSignUpClick = async e => {
    if (isValidForm()) {
      setIsSignUpLoading(true);
      await signUpNewUser(userSignUp);
      setIsSignUpLoading(false);
      setUserSignUp({
        email: '',
        password: '',
        userName: '',
        name: '',
      });
    }
  };

  const { email, password, userName, name } = userSignUp;

  return (
    <>
      <Container justify="center">
        <Flex justify="center" direction="column" height="800px">
          <Flex justify="center" height="150px">
            <Heading>Cadastre seu usuário</Heading>
          </Flex>
          <Flex justify="center" alignItems="center" height="300px">
            <FormControl id="email" width="400px" isInvalid={hasInputErrors}>
              <FormLabel>Endereço de email</FormLabel>
              <Input
                type="email"
                onChange={event => handleFormFieldChange(event, 'email')}
                value={email}
              />
              <FormErrorMessage>Digite um email válido</FormErrorMessage>
              <FormLabel>Senha</FormLabel>
              <Input
                type="password"
                onChange={event => handleFormFieldChange(event, 'password')}
                value={password}
              />
              <FormErrorMessage>Digite uma senha válida</FormErrorMessage>
              <FormLabel>Nome de usuário</FormLabel>
              <Input
                onChange={event => handleFormFieldChange(event, 'userName')}
                value={userName}
              />
              <FormErrorMessage>Digite um usuário válido</FormErrorMessage>
              <FormLabel>Nome completo</FormLabel>
              <Input
                onChange={event => handleFormFieldChange(event, 'name')}
                value={name}
              />
              <FormErrorMessage>Digite um nome válido</FormErrorMessage>
            </FormControl>
          </Flex>
          <Flex justify="center" alignItems="center" height="200px">
            <ButtonGroup variant="outline" spacing="6">
              <Button variant="ghost" colorScheme="gray">
                <Link as={ReachLink} to="/" w="100%">
                  Voltar
                </Link>
              </Button>
              <Button
                variant="solid"
                colorScheme="green"
                isLoading={isSignUpLoading}
                onClick={handleSignUpClick}
              >
                Cadastrar
              </Button>
            </ButtonGroup>
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
