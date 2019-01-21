import React, { Component } from "react";
import { WrappedLoginForm as LoginForm } from "../../components/LoginForm";
import "./styles.css";

export default class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="img-container">
          <img src="#" alt="" className="img-login" />
        </div>
        <div className="form-container">
          <h1 className="login-title">Login</h1>
          <p className="login-subtitle">Entre no sistema</p>
          <LoginForm />
        </div>
      </div>
    );
  }
}
