import React, { Component } from "react";
import { css } from "aphrodite";

import { Popover, Icon } from 'antd';

import GenderSelect from '../SearchComponents/GenderSelect'
import KindSelect from '../SearchComponents/KindSelect'

import styles from "./styles";

export default class NavMenu extends Component {

  constructor() {
    super()
    this.state = {
      popoverLocality: false,
      popoverKind: false,
      popoverGender: false,
      kind: "dog",
      gender: "male"
    }
  }

  handleKindChange = kind => {
    this.setState({ kind });
  };

  handleGenderChange = gender => {
    this.setState({ gender });
  };

  hidePopover = (popover) => {
    this.setState({
      [popover]: false,
    });
  }

  handleVisiblePopover = popover => {
    this.setState({
      [popover]: true,
    });
  }

  render() {
    return (
      <div className={css(styles.container)}>
        <Popover
          content={<GenderSelect gender={this.state.gender} handleGenderChange={this.handleGenderChange} />}
          title={<PopoverTitle text={"Localidade"} hidePopover={() => this.hidePopover("popoverLocality")} />}
          trigger="click"
          visible={this.state.popoverLocality}
          onVisibleChange={() => this.handleVisiblePopover("popoverLocality")}
        >
          <button className={css(styles.optionsItem)}>Localicade</button>
        </Popover>
        <Popover
          content={<GenderSelect gender={this.state.gender} handleGenderChange={this.handleGenderChange} />}
          title={<PopoverTitle text={"Espécie"} hidePopover={() => this.hidePopover("popoverKind")} />}
          trigger="click"
          visible={this.state.popoverKind}
          onVisibleChange={() => this.handleVisiblePopover("popoverKind")}
        >
          <button className={css(styles.optionsItem)}>Espécie</button>
        </Popover>
        <Popover
          content={<KindSelect kind={this.state.kind} handleKindChange={this.handleKindChange} />}
          title={<PopoverTitle text={"Sexo"} hidePopover={() => this.hidePopover("popoverGender")} />}
          trigger="click"
          visible={this.state.popoverGender}
          onVisibleChange={() => this.handleVisiblePopover("popoverGender")}
        >
          <button className={css(styles.optionsItem)}>Sexo</button>
        </Popover>
      </div>
    );
  }
}

const PopoverTitle = props => {
  return (
    <div className={css(styles.popoverHeader)}>
      <p className={css(styles.popoverTitle)}>{props.text}</p>
      <Icon type="close" onClick={props.hidePopover} />
    </div>
  );
};
