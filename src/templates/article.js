import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '@utils/seo';
import Layout from '@components/layout';
import Blog from '@components/blog';
import * as Styles from './styles';

export default function Template({ data }) {
  const post = data.markdownRemark;
  const { title, date, time, canonical } = post.frontmatter;

  return (
    <Layout>
      <SEO title={`Henrique Macedo — ${title}`} canonicalLink={canonical} />
      <Blog>
        <Styles.Heading>
          <Link to="/blog">/ Back</Link>
          <h1>{title}</h1>
          <span>
            {date} · {time} min read
          </span>
        </Styles.Heading>
        <Styles.Wrapper>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Styles.Wrapper>
      </Blog>
    </Layout>
  );
}

export const postQuery = graphql`
  query BlogPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        date
        title
        time
        description
        path
        canonical
      }
      html
    }
  }
`;
