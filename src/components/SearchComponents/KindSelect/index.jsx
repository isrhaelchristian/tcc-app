import React, { Component } from "react";
import { Select } from "antd";

const { Option } = Select;

export default class SearchForm extends Component {
  render() {
    return (
      <Select value={this.props.kind} onChange={this.props.handleKindChange}>
        <Option value="dog">Cães</Option>
        <Option value="cat">Gatos</Option>
        <Option value="others">Outros</Option>
      </Select>
    );
  }
}
