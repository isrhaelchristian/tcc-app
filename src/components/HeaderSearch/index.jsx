import React, { Component, Fragment } from 'react'

import Logo from '../Logo';
import NavMenu from '../HeaderComponents/NavMenu';
import SearchInput from '../HeaderComponents/SearchInput';

export default class HeaderSearch extends Component {
  render() {
    return (
      <Fragment>
        <Logo />
        <SearchInput />
        <NavMenu />
      </Fragment>
    )
  }
}
