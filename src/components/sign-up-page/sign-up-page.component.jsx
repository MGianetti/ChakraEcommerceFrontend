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
import { validateField } from '../utils/validate-field';

import { Link as ReachLink } from 'react-router-dom';

export default function SignUpPage() {
  const [isSignUpLoading, setIsSignUpLoading] = useState(false);

  const [isFormValidAt, setIsFormValidAt] = useState({
    email: true,
    password: true,
    userName: true,
    name: true,
  });

  const [userSignUp, setUserSignUp] = useState({
    email: '',
    password: '',
    userName: '',
    name: '',
  });

  const { email, password, userName, name } = userSignUp;

  const handleFormFieldChange = (event, field) => {
    setIsFormValidAt({
      ...isFormValidAt,
      [field]: validateField[field](event.currentTarget.value),
    });
    setUserSignUp({ ...userSignUp, [field]: event.currentTarget.value });
  };

  const handleSignUpClick = async e => {
    if (
      isFormValidAt.email &&
      isFormValidAt.password &&
      isFormValidAt.password &&
      isFormValidAt.userName
    ) {
      setIsSignUpLoading(true);
      await signUpNewUser(userSignUp);
      setIsSignUpLoading(false);
      alert('Usuário criado com sucesso!');
      setUserSignUp({
        email: '',
        password: '',
        userName: '',
        name: '',
      });
    } else {
      alert('Preencha o form corretamente!');
    }
  };

  return (
    <>
      <Container justify="center">
        <Flex justify="center" direction="column" height="800px">
          <Flex justify="center" height="150px">
            <Heading>Cadastre seu usuário</Heading>
          </Flex>
          <Flex
            justify="center"
            alignItems="center"
            height="300px"
            direction="column"
          >
            <FormControl
              id="email"
              width="400px"
              isInvalid={!isFormValidAt.email}
            >
              <FormLabel>Endereço de email</FormLabel>
              <Input
                type="email"
                onChange={event => handleFormFieldChange(event, 'email')}
                value={email}
              />
              <FormErrorMessage>Digite um email válido</FormErrorMessage>
            </FormControl>
            <FormControl
              id="password"
              width="400px"
              isInvalid={!isFormValidAt.password}
            >
              <FormLabel>Senha</FormLabel>
              <Input
                type="password"
                onChange={event => handleFormFieldChange(event, 'password')}
                value={password}
              />
              <FormErrorMessage>Digite uma senha válida</FormErrorMessage>
            </FormControl>
            <FormControl
              id="userName"
              width="400px"
              isInvalid={!isFormValidAt.userName}
            >
              <FormLabel>Nome de usuário</FormLabel>
              <Input
                onChange={event => handleFormFieldChange(event, 'userName')}
                value={userName}
              />
              <FormErrorMessage>Digite um usuário válido</FormErrorMessage>
            </FormControl>
            <FormControl
              id="name"
              width="400px"
              isInvalid={!isFormValidAt.name}
            >
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
