import styled from '@emotion/styled';

export const FriendContainer = styled.div`
  padding: 15px;
  border: 2px solid #aba798;
  margin-bottom: 15px;
`;
export const FriendsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FriendItem = styled.li`
  padding: 15px;
  display: flex;
  gap: 20px;
  align-items: center;
  width: 240px;
  high: 100px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
  background-color: #fff;
`;

export const Status = styled.span`
  display: inline-block;
  padding: 8px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;
export const Avatar = styled.img`
  height: 60px;
  width: 60px;
`;
export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
