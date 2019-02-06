import React, { Component } from "react";
import "./styles.css";
import Button from "../Button";

export default class RegisterBanner extends Component {
  render() {
    return (
      <div className="container-register-banner">
        <h2 className="title">Welcome Back!</h2>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <Button toggle={this.props.toggle} text={"Sign Up"}/>
      </div>
    );
  }
}
