import React from 'react';
import PropTypes from 'prop-types';

import MdContainer from '@material-ui/core/Container';

const Container = ({ children, maxWidth, ...rest }) => {
  return <MdContainer {...rest}>{children}</MdContainer>;
};

Container.defaultProps = {
  maxWidth: 1100,
};

Container.propTypes = {
  children: PropTypes.element.isRequired,
  maxWidth: PropTypes.number,
};

export default Container;
