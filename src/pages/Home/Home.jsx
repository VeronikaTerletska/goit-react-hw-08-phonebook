import {
  ContainerMain,
  HomeTitle,
  HomeText,
  HomeTextNavLink,
} from './Home.styled';

export default function Home() {
  return (
    <ContainerMain>
      <>
        <HomeTitle>Welcome to Contact Book</HomeTitle>

        <HomeText>
          This app will allow you to store your contacts easily and safely.
        </HomeText>
        <HomeText>
          To save or view your contacts press
          <HomeTextNavLink to="/register">Register</HomeTextNavLink>
          or
          <HomeTextNavLink to="/login">LogIn</HomeTextNavLink>.
        </HomeText>
      </>
    </ContainerMain>
  );
}
