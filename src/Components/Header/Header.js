import React from 'react';
import styles from "./Header.module.css";

import Menubase from './menubar/Menubar';

function Header() {
  return (
    <div className={styles.MenuBarheader}>
      <Menubase/>
    </div>
  );
}

export default Header;