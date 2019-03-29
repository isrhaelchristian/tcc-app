import React, { Component } from 'react'
import { css } from "aphrodite";

import Lightbox from 'react-images';

import styles from "./styles";

export default class ImagesGrid extends Component {

  constructor() {
    super()
    this.state = {
      images: [
        {
          src: "https://a0.muscache.com/im/pictures/16f8c559-8767-48d6-928a-8832aa2dc0a1.jpg?aki_policy=xx_large"
        },
        {
          src: "https://a0.muscache.com/im/pictures/c852c7ec-1be6-472a-b494-f24b08340219.jpg?aki_policy=xx_large"
        },
        {
          src: "https://a0.muscache.com/im/pictures/13e072e8-7466-406b-a9c0-71956e620519.jpg?aki_policy=xx_large"
        },
        {
          src: "https://a0.muscache.com/im/pictures/f5183b64-e338-45f6-9a4f-ab27c280bf64.jpg?aki_policy=xx_large"
        },
        {
          src: "https://a0.muscache.com/im/pictures/128a3dee-3ff0-426f-8999-322f67b45019.jpg?aki_policy=xx_large"
        },
      ]
    }
  }
  render() {
    return (
      <div className={css(styles.container)}>
        <Lightbox
          images={this.state.images}
        />
      </div>
    )
  }
}
