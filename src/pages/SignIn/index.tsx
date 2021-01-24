import logo from '../../assets/logo.png';
import { useAuth } from '../../contexts/auth';

import { Container, Logo, Input, Button } from './styles';

function SignIn() {
  const { loading, signIn } = useAuth();

  function handleSignIn() {
    signIn();
  }

  return (
    <Container>
      <Logo src={logo} alt="CL Logo" />
      <Input type="text" defaultValue="test@email.com" />
      <Input type="password" defaultValue="12345678" />
      <Button onClick={handleSignIn}>
        {loading ? 'Carregando' : 'Entrar'}
      </Button>
    </Container>
  );
}

export default SignIn;
