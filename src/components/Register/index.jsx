import React, { Component } from "react";
import { WrappedRegisterForm as RegisterForm } from "../RegisterForm";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { IoLogoGoogle } from "react-icons/io";
import { css } from "aphrodite";
import styles from "./styles";

export default class Register extends Component {
  render() {
    return (
      <div span={12} className={css(styles.container)}>
        <div className={css(styles.infoContainer)}>
          <h1 className={css(styles.title)}>Create Account</h1>
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
          <p className={css(styles.subtitle)}>or user your email for registration</p>
        </div>
        <RegisterForm />
      </div>
    );
  }
}
