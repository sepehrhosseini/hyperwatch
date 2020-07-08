import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import UserMenu from '../../components/UserMenu';
import Nav from '../../components/Nav';
import Container from '../../utils/Container';

import { Wrapper, Logo } from './styled';

import { authorize } from '../../utils/api';

import { updateSearchQuery as updateQueryAction } from './actions';

const selectors = (state) => ({
  searchQuery: state.header.searchQuery,
});

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { searchQuery } = useSelector(selectors);
  const updateSearchQuery = useCallback(
    (query) => dispatch(updateQueryAction(query)),
    [dispatch],
  );

  const handleSearchChange = (query) => {
    updateSearchQuery(query);
  };

  const onLogin = async () => {
    const url = authorize({ redirectUrl: '/auth/token' });
    window.location.href = url;
  };

  return (
    <Container>
      <Wrapper>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item flex={1}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <Logo>
                  <Link to="/">
                    <img
                      src="/assets/images/logo@2x.png"
                      width="100%"
                      alt="Hyperwatch"
                    />
                  </Link>
                </Logo>
              </Grid>
              <Grid item>
                <Nav
                  handleSearchChange={handleSearchChange}
                  searchQuery={searchQuery}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <UserMenu login={onLogin} />
          </Grid>
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default Header;
