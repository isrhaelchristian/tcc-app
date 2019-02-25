import React, { Component, Fragment } from 'react'
import { css } from 'aphrodite';

import Logo from '../Logo';
import NavMenu from '../NavMenu';

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <Logo />
        <NavMenu />
      </Fragment>
    )
  }
}
