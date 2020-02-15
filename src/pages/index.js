import React from 'react'

import SEO from '../utils/seo'
import Layout from '../components/organisms/layout'
import Intro from '../components/molecules/intro'
import Companies from '../components/molecules/companies'
import Portfolio from '../components/molecules/portfolio'
import companiesList from '../utils/companiesList'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Henrique Macedo — Frontend Developer"
      e3
      keywords={[
        `henrique macedo`,
        `ui`,
        `ux`,
        `design`,
        `ui design`,
        `frontend`,
        `developer`,
        `design system`,
        `react`,
        `react native`,
      ]}
    />
    <Intro>
      <h1>Hello.</h1>
      <p>
        I'm a Frontend Developer with a strong motivation to build beautiful
        user interfaces from the scratch to the final &#60;/stage&#62;, with a
        focus on design systems, performance and accessibility. I like doing
        some magic with HTML, CSS, JavaScript, React JS and React Native.
      </p>
      <p>
        Currently partner at{' '}
        <a
          href="https://taikai.network"
          target="_blank"
          rel="noopener noreferrer"
        >
          Taikai
        </a>
        . Co-Founder of Dignus Care. Previously at{' '}
        <a
          href="https://youtu.be/wHhf56_hjbE"
          target="_blank"
          rel="noopener noreferrer"
        >
          OSRAM
        </a>
        , CoolFarm,{' '}
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
    <Companies
      title="Developing products arround the world"
      values={companiesList}
    />
    <Portfolio />
  </Layout>
)

export default IndexPage
