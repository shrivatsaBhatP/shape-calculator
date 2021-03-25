import React from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.HeaderContainer}>
      <h1>Shape Calculator</h1>
    </div>
  );
};

export default Header;
