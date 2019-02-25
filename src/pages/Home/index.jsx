import React, { Component } from "react";
import { css } from "aphrodite";

import Header from '../../components/Header'

import styles from "./styles";

export default class Home extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.header)}>
          <Header />
        </div>
      </div>
    );
  }
}
