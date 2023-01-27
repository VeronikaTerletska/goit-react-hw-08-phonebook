import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/selectors';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { fetchContacts } from 'redux/operations';
import { ContainerMain } from './Contacts.styled';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';

export function Contacts() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContainerMain>
      {isLoggedIn ? (
        <>
          <Section title="Add contact in your Contacts book">
            <ContactForm />
          </Section>
          <Section title="Your contacts">
            <Filter />
            {isLoading && !error && <Loader />}
            <ContactList />
          </Section>
        </>
      ) : (
        <p>Please, sing in your account or register </p>
      )}
    </ContainerMain>
  );
}
