/** @format */

import React from 'react';
import styled from 'styled-components';

const emptyHeart =
  'https://storage.googleapis.com/snuper-static/mock_users/heart_empty.svg';
const filledHeart =
  'https://storage.googleapis.com/snuper-static/mock_users/heart_filled.svg';

const StyledItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const Name = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const PhoneNumber = styled.p`
  font-size: 15px;
  font-weight: 400;
`;

const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 15px;
`;

const FavoritesBtn = styled.button`
  position: absolute;
  right: 12px;
  width: 25px;
  height: 25px;
  background: url(${emptyHeart}) no-repeat top left;
  background-size: contain;
`;

const ContactList = () => {
  return (
    <section>
      <ul>
        <StyledItem>
          <ProfileImage
            src='https://storage.googleapis.com/snuper-static/mock_users/1.svg'
            alt='profile'
          />
          <div>
            <Name>기길동</Name>
            <PhoneNumber>010-2222-2222</PhoneNumber>
          </div>
          <FavoritesBtn></FavoritesBtn>
        </StyledItem>
      </ul>
    </section>
  );
};

export default ContactList;
