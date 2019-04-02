import React, { Component } from "react";
import { css } from "aphrodite";

import Comments from "../Comments"

import styles from "./styles";

export default class ImagesGrid extends Component {
  constructor() {
    super();
    this.state = {
      images: [
        {
          src:
            "https://a0.muscache.com/im/pictures/16f8c559-8767-48d6-928a-8832aa2dc0a1.jpg?aki_policy=xx_large"
        },
        {
          src:
            "https://a0.muscache.com/im/pictures/c852c7ec-1be6-472a-b494-f24b08340219.jpg?aki_policy=xx_large"
        },
        {
          src:
            "https://a0.muscache.com/im/pictures/13e072e8-7466-406b-a9c0-71956e620519.jpg?aki_policy=xx_large"
        },
        {
          src:
            "https://a0.muscache.com/im/pictures/f5183b64-e338-45f6-9a4f-ab27c280bf64.jpg?aki_policy=xx_large"
        },
        {
          src:
            "https://a0.muscache.com/im/pictures/128a3dee-3ff0-426f-8999-322f67b45019.jpg?aki_policy=xx_large"
        }
      ],
      currentImage: 0
    };
  }

  render() {
    const { images } = this.state;
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.mainImgContainer)}>
          <img
            alt=""
            className={css(styles.mainImg)}
            src={images[this.state.currentImage].src}
          />
        </div>
        <div className={css(styles.carouselContainer)}>
          {this.state.images.map((img, index) => (
            <div key={img.src} className={css(styles.thumbnailImgs)}>
              <img
                onClick={() => this.setState({ currentImage: index })}
                alt=""
                src={img.src}
                className={css(styles.thumbail)}
              />
            </div>
          ))}
        </div>
        <Comments />
      </div>
    );
  }
}
