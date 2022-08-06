import { useAddContact } from 'hooks/useAddContact';
import style from './ContactForm.module.scss';

export const ContactForm = () => {
  const { name, number, handleSubmit, handleChangeInput } = useAddContact();

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label className={style.label}>
        Name
        <input
          type="text"
          name="name"
          className={style.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChangeInput}
          value={name}
          autoFocus
        />
      </label>

      <label className={style.label}>
        Number
        <input
          type="tel"
          name="number"
          className={style.input}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChangeInput}
          value={number}
        />
      </label>

      <button type="submit" className={style.submit_btn}>
        Add contact
      </button>
    </form>
  );
};
