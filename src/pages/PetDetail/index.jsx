import React, { Component } from "react";
import { css } from "aphrodite";

import Header from "../../components/HeaderSearch";
import ImagesGrid from "../../components/ImagesGrid";
import InfosPet from "../../components/InfosPet";
import ActionsPets from "../../components/ActionsPets";

import styles from "./styles";

export default class Search extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.header)}>
          <Header />
        </div>
        <div className={css(styles.content)}>
          <div className={css(styles.row)}>
            <InfosPet />
            <ImagesGrid />
            <ActionsPets />
          </div>
        </div>
      </div>
    );
  }
}
