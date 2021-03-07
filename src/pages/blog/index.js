import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '@utils/seo';
import Layout from '@components/layout';
import Post from '@components/post';

export const AllArticlesQuery = graphql`
  query AllArticles {
    allMarkdownRemark(sort: { fields: frontmatter___key, order: DESC }) {
      edges {
        node {
          frontmatter {
            path
            date
            time
            title
            description
          }
        }
      }
    }
  }
`;

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Henrique Macedo — Blog" />
    <div
      style={{
        margin: '60px auto 0 auto',
        maxWidth: '800px',
        padding: '0 5vw',
        color: 'var(--grey)',
      }}
    >
      {data.allMarkdownRemark.edges.map(post => {
        const { title, date, time, description, path } = post.node.frontmatter;
        return (
          <Post
            title={title}
            date={date}
            time={time}
            description={description}
            key={`${date}__${title}`}
            path={path}
          />
        );
      })}
    </div>
  </Layout>
);

BlogPage.propTypes = {
  data: PropTypes.object,
};

export default BlogPage;
