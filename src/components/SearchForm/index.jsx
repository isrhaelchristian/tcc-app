import React, { Component } from "react";
import { Form, Select, Input } from "antd";
import { css } from "aphrodite";

import GenderSelect from '../SearchComponents/GenderSelect'
import KindSelect from '../SearchComponents/KindSelect'

import styles from "./styles";

const { Option } = Select;

class SearchForm extends Component {
  constructor(props) {
    super(props);
    const value = props.value || {};
    this.state = {
      kind: value.kind || "dog",
      gender: value.gender || "male"
    };
  }

  handleKindChange = kind => {
    if (!("value" in this.props)) {
      this.setState({ kind });
    }
    this.triggerChange({ kind });
  };

  handleGenderChange = gender => {
    if (!("value" in this.props)) {
      this.setState({ gender });
    }
    this.triggerChange({ gender });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  triggerChange = changedValue => {
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(Object.assign({}, this.state, changedValue));
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={css(styles.form)}>
        <p className={css(styles.formTitle)}>
          Encontre seu próximo melhor amigo.
        </p>
        <Form.Item className={css(styles.formItem)} label="Onde" colon={false}>
          {getFieldDecorator("where")(
            <Input placeholder="Em qualquer lugar" />
          )}
        </Form.Item>
        <Form.Item
          className={css(styles.formItem)}
          label="Espécie"
          colon={false}
        >
          {getFieldDecorator("kind")(
            <KindSelect kind={this.state.kind} handleKindChange={this.handleKindChange} />
          )}
        </Form.Item>
        <Form.Item className={css(styles.formItem)} label="Sexo" colon={false}>
          {getFieldDecorator("gender")(
            <GenderSelect
              gender={this.state.gender}
              handleGenderChange={this.handleGenderChange}
            />
          )}
        </Form.Item>
        <Form.Item className={css(styles.actions)}>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(
            <button
              className={css(styles.buttonSignUp)}
              onClick={() => console.log("sd")}
            >
              <p className={css(styles.btnText)}>{"Entrar"}</p>
            </button>
          )}
        </Form.Item>
      </Form>
    );
  }
}

export const WrappedSearchForm = Form.create({ name: "normal_search" })(
  SearchForm
);
