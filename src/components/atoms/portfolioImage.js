import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from "gatsby-plugin-image";

class PortfolioImage extends React.Component {
  static propTypes = {
    portfolioImages: PropTypes.array.isRequired,
  }

  render() {
    const { portfolioImages } = this.props

    return <>
      {portfolioImages.map(image => (
        <GatsbyImage
          image={image.node.childImageSharp.gatsbyImageData}
          key={image.node.childImageSharp.gatsbyImageData.src} />
      ))}
    </>;
  }
}

export default PortfolioImage
