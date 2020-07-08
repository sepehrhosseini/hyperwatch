import styled from 'styled-components';

import { Link as LinkRouter } from 'react-router-dom';

export const List = styled.ul`
  padding: 0;
  margin: 0;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  display: none;
  @media (min-width: ${({ theme }) => theme.bp.md}) {
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
