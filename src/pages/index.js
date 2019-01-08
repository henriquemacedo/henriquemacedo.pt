import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Intro from '../components/molecules/intro'

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
    <Intro>
      <h1>Hello.</h1>
      <p>
        I'm a UI Developer with a strong motivation for build beautiful user
        interfaces from the scratch to the final &#60;/stage&#62;. With a focus
        on design systems, performance and accessibility. I like doing some
        magic with HTML, CSS, JavaScript, React JS and React Native.
      </p>
      <p>
        Co-Founder of{' '}
        <a href="http://dignus.care" target="_blank" rel="noopener noreferrer">
          Dignus Care
        </a>
        . Currently partner at OSRAM on{' '}
        <a
          href="https://youtu.be/wHhf56_hjbE"
          target="_blank"
          rel="noopener noreferrer"
        >
          Phytofy RL project
        </a>
        . Previously at CoolFarm ,{' '}
        <a
          href="https://www.whitesmith.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          Whitesmith
        </a>
        ,{' '}
        <a
          href="https://www.mirror.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sunday Mirror
        </a>
        ,{' '}
        <a
          href="https://fincheck.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fincheck
        </a>
        ,{' '}
        <a
          href="https://smarttradeapp.com"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          SmartTrade
        </a>
        .
      </p>
    </Intro>
  </Layout>
)

export default IndexPage
