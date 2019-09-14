import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Wrapper, Logo } from './styled';
import { Nav } from '../../components/Nav';
import Search from '../../components/Search';

import {
    updateSearchQuery,
} from './actions';

class Header extends Component {
    handleSearchChange = (query) => {
        const { updateSearchQueryConnect } = this.props;

        updateSearchQueryConnect(query);
    }

    render() {
        const { searchQuery } = this.props;

        return (
            <Wrapper>
                <Logo>
                    <Link to='/'>
                        <img src='/assets/images/logo@2x.png' width='100%' />
                    </Link>
                </Logo>
                <Search
                    onQueryChange={this.handleSearchChange}
                    query={searchQuery}
                />
            </Wrapper>
        )
    }
}

export default connect(state => ({
    searchQuery: state.header.searchQuery
}), {
    updateSearchQueryConnect: updateSearchQuery,
})(Header);
