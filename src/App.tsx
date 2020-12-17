/** @format */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ContactList from './components/contact-list/contact-list';
import Header from './components/header/header';
import SearchBar from './components/search-bar/search-bar';

const StyledContanier = styled.section`
  margin: 10px auto;
  border: 1px solid black;
  width: 375px;
  height: 667px;
  padding: 20px 15px;
  overflow-y: auto;
`;

interface Props {
  fetchContextList: () => Promise<ContactListType[]>;
}

const App: React.FC<Props> = ({ fetchContextList }) => {
  const [initailContactList, setInitailContactList] = useState<
    ContactListType[]
  >();
  const [contactList, setContactList] = useState<ContactListType[]>();

  useEffect(() => {
    fetchContextList() //
      .then((res) => sortForName(res))
      .then((res) => {
        const favoriteListWithLocal = localStorage.getItem('favoriteList');

        if (favoriteListWithLocal) {
          JSON.parse(favoriteListWithLocal) //
            .forEach((localData: ContactListType) => {
              const index = res.findIndex(
                (item) => item.phoneNumber === localData.phoneNumber
              );
              index !== -1 && res.splice(index, 1, localData);
            });
        }

        setContactList(res);
        setInitailContactList(res);
      });
  }, [fetchContextList]);

  const updateFavorite = (item: ContactListType) => {
    const index = contactList?.indexOf(item);
    const updated = [...contactList!];
    item.favorite = !item.favorite;
    updated[index!] = item;

    const favoriteList = updated.filter((li) => li.favorite === true);
    localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
    setContactList(updated);
  };

  const searchName = (e: any) => {
    const result = initailContactList!.filter(
      (li) => li.name.indexOf(e.target.value) !== -1
    );
    result && setContactList(sortForName(result));
    e.target.value.length === 0 && setContactList(initailContactList);
  };

  return (
    <StyledContanier>
      <Header />
      <SearchBar searchName={searchName} />
      {contactList && (
        <ContactList
          contactList={contactList}
          updateFavorite={updateFavorite}
        />
      )}
    </StyledContanier>
  );
};

function sortForName(list: ContactListType[]) {
  return list //
    .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
}

export default App;
