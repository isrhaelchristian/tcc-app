import React, { Component } from "react";
import Button from "../Button";
import { css } from "aphrodite";
import styles from "./styles";

export default class RegisterBanner extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <h2 className={css(styles.title)}>Welcome Back!</h2>
        <p className={css(styles.subtitle)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <Button toggle={this.props.toggle} text={"Sign In"}/>
      </div>
    );
  }
}
