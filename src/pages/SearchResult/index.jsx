import React, { Component } from "react";
import { css } from "aphrodite";

import Header from '../../components/HeaderSearch';
import SearchOptions from '../../components/SearchOptions';
import SearchExplore from '../../components/SearchExplore';

import styles from "./styles";

export default class SearchResults extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.header)}>
          <Header />
        </div>
        <div className={css(styles.content)}>
          <SearchOptions />
          <SearchExplore />
        </div>
      </div>
    );
  }
}
