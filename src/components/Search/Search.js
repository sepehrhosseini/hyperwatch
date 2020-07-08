import React from 'react';
import PropTypes from 'prop-types';

import {
  SearchWrapper,
  Search as SearchUI,
  SearchField,
} from './styled';

const Search = ({
  onQueryChange,
  query,
  hideBelowMd,
  onMobileMenu,
  wrapperStyle,
}) => {
  const handleChange = ({ target }) => {
    onQueryChange(target.value);
  };

  return (
    <SearchWrapper style={wrapperStyle}>
      <SearchUI hideBelowMd={hideBelowMd} onMobileMenu={onMobileMenu}>
        <SearchField
          placeholder="Search"
          onChange={handleChange}
          value={query}
          spellCheck={false}
        />
      </SearchUI>
    </SearchWrapper>
  );
};

Search.propTypes = {
  query: PropTypes.string.isRequired,
  onQueryChange: PropTypes.func.isRequired,
  onMobileMenu: PropTypes.bool,
  wrapperStyle: PropTypes.object,
};

Search.propTypes = {
  onMobileMenu: false,
  wrapperStyle: {},
};

export default Search;
