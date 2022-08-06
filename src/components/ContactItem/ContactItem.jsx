import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import style from './ContactItem.module.scss';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <li className={style.item}>
      <span className={style.itemName}>{name}:</span>
      <span className={style.itemNumber}>{number}</span>
      <button
        type="button"
        onClick={() => handleDeleteContact(id)}
        className={style.delete_btn}
      >
        x
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
