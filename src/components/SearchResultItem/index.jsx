import React, { Component } from 'react'
import { css } from 'aphrodite'

import { Card, Icon, Avatar } from 'antd';

import styles from './styles'

const { Meta } = Card;

export default class SearchResultItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <Card
        className={css(styles.container)}
        cover={<img alt="example" src={item.img} />}
        actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
      >
        <Meta
          avatar={<Avatar src={item.img} />}
          title={item.title}
          description="This is the description"
        />
      </Card>
    );
  }
}
