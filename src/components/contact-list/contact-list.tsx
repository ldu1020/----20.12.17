/** @format */

import React from 'react';
import styled from 'styled-components';
import ContactListItem from './contact-list-item';

interface Props {
  contactList: ContactListType[];
  updateFavorite: (item: ContactListType) => void;
}

const StyledUl = styled.ul`
  overflow-y: auto;
`;

const ContactList: React.FC<Props> = ({ contactList, updateFavorite }) => {
  return (
    <section>
      <StyledUl>
        {contactList.map((data) => (
          <ContactListItem
            key={data.phoneNumber}
            contactListData={data}
            updateFavorite={updateFavorite}
          />
        ))}
      </StyledUl>
    </section>
  );
};

export default ContactList;
