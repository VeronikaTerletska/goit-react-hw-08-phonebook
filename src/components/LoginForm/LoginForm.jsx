import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import {
  ContainerMain,
  Form,
  LabelForm,
  TextLabel,
  InputForm,
  InfoSpan,
  ButtonSubmit,
} from './LoginForm.styled';
import { Section } from 'components/Section/Section';
// import LoadingButton from '@mui/lab/LoadingButton';
// import SendIcon from '@mui/icons-material/Send';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const logInData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    if (!logInData.email || !logInData.password) {
      alert(`Field should not be empty`);
      return;
    }

    dispatch(logIn(logInData));

    form.reset();
  };

  return (
    <ContainerMain>
      <Section title="LogIn">
        <Form onSubmit={handleSubmit} autoComplete="off">
          <LabelForm>
            <TextLabel>Email</TextLabel>
            <InputForm type="email" name="email" />
          </LabelForm>
          <LabelForm>
            <TextLabel>
              Password <InfoSpan>(min 8 signs)</InfoSpan>
            </TextLabel>
            <InputForm type="password" name="password" />
          </LabelForm>
          <ButtonSubmit type="submit">Log In</ButtonSubmit>
        </Form>
      </Section>
    </ContainerMain>
  );
};
