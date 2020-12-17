/** @format */

import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
  margin-bottom: 15px;
  position: relative;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 29px;
  font-size: 15px;
  background-color: #dfdfdf;
  border-radius: 5px;
  padding: 6px;
  padding-left: 30px;
  outline: none;
  border: none;
`;

const InputIcon = styled.img`
  height: 100%;
  padding: 7px;
  position: absolute;
  left: 0;
`;

const SearchIcon =
  'https://storage.googleapis.com/snuper-static/mock_users/search.svg';

const SearchBar = () => {
  return (
    <StyledForm>
      <InputIcon src={SearchIcon} />
      <StyledInput placeholder='검색'></StyledInput>
    </StyledForm>
  );
};

export default SearchBar;
