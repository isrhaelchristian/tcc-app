import React, { Component } from 'react'
import { css } from 'aphrodite'
import { FiSearch  } from "react-icons/fi";

import { colors } from '../../../settings';
import styles from './styles'

export default class index extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <input className={css(styles.input)} placeholder="search" type="text" />
        <button className={css(styles.button)}><FiSearch size={20} color={colors.darker}/></button>
      </div>
    )
  }
}
