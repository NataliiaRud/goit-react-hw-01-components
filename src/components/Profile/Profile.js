import React from 'react';
import PropTypes from 'prop-types';
import {
  UserContainer,
  UserDescription,
  UserName,
  UserAvatar,
  UserInfo,
  UserStats,
  StatsList,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UserContainer>
      <UserDescription>
        <UserAvatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserInfo>{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </UserDescription>

      <UserStats>
        <StatsList>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </StatsList>
        <StatsList>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </StatsList>
        <StatsList>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </StatsList>
      </UserStats>
    </UserContainer>
  );
};

Profile.propTypes = {
  item: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
