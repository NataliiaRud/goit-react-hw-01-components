import React from 'react';
import PropTypes from 'prop-types';
import { Container, StatTitle, StatList, StatItem } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <StatTitle>Upload stats</StatTitle>}

      <StatList>
        {stats.map(item => (
          <StatItem key={item.id}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </Container>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
