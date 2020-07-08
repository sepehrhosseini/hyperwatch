import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content, Title, Subtitle } from './styled';

import ContainerUI from '../../utils/Container';

const Quote = ({ type, boxed }) => {
  const Container = boxed ? ContainerUI : 'div';
  return (
    <Container>
      <Wrapper type={type}>
        <Content>
          <Title type={type}>
            Drama is life with the dull bits cut out.
          </Title>
          <Subtitle type={type}>Alfred Hitchcock</Subtitle>
        </Content>
      </Wrapper>
    </Container>
  );
};

Quote.propTypes = {
  type: PropTypes.number,
  boxed: PropTypes.bool,
};

Quote.defaultProps = {
  type: 1,
  boxed: true,
};

export default Quote;
