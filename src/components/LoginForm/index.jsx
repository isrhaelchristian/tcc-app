import React, { Component } from "react";
import { Form, Icon, Input } from "antd";
import Button from "../Button";

class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="form">
        <Form.Item className="form-item">
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item className="form-item">
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              className="input"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item className="form-item">
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(
            <div className="login-actions">
              <a className="login-forgot" href="https://">
                Forgot password
              </a>
              <Button toggle={() => alert("Signup")} text={"Sign In"} />
            </div>
          )}
        </Form.Item>
      </Form>
    );
  }
}

export const WrappedLoginForm = Form.create({ name: "normal_login" })(
  LoginForm
);
