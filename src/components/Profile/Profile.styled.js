import styled from '@emotion/styled';

export const UserContainer = styled.div`
  padding: 8px;
  background-color: fff;
  align-items: center;
  border: 2px solid #aba798;
  margin-bottom: 15px;
`;
export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;
export const UserAvatar = styled.img`
  height: 240px;
  border-radius: 50%;
`;
export const UserName = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-top: 15px;
`;
export const UserInfo = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-top: 15px;
`;
export const UserStats = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  background-color: #eae3d2;
  font-size: 18px;
  padding: 8px;
  margin-top: 15px;
`;
export const StatsList = styled.li`
  margin: auto;
  padding: 10px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  font-size: 18px;
  align-items: center;
`;
