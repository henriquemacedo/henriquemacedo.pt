import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Intro from '../components/molecules/intro'
// import Image from '../components/image'
import Title from '../components/atoms/title'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Intro>
      <Title value="Hello." />
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
        . Previously at{' '}
        <a
          href="http://cool-farm.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          CoolFarm
        </a>
        ,{' '}
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
