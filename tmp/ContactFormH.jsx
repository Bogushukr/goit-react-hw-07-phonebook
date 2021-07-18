import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './ContactForm.module.css';

const ContactFormH = ({ items, onSave, setNotify }) => {
  let timer = null;
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function onChangeInputsHandler(event) {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  }

  function findContact(contactName) {
    items.find(({ name }) => name === contactName);
  }

  function onResetInputsHandler() {
    setName('');
    setNumber('');
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    if (findContact(name)) {
      setNotify({ state: true, message: `${name} is already in contacts.` });
      timer = setTimeout(() => {
        setNotify({
          state: false,
        });
      }, 2000);
      return;
    }
    onSave(name, number);
    onResetInputsHandler();
  }

  return null;
};

ContactFormH.propTypes = {
  onSave: PropTypes.func.isRequired,
  setNotify: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactFormH;
