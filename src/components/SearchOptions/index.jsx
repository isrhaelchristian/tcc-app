import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";

export default class NavMenu extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <button className={css(styles.optionsItem)}>Localicade</button>
        <button className={css(styles.optionsItem)}>Espécie</button>
        <button className={css(styles.optionsItem)}>Sexo</button>
      </div>
    );
  }
}
