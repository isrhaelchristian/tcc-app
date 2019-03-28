import React, { Component, Fragment } from 'react'

import Logo from '../Logo';
import NavMenu from '../HeaderComponents/NavMenu';

export default class HeaderSearch extends Component {
  render() {
    return (
      <Fragment>
        <Logo />
        <NavMenu />
      </Fragment>
    )
  }
}
