import React, { Component } from "react";
import { Select } from "antd";

const { Option } = Select;

export default class SearchForm extends Component {
  render() {
    return (
      <Select
        value={this.props.gender}
        onChange={this.props.handleGenderChange}
      >
        <Option value="male">Macho</Option>
        <Option value="female">Fêmea</Option>
      </Select>
    );
  }
}
