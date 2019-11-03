import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        type: 'personal',
        id: 1,
        name: 'Sam Smith',
        email: 'samsmith@gmail.com',
        phone: '554-555-2222'
      },
      {
        type: 'professional',
        id: 2,
        name: 'Mike Mayers',
        email: 'magicmike@gmail.com',
        phone: '554-555-5555'
      },
      {
        type: 'personal',
        id: 3,
        name: 'Sarah Conor',
        email: 'sarahc@gmail.com',
        phone: '554-333-2222'
      }
    ]
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
