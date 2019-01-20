import React from 'react'

import SEO from '../utils/seo'
import Layout from '../components/organisms/layout'
import Intro from '../components/molecules/intro'
import Portfolio from '../components/molecules/portfolio'
import Footer from '../components/molecules/footer'
import footerLinks from '../utils/footerLinks'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Henrique Macedo — UI Developer"
      keywords={[
        `henrique macedo`,
        `ui`,
        `ux`,
        `design`,
        `ui design`,
        `front-end`,
        `developer`,
        `design system`,
        `react`,
        `react native`,
      ]}
    />
    <Intro title="Hello.">
      <p>
        I'm a UI Developer with a strong motivation for build beautiful user
        interfaces from the scratch to the final &#60;/stage&#62;, with a focus
        on design systems, performance and accessibility. I like doing some
        magic with HTML, CSS, JavaScript, React JS and React Native.
      </p>
      <p>
        Currently partner at OSRAM on{' '}
        <a
          href="https://youtu.be/wHhf56_hjbE"
          target="_blank"
          rel="noopener noreferrer"
        >
          Phytofy RL project
        </a>
        . Co-Founder of{' '}
        <a href="http://dignus.care" target="_blank" rel="noopener noreferrer">
          Dignus Care
        </a>
        . Previously at CoolFarm,{' '}
        <a
          href="https://www.whitesmith.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          Whitesmith
        </a>
        ,{' '}
        <a
          href="https://fincheck.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fincheck
        </a>
        .
      </p>
    </Intro>
    <Portfolio />
    <Footer values={footerLinks} />
  </Layout>
)

export default IndexPage
