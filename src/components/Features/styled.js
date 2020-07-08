import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 5rem 0;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 992px) {
    flex-flow: column wrap;
    justify-content: center;
  }
`;

export const Card = styled.div`
  max-width: 340px;
  margin-left: 2rem;

  font-family: Roboto;

  &:first-of-type {
    margin-left: 0;
  }

  border-radius: 50px;
  padding: 3rem 2rem;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);

  @media (max-width: 992px) {
    margin: 0;
    margin-bottom: 1.6rem;
  }
`;

export const Title = styled.div`
  font-weight: 900;
  font-size: 2rem;
`;

export const Subtitle = styled.div`
  font-weight: 400;
  font-size: 1rem;

  color: #6a6a6a;
  margin-bottom: 3px;
`;

export const Desc = styled.div`
  font-weight: 500;
  font-size: 1.1rem;

  line-height: 1.6;
  color: #6a6a6a;

  margin-bottom: 2.4rem;
`;
