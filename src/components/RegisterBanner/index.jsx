import React, { Component } from "react";
import { Button } from 'antd';
import "./styles.css";

export default class RegisterBanner extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="title">Welcome Back!</h2>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button type="primary" shape="round" size={45}>Sign Up</Button>
      </div>
    );
  }
}
