import React, { Component } from "react";
import { css } from "aphrodite";

import Header from '../../components/Header'

import styles from "./styles";

export default class Home extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <Header />
      </div>
    );
  }
}
