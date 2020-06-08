import styled from 'styled-components';

export const SearchWrapper = styled.div`
  margin-left: 30px;
`;

export const Search = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;

  display: inline-flex;

  &:focus-within {
    background-color: rgba(245, 245, 245, 0.6);
  }
`;

export const SearchField = styled.input`
  padding: 13px 25px;

  background-color: rgba(0, 0, 0, 0);
  border: none;

  appearance: none;

  font-family: Roboto Condensed;
  font-size: 1.1rem;

  color: #616161;

  &:focus {
    color: #212121;
    outline: none;
  }
`;
