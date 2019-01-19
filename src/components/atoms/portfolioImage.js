import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

class PortfolioImage extends React.Component {
  static propTypes = {
    portfolioImages: PropTypes.array.isRequired,
  }

  render() {
    const { portfolioImages } = this.props

    return (
      <>
        {portfolioImages.map(image => (
          <Img
            key={image.node.childImageSharp.fluid.src}
            fluid={image.node.childImageSharp.fluid}
          />
        ))}
      </>
    )
  }
}

export default PortfolioImage
