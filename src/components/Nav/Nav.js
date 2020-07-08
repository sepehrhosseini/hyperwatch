import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { slide as Slide } from 'react-burger-menu';

import Search from '../Search';

import { Wrapper, List, ListItem, Link, LinkSm } from './styled';

const menuItems = [
  {
    label: 'Watchlist',
    to: '/watchlist',
  },
  {
    label: 'Discover',
    to: '/',
  },
];

const useMenuCloser = ({ closeMenu }) => {
  const location = useLocation();
  useEffect(() => {
    closeMenu();
  }, [location]);
};

const Nav = ({ handleSearchChange, searchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = ({ isOpen }) => setIsMenuOpen(isOpen);
  const closeMenu = () => toggleMenu({ isOpen: false });

  useMenuCloser({ closeMenu });

  return (
    <Wrapper>
      <Slide
        width={230}
        isOpen={isMenuOpen}
        onStateChange={toggleMenu}
      >
        <Search
          onQueryChange={handleSearchChange}
          query={searchQuery}
          onMobileMenu
          wrapperStyle={{ marginBottom: 10 }}
        />
        {menuItems.map((item) => (
          <li>
            <LinkSm to={item.to}>{item.label}</LinkSm>
          </li>
        ))}
      </Slide>
      <nav>
        <List>
          {menuItems.map((item) => (
            <ListItem>
              <Link to={item.to}>{item.label}</Link>
            </ListItem>
          ))}
        </List>
      </nav>
      <Search
        onQueryChange={handleSearchChange}
        query={searchQuery}
        wrapperStyle={{ marginLeft: 30 }}
        hideBelowMd
      />
    </Wrapper>
  );
};

Nav.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};

export default Nav;
