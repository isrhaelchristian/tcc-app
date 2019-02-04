import React, { Component } from "react";
import { Row, Col } from "antd";
import { WrappedLoginForm as LoginForm } from "../../components/LoginForm";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { IoLogoGoogle } from "react-icons/io";
import "./styles.css";

export default class Login extends Component {
  render() {
    return (
      <Row justify="center" align="middle" type="flex" className="container">
        <Col span={12}>
          <img src="#" alt="" className="img-login" />
        </Col>
        <Col span={12} className="rigth-container">
          <div className="info-container">
            <h1 className="login-title">Login</h1>
            <div className="social-container">
              <div className="social-item">
                <TiSocialFacebook size={30}/>
              </div>
              <div className="social-item">
                <TiSocialTwitter size={30}/>
              </div>
              <div className="social-item">
                <IoLogoGoogle size={30}/>
              </div>
            </div>
            <p className="info-text">or user your email account.</p>
          </div>
          <LoginForm />
        </Col>
      </Row>
    );
  }
}
