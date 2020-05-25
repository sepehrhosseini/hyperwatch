import styled from 'styled-components';

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 900;
  font-style: italic;
  color: inherit;

  padding: 8px 16px;

  &:before {
    content: '';

    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;

    width: 100px;
  }
`;
