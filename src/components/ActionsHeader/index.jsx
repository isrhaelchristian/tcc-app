import React, { Component } from 'react'
import {css} from 'aphrodite';
import { FiMessageCircle, FiUser } from "react-icons/fi";
import styles from './styles'

export default class ActionsHeader extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <FiMessageCircle size={30} />
        <FiUser size={30} />
        <p className={css(styles.text)}>Entrar</p>
      </div>
    )
  }
}
