import React from 'react';
import styled, { css } from 'styled-components';
import MList from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Wrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;

    padding: 5rem;
`

export const List = styled(MList)`

`

export const Card = ({ isLoading, children, ...props }) => {
    return (
        <CardUI isLoading={isLoading} {...props}>
            { isLoading ? <CircularProgress /> : children}
        </CardUI>
    )
}

export const CardUI = styled.div`
    width: 100%;
    max-width: 340px;
    position: relative;
    overflow: auto;
    max-height: 420px;

    box-shadow: 0 3px 6px rgba(0,0,0,.15);
    border-radius: 4px;

    ${({ isLoading }) => isLoading && css`
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
    `}
    height: {({isLoading}) => isLoading ? '300px' : 'auto'}
`
