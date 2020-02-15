import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Footer from '../molecules/footer'
import footerLinks from '../../utils/footerLinks'

import Nav from './nav'

const Wrapper = styled.div`
  padding: 10vw 0 0 0;
`

const Layout = ({ children }) => (
  <>
    <Nav />
    <Wrapper>{children}</Wrapper>
    <Footer values={footerLinks} />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
