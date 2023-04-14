import styled from '@emotion/styled';
export const Container = styled.section`
  padding: 15px;
  background-color: #fff;
  border: 2px solid #aba798;
  margin-bottom: 15px;
`;
export const StatTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-top: 15px;
`;
export const StatList = styled.ul`
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
  list-style: none;
  display: flex;
  gap: 30px;
  margin-top: 15px;
`;
export const StatItem = styled.li`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  background-color: tomato;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
`;
