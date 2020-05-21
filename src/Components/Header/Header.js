import React from 'react';
import styles from "./Header.module.css";

import Menubase from './menubar/Menubar';

function Header() {
  return (
    <div className={styles.header}>
      <Menubase/>
    </div>
  );
}

export default Header;