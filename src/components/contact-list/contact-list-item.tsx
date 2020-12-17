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
  margin-bottom: 15px;
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
  background: ${(props: { favorite: boolean }) =>
    `url(${props.favorite ? filledHeart : emptyHeart}) no-repeat top left`};
  background-size: contain;
`;

interface Props {
  contactListData: ContactListType;
  updateFavorite: (item: ContactListType) => void;
}

const ContactListItem: React.FC<Props> = ({
  contactListData,
  updateFavorite,
}) => {
  const { name, phoneNumber, profileImage, favorite } = contactListData;

  return (
    <StyledItem>
      <ProfileImage src={profileImage} alt='profile' />
      <div>
        <Name>{name}</Name>
        <PhoneNumber>{addHipen(phoneNumber)}</PhoneNumber>
      </div>
      <FavoritesBtn
        favorite={favorite!}
        onClick={() => {
          updateFavorite(contactListData);
        }}
      />
    </StyledItem>
  );
};

function addHipen(phoneNumner: string) {
  return (
    phoneNumner.substr(0, 3) +
    '-' +
    phoneNumner.substr(3, 4) +
    '-' +
    phoneNumner.substr(7)
  );
}

export default ContactListItem;
