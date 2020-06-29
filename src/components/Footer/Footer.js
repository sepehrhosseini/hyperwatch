import React from 'react';

import { Wrapper, Text } from './styled';

import Container from '../../utils/Container';

const Footer = (props) => {
  return (
    <Container style={{ backgroundColor: '#eee' }}>
      <Wrapper>
        <Text>Made with ❤️ by Sepehr Hosseini</Text>
      </Wrapper>
    </Container>
  );
};

export default Footer;
