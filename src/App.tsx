/** @format */

import React from 'react';
import styled from 'styled-components';

import ContactList from './components/contact-list/contact-list';
import Header from './components/header/header';
import SearchBar from './components/search-bar/search-bar';

const StyledContanier = styled.section`
  margin: auto;
  border: 1px solid black;
  width: 375px;
  height: 667px;
  padding: 15px 20px;
`;

function App() {
  return (
    <StyledContanier>
      <Header />
      <SearchBar />
      <ContactList />
    </StyledContanier>
  );
}

export default App;
