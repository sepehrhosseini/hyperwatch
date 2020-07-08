import styled from 'styled-components';
import SlickSlider from 'react-slick';

export const Wrapper = styled.div`
  padding: 6rem 0;

  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 992px) {
    padding: 2rem 0 4rem;
    flex-flow: column wrap;
  }
`;

export const Heading = styled.div`
  font-weight: 900;
  font-size: 3rem;

  max-width: 300px;

  flex: 1 0 300px;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 14px 0 15px rgb(255 255 255);
  position: relative;
  z-index: 20;

  @media (max-width: 992px) {
    box-shadow: none;
    flex: 0;
    max-width: none;
    padding: 2rem 0 3rem;
  }
`;

export const Slider = styled(SlickSlider)`
  & .slick-list {
    padding: 1rem 0;
  }
`;
export const SliderWrapper = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
  max-width: 100%;
`;

export const Card = styled.div`
  position: relative;
  border-radius: 50px;

  width: 200px;
  height: 260px;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);

  margin: 1rem;

  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Title = styled.div`
  width: 100%;
  height: 60px;

  margin-top: auto;
  margin-bottom: 0;
  padding-left: 32px;

  line-height: 60px;

  font-size: 25px;
  font-weight: 900;
  font-style: italic;

  position: relative;
  z-index: 10;

  background-color: #fff;
`;

export const Avatar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &,
  *,
  a {
    user-select: none !important;
    user-drag: none !important;
  }
`;
