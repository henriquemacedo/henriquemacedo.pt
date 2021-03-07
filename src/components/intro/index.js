import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';

const Intro = ({ children }) => <Styles.Wrapper>{children}</Styles.Wrapper>;

Intro.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Intro;
