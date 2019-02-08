import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";

export default class Home extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <p>Text</p>
      </div>
    );
  }
}
