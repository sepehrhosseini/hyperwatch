import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import IconButton from '@material-ui/core/IconButton';

import styles from './Nav.module.css';

const navItems = [
  {
    label: 'Logout',
    onClick: () => {
      localStorage.removeItem('jwt');
    },
  },
  {
    label: 'Watchlist',
    to: '/watchlist',
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
          <IconButton>
            <Avatar onClick={openMenu} alt="Sepehr Hosseini">
              SH
            </Avatar>
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={menuAnchor}
            keepMounted
            open={!!menuAnchor}
            onClose={closeMenu}
          >
            {navItems.map((item) => {
              const linkProps = item.to
                ? { to: item.to, component: Link }
                : {};
              return (
                <MenuItem
                  key={item.label.toString()}
                  onClick={() => {
                    item.onClick && item.onClick();
                    closeMenu();
                  }}
                  {...linkProps}
                >
                  {item.label}
                </MenuItem>
              );
            })}
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
