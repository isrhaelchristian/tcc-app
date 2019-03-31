import React, { Component } from "react";
import { css } from "aphrodite";

import styles from "./styles";

export default class InfosPet extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.infosContainer)}>
          <span className={css(styles.title)}>nome do pet</span>
          <div className={css(styles.infos)}>
            <div className={css(styles.infosPet)}>
              <span className={css(styles.label)}>espécie</span>
              <span className={css(styles.label)}>idade</span>
              <span className={css(styles.label)}>sexo</span>
            </div>
            <div className={css(styles.infosPet)}>
              <span className={css(styles.value)}>gato</span>
              <span className={css(styles.value)}>jovem</span>
              <span className={css(styles.value)}>macho</span>
            </div>
          </div>
          <div className={css(styles.descContainer)}>
            <p className={css(styles.desciption)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse quis elementum risus, quis ornare neque. Vestibulum ut
              lacus vestibulum, maximus sapien vitae, tempus tellus.
            </p>
          </div>
          <div className={css(styles.publisherContainer)}>
            <div className={css(styles.avatarContainer)}>
              <img
                src="http://i47.tinypic.com/359a4jd.jpg"
                alt=""
                className={css(styles.avatar)}
              />
            </div>
            <div className={css(styles.headerInfos)}>
              <span className={css(styles.name)}>Publicadora</span>
              <span className={css(styles.locality)}>são paulo, sp</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
