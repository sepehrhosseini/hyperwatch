import styled from 'styled-components';

const wrapperBackground = () => `
  &:before, &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &:before {
    z-index: 1;
    background: url('/assets/images/quote2.png') center center/cover no-repeat;
  }
  &:after {
    z-index: 2;
    background: linear-gradient(180deg, rgba(0,0,0,.6), rgba(0,0,0,.3));
  }
`;

export const Wrapper = styled.div`
  position: relative;

  height: 500px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  z-index: 10;

  ${({ type }) => type === 2 && wrapperBackground()}
`;

export const Title = styled.div`
  font-size: 3rem;
  font-weight: 900;
  text-align: center;

  ${({ type }) => type === 2 && 'color: #fff;'}
`;

export const Content = styled.div`
  position: relative;
  z-index: 10;
`;

export const Subtitle = styled.div`
  text-align: ${({ type }) => (type === 1 ? 'right' : 'center')};
  margin-top: 3rem;

  font-size: 16px;
  font-weight: 400;

  ${({ type }) => type === 2 && 'color: rgba(255,255,255,.7)'}
`;
