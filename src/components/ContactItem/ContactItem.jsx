import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperation from 'redux/contactsOperation';
import { Spinner } from '../Spinner/Spinner';
import style from './ContactItem.module.scss';
import { isDeleteLoading } from 'redux/contactsSlice';
// import { useState } from 'react';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const loading = useSelector(isDeleteLoading);

  const handleDeleteContact = contactId => {
    dispatch(contactsOperation.deleteContact(contactId));
  };

  return (
    <li className={style.item}>
      <span className={style.itemName}>{name}:</span>
      <span className={style.itemNumber}>{number}</span>
      <button
        type="button"
        onClick={() => handleDeleteContact(id)}
        className={style.delete_btn}
        disabled={loading}
      >
        {!loading ? 'x' : <Spinner size={20} />}
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

// Через локальный стейт
// const ContactItem = ({ id, name, number }) => {
//   const dispatch = useDispatch();

//   const [loading, setLoading] = useState(false);

//   const handleDeleteContact = contactId => {
//     setLoading(true);
//     dispatch(contactsOperation.deleteContact(contactId));
//   };

//   return (
//     <li className={style.item}>
//       <span className={style.itemName}>{name}:</span>
//       <span className={style.itemNumber}>{number}</span>
//       <button
//         type="button"
//         onClick={() => handleDeleteContact(id)}
//         className={style.delete_btn}
//         disabled={loading}
//       >
//         {!loading ? 'x' : <Spinner size={20} />}
//       </button>
//     </li>
//   );
// };
