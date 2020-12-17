/** @format */

import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  margin-bottom: 15px;
`;

const H1 = styled.h1`
  font-size: 23px;
  font-weight: 600;
`;

const Header = () => {
  return (
    <StyledHeader>
      <H1>연락처</H1>
    </StyledHeader>
  );
};

export default Header;
