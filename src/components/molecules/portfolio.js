import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'
import PortfolioImage from '../atoms/portfolioImage'
// import PropTypes from 'prop-types'

import styles from '../../styles/portfolio.module.css'

const Portfolio = () => (
  <StaticQuery
    query={graphql`
      query {
        portfolioImages: allFile(
          filter: { sourceInstanceName: { eq: "portfolio" } }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 1280) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className={styles.portfolio}>
        <PortfolioImage portfolioImages={data.portfolioImages.edges} />
      </div>
    )}
  />
)

export default Portfolio
