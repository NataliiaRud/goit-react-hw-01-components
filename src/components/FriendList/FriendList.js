import React from 'react';
import PropTypes from 'prop-types';
import {
  FriendContainer,
  FriendsList,
  FriendItem,
  Status,
  Avatar,
  Name,
} from './Friend.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendContainer>
      <FriendsList>
        {friends.map(item => (
          <FriendItem key={item.id}>
            <Status isOnline={item.isOnline}></Status>
            <Avatar src={item.avatar} alt={item.name} width="48" />
            <Name>{item.name}</Name>
          </FriendItem>
        ))}
      </FriendsList>
    </FriendContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
