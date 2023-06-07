import { Container } from 'components/LoginForm/LoginForm.styled';
import { LoginForm } from 'components/LoginForm/LoginForm';

export function Login() {
  return (
    <Container>
      <div>
        <h1>Log in</h1>

        <LoginForm />
      </div>
    </Container>
  );
}
