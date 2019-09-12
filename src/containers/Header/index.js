import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Wrapper } from './styled';
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
