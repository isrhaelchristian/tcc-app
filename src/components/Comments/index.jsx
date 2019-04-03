import React, { Component } from "react";
import { css } from "aphrodite";
import { Icon, Input } from "antd";
import styles from "./styles";

const { TextArea } = Input;

export default class Comments extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.commentContainer)}>
          <div className={css(styles.headerContainer)}>
            <Icon type="message" className={css(styles.headerIcon)} />
            <span className={css(styles.headerText)}>comente</span>
          </div>
          <TextArea rows={4} placeholder="faça sua pergunta (ou elogio)..." />
          <div className={css(styles.footerContainer)}>
            <span className={css(styles.charNumber)}>280</span>
            <div className={css(styles.rightSection)}>
              <span className={css(styles.rules)}>regras para comentários</span>
              <button className={css(styles.sendButton)}>enviar</button>
            </div>
          </div>
        </div>
        <div className={css(styles.comments)}>
        
        </div>
      </div>
    );
  }
}
