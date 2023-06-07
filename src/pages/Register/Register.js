import { Container } from 'components/RegisterForm/RegisterForm.styled';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export function Register() {
  return (
    <Container>
      <div>
        <h1>Registration</h1>

        <RegisterForm />
      </div>
    </Container>
  );
}
