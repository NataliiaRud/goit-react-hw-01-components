import styled from '@emotion/styled';
export const TransactionContainer = styled.div`
  padding: 15px;
  border: 2px solid #aba798;
  margin-bottom: 15px;
`;

export const TransactionsHistory = styled.table`
  padding: 15px;
  width: 500px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
`;
export const TransactionHead = styled.tr`
  font-size: 14px;
  background-color: blue;
  color: #fff;
  text-content: center;
`;
export const TransactionColumn = styled.th`
  padding: 15px;
`;
export const TransactionRow = styled.td`
  padding: 8px;
  text-align: center;
  border-bottom-style: solid;
  border-bottom-color: black;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
`;
