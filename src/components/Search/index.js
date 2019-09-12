import React, { Component } from 'react';
import { SearchWrapper, Search as SearchUI, SearchField } from './styled';

export default class Search extends Component {
    handleChange = ({ target }) => {
        const { onQueryChange } = this.props;

        onQueryChange(target.value);
    }

    render() {
        const { query } = this.props;

        return (
            <SearchWrapper>
                <SearchUI>
                    <SearchField
                        placeholder='Search'
                        onChange={this.handleChange}
                        value={query}
                    />
                </SearchUI>
            </SearchWrapper>
        )
    }
}
