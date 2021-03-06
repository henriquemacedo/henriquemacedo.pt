import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";
import * as Styles from "./styles"

const Portfolio = () => (
  <StaticQuery
    query={graphql`{
  portfolioImages: allFile(filter: {sourceInstanceName: {eq: "portfolio"}}) {
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
    render={data => (
      <Styles.Wrapper>
      {data.portfolioImages.edges.map(image => (
        <GatsbyImage
          image={image.node.childImageSharp.gatsbyImageData}
          key={image.node.childImageSharp.gatsbyImageData.src} />
      ))}
      </Styles.Wrapper>
    )}
  />
)

export default Portfolio
