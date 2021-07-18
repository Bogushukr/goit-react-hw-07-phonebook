import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from 'redux/contacts/contacts-actions';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  state = { name: '', number: '' };

  onChangeInputsHandler = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  findContact = contactName =>
    this.props.items.find(({ name }) => name === contactName);

  onSubmitHandler = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { onSave } = this.props;
    if (this.findContact(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    onSave(name, number);
    this.onResetInputsHandler();
  };

  onResetInputsHandler = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <section className={styles.ContactsForm}>
        <h1 className={styles.ContactsForm__title}>Phonebook</h1>
        <form
          className={styles.ContactsForm__form}
          onSubmit={this.onSubmitHandler}
        >
          <div className={styles.ContactsForm__field}>
            <label className={styles.ContactsForm__label}>
              Name
              <input
                className={styles.ContactsForm__input}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="The name can only consist of letters, apostrophes, dashes and spaces. for example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
                onChange={this.onChangeInputsHandler}
                value={name}
                required
              />
            </label>
          </div>
          <div className={styles.ContactsForm__field}>
            <label className={styles.ContactsForm__label}>
              Number
              <input
                className={styles.ContactsForm__input}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                onChange={this.onChangeInputsHandler}
                value={number}
                required
              />
            </label>
          </div>
          <div className={styles.ContactsForm__field}>
            <button className={styles.ContactsForm__button} type="submit">
              Add contact
            </button>
          </div>
        </form>
      </section>
    );
  }
}
const mapStateToProps = state => ({ items: state.contacts.items });

const mapDispatchToProps = dispatch => ({
  onSave: (name, number) => dispatch(actions.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);