import { CSSTransition } from 'react-transition-group';
import React, { Component } from 'react';

import AppBar from 'components/AppBar';
import ContactForm from 'components/ContactForm';
import Notification from 'components/Notification';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

import styles from './PhoneBook.module.css';
import appearZoom from 'animations/appearZoom.module.css';

class PhoneBook extends Component {
  componentDidMount() {
    this.contactListRef = React.createRef();
    this.props.contactsFetch();
  }

  render() {
    return (
      <>
        <div className={styles.PhoneBook}>
          <AppBar />
          <ContactForm />
          <Filter />
          <CSSTransition
            in={true}
            appear={true}
            timeout={250}
            classNames={appearZoom}
            nodeRef={this.contactListRef}
            unmountOnExit
          >
            <ContactList contactListRef={this.contactListRef} />
          </CSSTransition>
        </div>

        <Notification />
      </>
    );
  }
}

export default PhoneBook;
