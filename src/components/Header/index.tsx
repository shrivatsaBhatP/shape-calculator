import React from 'react';
import Text from '../Text';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.HeaderContainer}>
      <Text type="heading">Shape Calculator</Text>
    </div>
  );
};

export default Header;
