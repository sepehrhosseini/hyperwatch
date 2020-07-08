import styled from 'styled-components';

import { Link as LinkRouter } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  display: none;

  @media (min-width: ${({ theme }) => theme.bp.md}px) {
    display: block;
  }
`;

export const ListItem = styled.li`
  display: inline-block;
`;

export const Link = styled(LinkRouter)`
  padding: 0.6rem 1rem;
  font-size: 1.1rem;
  font-weight: 600;

  color: #424242;
  text-decoration: none;
`;

export const LinkSm = styled(LinkRouter)`
  color: #414141;
  font-size: 18px;
  font-weight: 900;

  padding: 12px 28px;
  text-decoration: none;

  display: block;
  outline: none;

  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
