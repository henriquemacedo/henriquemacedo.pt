import React from 'react';
import SEO from '@utils/seo';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '@components/layout';
import Portfolio from '@components/portfolio';

const PortfolioPage = () => (
  <Layout>
    <SEO title="Henrique Macedo — Blog" />
    <Portfolio>
      <StaticQuery
        query={graphql`
          {
            portfolioImages: allFile(
              filter: { sourceInstanceName: { eq: "portfolio" } }
              limit: 9
              sort: { order: ASC, fields: name }
            ) {
              edges {
                node {
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                  }
                }
              }
            }
          }
        `}
        render={data =>
          data.portfolioImages.edges.map(image => (
            <GatsbyImage
              image={image.node.childImageSharp.gatsbyImageData}
              key={image.node.childImageSharp.gatsbyImageData.src}
            />
          ))
        }
      />
    </Portfolio>
  </Layout>
);

export default PortfolioPage;
