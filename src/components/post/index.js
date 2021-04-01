import React from 'react';
import { Link } from 'gatsby';
import * as Styles from './styles';

const Post = ({ title, date, time, description, path }) => (
  <Styles.Wrapper>
    <span>
      {date} · {time} min read
    </span>
    <h1>{title}</h1>
    <p>{description}</p>
    <Link to={path}>— Read More</Link>
  </Styles.Wrapper>
);

export default Post;