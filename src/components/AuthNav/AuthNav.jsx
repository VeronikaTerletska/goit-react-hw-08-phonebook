import { AuthNavContainer, AuthNavLink } from './AuthNav.styled';
import { Register } from 'pages/Register/Register';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <AuthNavLink to="/register" element={<Register />}>
        Register
      </AuthNavLink>
      <AuthNavLink to="/login">LogIn</AuthNavLink>
    </AuthNavContainer>
  );
};
