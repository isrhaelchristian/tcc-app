import React, { Component } from "react";
import { Row, Col } from "antd";
import { WrappedLoginForm as LoginForm } from "../../components/LoginForm";
import "./styles.css";

export default class Login extends Component {
  render() {
    return (
      <Row>
        <Col span={12}>
          <img src="#" alt="" className="img-login" />
        </Col>
        <Col span={12}>
          <h1 className="login-title">Login</h1>
          <p className="login-subtitle">Entre no sistema</p>
          <LoginForm />
        </Col>
      </Row>
    );
  }
}
