import React from 'react';
import PropTypes from 'prop-types';
import styles from './Grid.module.css';

const Grid = (props) => {
  const { children } = props;
  const { columns } = props;

  if (columns === 'two') {
    return (
      <div
        className={`${styles.two}`}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={`${styles.one}`}
    >
      {children}
    </div>
  );
};

Grid.propTypes = {
  columns: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default Grid;
