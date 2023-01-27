import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/authOperations';
import { UserMenuContainer, UserTitle, LogOutButton } from './UserMenu.styled';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <UserMenuContainer>
      <UserTitle>Welcome, {user.name} </UserTitle>
      <LogOutButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogOutButton>
    </UserMenuContainer>
  );
};
