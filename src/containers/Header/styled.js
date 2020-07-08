import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  padding-top: 8px;

  @media (min-width: ${({ theme }) => theme.bp.md}px) {
    padding-top: 20px;
  }
`;

export const Logo = styled.div`
  max-width: 140px;
  margin-right: 20px;

  @media (min-width: ${({ theme }) => theme.bp.md}px) {
    max-width: 240px;
  }
`;
