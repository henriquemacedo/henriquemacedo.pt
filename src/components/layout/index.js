import React from 'react'
import PropTypes from 'prop-types'

import Nav from "@components/nav"
import Footer from '@components/footer'

import footerLinks from '@utils/footerLinks'
import * as Styles from "./styles";

const Layout = ({ children }) => (
  <>
    <Nav />
    <Styles.Wrapper>{children}</Styles.Wrapper>
    <Footer values={footerLinks} />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
