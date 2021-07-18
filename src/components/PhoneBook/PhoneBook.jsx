import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Breakpoints from 'components/Breakpoints/Breakpoints';
import styles from './PhoneBook.module.css';

const PhoneBook = () => {
  return (
    <>
      <Breakpoints>
        <div className={styles.PhoneBook}>
          <ContactForm />
          <Filter />
          <ContactList />
      </div>
      </Breakpoints>
    </>
  );
};

export default PhoneBook;