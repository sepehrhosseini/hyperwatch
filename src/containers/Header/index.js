import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import { Wrapper, Logo } from './styled';
import Nav from '../../components/Nav';
import Search from '../../components/Search';

import { authorize } from '../../utils/api';

import { updateSearchQuery } from './actions';

const Header = ({ updateSearchQueryConnect, searchQuery }) => {
  const handleSearchChange = (query) => {
    updateSearchQueryConnect(query);
  };

  const onLogin = async () => {
    const url = authorize({ redirectUrl: '/auth/token' });
    window.location.href = url;
  };

  return (
    <Wrapper>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Grid item>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <Logo>
                <Link to="/">
                  <img src="/assets/images/logo@2x.png" width="100%" alt="Hyperwatch" />
                </Link>
              </Logo>
            </Grid>
            <Grid item>
              <Search onQueryChange={handleSearchChange} query={searchQuery} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Nav login={onLogin} />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default connect(
  (state) => ({
    searchQuery: state.header.searchQuery,
  }),
  {
    updateSearchQueryConnect: updateSearchQuery,
  }
)(Header);
