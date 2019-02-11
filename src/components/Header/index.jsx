import React, { Component } from 'react'
import { css } from 'aphrodite';
import { Divider } from 'antd';

import Logo from '../Logo';
import SearchInput from '../SearchInput';
import NavMenu from '../NavMenu';
import ActionsHeader from '../ActionsHeader';

import styles from './styles';

export default class Header extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <Logo />
        <SearchInput />
        <NavMenu />
        <Divider type="vertical" style={{height: "70%"}}/>
        <ActionsHeader />
      </div>
    )
  }
}
