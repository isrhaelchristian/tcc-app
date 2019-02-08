import React, { Component } from 'react'
import { css } from 'aphrodite'

import styles from './styles'

export default class index extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <input placeholder="search" type="text" />
        <select>
          <option>All</option>
          <option>Animals</option>
          <option>Shelters</option>
          <option>People</option>
        </select>
        <button>search</button>
      </div>
    )
  }
}
