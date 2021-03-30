import React from 'react';
import Text from '../Text';
import styles from './Header.module.scss';
import Image from '../Image';

import src from '../../Images/headerImage.png';

const Header: React.FC = () => {
  return (
    <div className={styles.HeaderContainer}>
      <Image src={src} alt="header image" />
      <Text type="heading">Shape Calculator</Text>
    </div>
  );
};

export default Header;
