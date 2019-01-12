import React from 'react'
// import PropTypes from 'prop-types'
import Image from '../atoms/image'

import styles from '../../styles/portfolio.module.css'

class Portfolio extends React.Component {
  render() {
    return (
      <div className={styles.portfolio}>
        {/* <div> */}
        <Image />
        {/* </div> */}
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
        <div>16</div>
      </div>
    )
  }
}

// Portfolio.propTypes = {
//   key: PropTypes.number,
//   link: PropTypes.string,
//   name: PropTypes.string,
// }

export default Portfolio
