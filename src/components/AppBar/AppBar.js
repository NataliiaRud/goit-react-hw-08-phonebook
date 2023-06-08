import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { Container, List } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <List>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </List>
    </Container>
  );
};

export default AppBar;
