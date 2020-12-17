/** @format */

import React from 'react';
import styled from 'styled-components';

import ContactListItem from './contact-list-item';

interface Props {
  contactList: ContactListType[];
  updateFavorite: (item: ContactListType) => void;
}

const ContactList: React.FC<Props> = ({ contactList, updateFavorite }) => {
  return (
    <section>
      <ul>
        {contactList.map((data) => (
          <ContactListItem
            key={data.phoneNumber}
            contactListData={data}
            updateFavorite={updateFavorite}
          />
        ))}
      </ul>
    </section>
  );
};

export default React.memo(ContactList);
