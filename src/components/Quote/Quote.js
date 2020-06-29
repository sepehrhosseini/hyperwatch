import React from 'react';

import { Wrapper, Content, Title, Subtitle } from './styled';

import Container from '../../utils/Container';

const Quote = (props) => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>Drama is life with the dull bits cut out.</Title>
          <Subtitle>Alfred Hitchcock</Subtitle>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Quote;
