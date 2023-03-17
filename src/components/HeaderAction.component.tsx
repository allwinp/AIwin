import { createStyles, Header, Container, Button, Image, Flex, rem, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles(() => ({
  inner: {
    height: HEADER_HEIGHT,
    width: 'full',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter',
  },
}));

export function HeaderAction() {
  const { classes } = useStyles();

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }}>
      <Container className={classes.inner} fluid>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <Flex gap={10} align="center" justify="start">
            <Image height={60} fit="contain" src="src/logo.png" alt="" />
            <Title fw={5000} className={classes.title}>
              AIwin
            </Title>
          </Flex>
        </Link>
        <Link to="/generate">
          <Button color="violet.4" radius="xl" h={30}>
            Generate
          </Button>
        </Link>
      </Container>
    </Header>
  );
}