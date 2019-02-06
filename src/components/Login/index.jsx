import React, { Component } from "react";
import { WrappedLoginForm as LoginForm } from "../LoginForm";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { IoLogoGoogle } from "react-icons/io";
import { css } from "aphrodite";
import styles from "./styles";

export default class Login extends Component {
  render() {
    return (
      <div span={12} className={css(styles.containerLogin)}>
        <div className={css(styles.infoContainer)}>
          <h1 className={css(styles.loginTitle)}>Login</h1>
          <div className={css(styles.socialContainer)}>
            <div className={css(styles.socialItem)}>
              <TiSocialFacebook size={30} />
            </div>
            <div className={css(styles.socialItem)}>
              <TiSocialTwitter size={30} />
            </div>
            <div className={css(styles.socialItem)}>
              <IoLogoGoogle size={30} />
            </div>
          </div>
          <p className={css(styles.subtitle)}>or user your email account.</p>
        </div>
        <LoginForm />
      </div>
    );
  }
}
