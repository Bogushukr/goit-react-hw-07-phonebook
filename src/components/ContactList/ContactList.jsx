import { TransitionGroup, CSSTransition } from 'react-transition-group';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactList.module.css';
import ContactItem from 'components/ContactItem';

import listItemsActions from 'animations/listItemsActions.module.css';

const ContactList = ({ contacts, contactListRef, onDelete }) => {
  if (!contacts.length) {
    return null;
  }
  return (
    <section className={styles.ContactsList} ref={contactListRef}>
      <TransitionGroup component="ul" className={styles.ContactsList__list}>
        {contacts.map(({ id, name, number }) => {
          const contactItemRef = React.createRef();
          return (
            <CSSTransition
              key={id}
              timeout={250}
              classNames={listItemsActions}
              appear={true}
              nodeRef={contactItemRef}
            >
              <ContactItem
                name={name}
                number={number}
                cssRef={contactItemRef}
                onDelete={() => onDelete(id)}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </section>
  );
};

ContactList.defaultProps = { contacts: [] };

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ContactList;
