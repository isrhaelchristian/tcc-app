import React, { Component } from 'react'
import { css } from 'aphrodite';

import Logo from '../Logo';
import SearchInput from '../SearchInput';
import NavMenu from '../NavMenu';

import styles from './styles';

export default class Header extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <Logo />
        <SearchInput />
        <NavMenu />
      </div>
    )
  }
}
