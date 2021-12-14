import { Container, Flex } from '@chakra-ui/react';

export default function LoggedOutLayout({ children }) {
  return (
    <>
      <Container justify="center">
        <Flex justify="center" direction="column" height="800px">
          {children}
        </Flex>
      </Container>
    </>
  );
}
