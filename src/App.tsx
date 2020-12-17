/** @format */

import React, { useCallback, useEffect, useState } from 'react';
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
  fetchContactList: () => Promise<ContactListType[]>;
}

const App: React.FC<Props> = ({ fetchContactList }) => {
  //초기화 및 데이터 검색을 위한 초기 데이터 목록입니다.
  const [initailContactList, setInitailContactList] = useState<
    ContactListType[]
  >();
  //사용자의 눈에 보여지는 목록입니다
  const [contactList, setContactList] = useState<ContactListType[]>();

  useEffect(() => {
    fetchContactList() //
      .then((res) => sortForName(res))
      .then((res) => {
        const favoriteListWithLocal = localStorage.getItem('favoriteList');
        // LocalStorage에 에 데이터가 있다면 즐겨찾기 부분을 업데이트 해줍니다.
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
      })
      .catch((err) => {
        console.log(err);
        const errData = [
          {
            name: '서버에 문제가 있습니다',
            phoneNumber: '00000000000',
            profileImage:
              'https://storage.googleapis.com/snuper-static/mock_users/11.svg',
            favorite: false,
          },
        ];
        setContactList(errData);
        setInitailContactList(errData);
      });
  }, [fetchContactList]);

  // 즐겨찾기 아이콘 클릭시 실행되는 함수입니다.
  const updateFavorite = useCallback(
    (item: ContactListType) => {
      const index = contactList?.indexOf(item);
      const updated = [...contactList!];

      item.favorite = !item.favorite;
      updated[index!] = item;
      const favoriteList = updated.filter((li) => li.favorite === true);

      localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
      setContactList(updated);
    },
    [contactList]
  );

  // 검색란에 값의 변경이 있을시 실행되는 함수입니다.
  const searchName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const result = initailContactList!.filter(
        (li) => li.name.indexOf(e.target.value) !== -1
      );
      result && setContactList(sortForName(result));
      e.target.value.length === 0 && setContactList(initailContactList);
    },
    [initailContactList]
  );

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

export default React.memo(App);
