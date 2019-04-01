import React, { Component } from "react";
import { AutoComplete } from 'antd';

import axios from "axios"

const Option = AutoComplete.Option;

export default class SearchForm extends Component {

  constructor() {
    super()
    this.state = {
      dataSource: []
    }
  }

  handleSearch = (value) => {
    var config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
      },
    };
    axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${value}&components=country:br&types=(cities)&language=pt_BR&key=AIzaSyBkqV3G7lXIw11KBX8yBYkyn3vbs0jqS6A`, config)
      .then(res => {
        const dataSource = res.data.predictions.map(place => (
          <Option key={place.id} value={place.description}>
            {place.description}
          </Option>
        ))
        this.setState({ dataSource })
      })
  }

  onSelect(value) {
    console.log(value);
  }

  render() {
    return (
      <AutoComplete
        dataSource={this.state.dataSource}
        style={{ width: "100%" }}
        onSelect={this.onSelect}
        onSearch={this.handleSearch}
        placeholder="Em qualquer lugar"
      />
    );
  }
}
