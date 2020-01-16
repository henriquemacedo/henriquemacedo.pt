import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import PortfolioImage from '../atoms/portfolioImage'
import { device } from '../ions/breakpoints'

const Wrapper = styled.div`
  margin-top: 10vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1px;

  @media ${device.s} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.xl} {
    grid-template-columns: repeat(3, 1fr);
  }
`

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
      <Wrapper>
        <PortfolioImage portfolioImages={data.portfolioImages.edges} />
      </Wrapper>
    )}
  />
)

export default Portfolio
