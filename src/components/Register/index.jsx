import React, { Component } from "react";
import { WrappedRegisterForm as RegisterForm } from "../RegisterForm";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { IoLogoGoogle } from "react-icons/io";
import "./styles.css";

export default class Register extends Component {
  render() {
    return (
      <div span={12} className="container-register">
        <div className="info-container">
          <h1 className="login-title">Create Account</h1>
          <div className="social-container">
            <div className="social-item">
              <TiSocialFacebook size={30} />
            </div>
            <div className="social-item">
              <TiSocialTwitter size={30} />
            </div>
            <div className="social-item">
              <IoLogoGoogle size={30} />
            </div>
          </div>
          <p className="info-text">or user your email for registration</p>
        </div>
        <RegisterForm />
      </div>
    );
  }
}
