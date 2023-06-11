import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Button, Wrap, Title } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrap>
      <Title>Welcome, {user.name}</Title>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Wrap>
  );
};
