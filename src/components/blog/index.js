import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';

const Blog = ({ children }) => <Styles.Wrapper>{children}</Styles.Wrapper>;

Blog.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Blog;
