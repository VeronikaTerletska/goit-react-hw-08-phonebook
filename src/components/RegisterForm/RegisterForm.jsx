import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import {
  ContainerMain,
  Form,
  LabelForm,
  TextLabel,
  InputForm,
  InfoSpan,
  ButtonSubmit,
} from 'components/LoginForm/LoginForm.styled';
import { Section } from 'components/Section/Section';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    if (!formData.name || !formData.email || !formData.password) {
      alert(`Field should not be empty`);
      return;
    }

    dispatch(register(formData));
    form.reset();
  };

  return (
    <ContainerMain>
      <Section title="Register">
        <Form onSubmit={handleSubmit} autoComplete="off">
          <LabelForm>
            <TextLabel>Username</TextLabel>
            <InputForm type="text" name="name" />
          </LabelForm>
          <LabelForm>
            <TextLabel>Email</TextLabel>

            <InputForm type="email" name="email" />
          </LabelForm>
          <LabelForm>
            <TextLabel>
              Password <InfoSpan>(min 8 symbols)</InfoSpan>
            </TextLabel>

            <InputForm type="password" name="password" />
          </LabelForm>
          <ButtonSubmit type="submit">Register</ButtonSubmit>
        </Form>
      </Section>
    </ContainerMain>
  );
};
