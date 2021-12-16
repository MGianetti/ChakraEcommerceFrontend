import { Container, Flex } from '@chakra-ui/react';

export default function LoggedOutLayout(props) {
  const { children } = props;
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
