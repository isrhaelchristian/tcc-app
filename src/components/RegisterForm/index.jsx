import React, { Component } from "react";
import { Form, Icon, Input } from "antd";
import Button from "../Button";
import { css } from "aphrodite";
import styles from "./styles";

class RegisterForm extends Component {
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
      <Form onSubmit={this.handleSubmit} className={css(styles.form)}>
        <Form.Item className={css(styles.formItem)}>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item className={css(styles.formItem)}>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your email!" }]
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
            />
          )}
        </Form.Item>
        <Form.Item className={css(styles.formItem)}>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item className={css(styles.actions)}>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Button toggle={() => alert("Signup")} text={"Sign Up"} />)}
        </Form.Item>
      </Form>
    );
  }
}

export const WrappedRegisterForm = Form.create({ name: "normal_register" })(
  RegisterForm
);
