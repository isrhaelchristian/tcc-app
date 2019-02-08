import React, { Component } from 'react'
import { css } from 'aphrodite';

import styles from './styles'

export default class Logo extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        logo
      </div>
    )
  }
}
