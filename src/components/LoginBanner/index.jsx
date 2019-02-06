import React, { Component } from "react";
import Button from "../Button";
import "./styles.css";

export default class RegisterBanner extends Component {
  render() {
    return (
      <div className="container-login-banner">
        <h2 className="title">Hello, Friend!</h2>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <Button toggle={this.props.toggle} text={"Sign In"}/>
      </div>
    );
  }
}
