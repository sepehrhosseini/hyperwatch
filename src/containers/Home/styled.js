import React from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Wrapper = styled.div`
  max-width: 1100px;
  margin: 5rem auto 0;
`;

export const Card = ({
  isLoading,
  children,
  placeholder,
  ...props
}) => {
  return (
    <CardUI isLoading={isLoading} {...props}>
      {isLoading && <CircularProgress />}
      {!isLoading && placeholder && (
        <PlaceholderText>{placeholder}</PlaceholderText>
      )}
      {!isLoading && !placeholder && children}
    </CardUI>
  );
};

export const CardUI = styled.div`
    width: 100%;
    max-width: 340px;
    position: relative;
    overflow: auto;

    box-shadow: 0 3px 6px rgba(0,0,0,.15);
    border-radius: 4px;

    ${({ fluid }) =>
      fluid &&
      css`
        width: 100%;
        max-width: none;
      `}

    max-height: ${({ maxHeight }) => maxHeight || '420px'};
    min-height: ${({ minHeight }) => minHeight || '0'}

    ${({ isLoading }) =>
      isLoading &&
      css`
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
`;

export const PlaceholderText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 300px;
  height: 100%;
  flex: 1;

  text-align: center;

  font-size: 3.6rem;
  font-style: italic;
  font-weight: 900;
  font-family: Roboto Condensed;

  color: #e0e0e0;
`;

export const GlobalStyles = createGlobalStyle`
    *, *:after, *:before {
        box-sizing: inherit
    }

    html {
        box-sizing: border-box;
    }
`;
