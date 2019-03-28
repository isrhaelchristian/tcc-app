import React, { Component } from "react";
import { css } from "aphrodite";

import { Card, Icon } from "antd";

import styles from "./styles";

export default class SearchResultItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <Card
        className={css(styles.container)}
        cover={<img alt="example" src={item.img} />}
        bodyStyle={{ padding: "12px" }}
        actions={[
          <Icon type="heart" />,
          <Icon type="environment" />,
          <Icon type="message" />,
          <Icon type="share-alt" />
        ]}
      >
        <div className={css(styles.cardBody)}>
          <p className={css(styles.cardTitle)}>{item.title}</p>
          <div className={css(styles.cardTagsContainer)}>
            <div className={css(styles.tagContainer)}>
              <p className={css(styles.tagText)}>{item.kind}</p>
            </div>
            <div className={css(styles.tagContainer)}>
              <p className={css(styles.tagText)}>{item.gender}</p>
            </div>
            <div className={css(styles.tagContainer)}>
              <p className={css(styles.tagText)}>{item.age}</p>
            </div>
          </div>
          <p className={css(styles.addressText)}>{item.address}</p>
        </div>
      </Card>
    );
  }
}
