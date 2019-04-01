import React, { Component } from "react";
import { css } from "aphrodite";
import { Icon, Switch } from "antd";

import styles from "./styles";

export default class ActionsPets extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
  }

  render() {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.actionsContainer)}>
          <button className={css(styles.getButton)}>
            <Icon className={css(styles.getIcon)} type="heart" />
            <span className={css(styles.getText)}>eu quero</span>
          </button>
          <button className={css(styles.donateButton)}>
            <Icon className={css(styles.donateIcon)} type="dollar" />
            <span className={css(styles.donateText)}>quero ajudar</span>
          </button>
        </div>
        <div className={css(styles.followContainer)}>
          <span className={css(styles.followText)}>acompanhar esse pet</span>
          <Switch
            className={css(this.state.checked ? styles.switchChecked : styles.switchUnchecked)}
            onChange={checked => this.setState({ checked: checked })}
          />
        </div>
      </div>
    );
  }
}
