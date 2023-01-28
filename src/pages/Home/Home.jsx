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

        <HomeText>You can save your contacts here.</HomeText>
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
