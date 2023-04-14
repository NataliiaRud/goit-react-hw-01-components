import React from 'react';
import PropTypes from 'prop-types';
import {
  TransactionContainer,
  TransactionsHistory,
  TransactionHead,
  TransactionColumn,
  TransactionRow,
} from './Transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionContainer>
      <TransactionsHistory>
        <thead>
          <TransactionHead>
            <TransactionColumn>Type</TransactionColumn>
            <TransactionColumn>Amount</TransactionColumn>
            <TransactionColumn>Currency</TransactionColumn>
          </TransactionHead>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <TransactionRow>{item.type}</TransactionRow>
              <TransactionRow>{item.amount}</TransactionRow>
              <TransactionRow>{item.currency}</TransactionRow>
            </tr>
          ))}
        </tbody>
      </TransactionsHistory>
    </TransactionContainer>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
