import { Contacts } from 'pages/Contacts/Contacts';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { NavContainer, StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavContainer>
      <StyledNavLink to="/" end>
        Home
      </StyledNavLink>
      {isLoggedIn && (
        <StyledNavLink to="/phonebook" element={<Contacts />}>
          Phonebook
        </StyledNavLink>
      )}
    </NavContainer>
  );
};
