import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectError, selectFilteredContacts } from 'redux/selectors';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const error = useSelector(selectError);

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {error && <p>{error}</p>}
      <List>
        {filteredContacts.map(({ name, id, number }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })}
      </List>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
