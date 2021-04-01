import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';

const Portfolio = ({ children }) => <Styles.Wrapper>{children}</Styles.Wrapper>;

Portfolio.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Portfolio;
