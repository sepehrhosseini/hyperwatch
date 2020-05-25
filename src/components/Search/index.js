import React from 'react';
import PropTypes from 'prop-types';

import { SearchWrapper, Search as SearchUI, SearchField } from './styled';

const Search = ({ onQueryChange, query }) => {
  const handleChange = ({ target }) => {
    onQueryChange(target.value);
  };

  return (
    <SearchWrapper>
      <SearchUI>
        <SearchField placeholder="Search" onChange={handleChange} value={query} spellCheck={false} />
      </SearchUI>
    </SearchWrapper>
  );
};

Search.propTypes = {
  query: PropTypes.string.isRequired,
  onQueryChange: PropTypes.func.isRequired,
};

export default Search;
