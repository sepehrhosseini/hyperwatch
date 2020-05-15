import React, { useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import styles from './Nav.module.css';

const navItems = [
  {
    label: 'Logout',
    onClick: () => {
      localStorage.removeItem('jwt');
    },
  },
];

function Nav({ login }) {
  const isAuth = !!localStorage.getItem('jwt');
  const [menuAnchor, setMenuAnchor] = useState(null);

  const openMenu = (e) => {
    setMenuAnchor(e.currentTarget);
  };

  const closeMenu = (e) => {
    setMenuAnchor(null);
  };

  return (
    <div className={styles.wrapper}>
      {isAuth ? (
        <>
          <Avatar onClick={openMenu} alt="Sepehr Hosseini">
            SH
          </Avatar>
          <Menu id="simple-menu" anchorEl={menuAnchor} keepMounted open={!!menuAnchor} onClose={closeMenu}>
            {navItems.map((item) => (
              <MenuItem
                key={item.label.toString()}
                onClick={() => {
                  item.onClick();
                  closeMenu();
                }}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </>
      ) : (
        <Button variant="outline" onClick={login}>
          Login
        </Button>
      )}
    </div>
  );
}

Nav.defaultProps = {};

Nav.propTypes = {};

export default Nav;
